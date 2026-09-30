const ALLOWED_ORIGINS = [
  "https://tronghieu1201.github.io",
  "http://127.0.0.1:5500",
  "http://localhost:5500",
];

const GALLERY_SCOPES = Object.freeze({
  family: {
    assetFolder: "family",
    tag: "timebox_live_family",
    pinTag: "timebox_pinned_family",
    unpinTag: "timebox_unpinned_family",
  },
  keepsakes: {
    assetFolder: "middle school",
    tag: "timebox_live_keepsakes",
    pinTag: "timebox_pinned_keepsakes",
    unpinTag: "timebox_unpinned_keepsakes",
  },
  friends: {
    assetFolder: "Best frend",
    tag: "timebox_live_friends",
    pinTag: "timebox_pinned_friends",
    unpinTag: "timebox_unpinned_friends",
  },
  cooking: {
    assetFolder: "cooking",
    tag: "timebox_live_cooking",
    pinTag: "timebox_pinned_cooking",
    unpinTag: "timebox_unpinned_cooking",
  },
  campus: {
    assetFolder: "Student",
    tag: "timebox_live_campus",
    pinTag: "timebox_pinned_campus",
    unpinTag: "timebox_unpinned_campus",
  },
  upload: {
    assetFolder: "Upload",
    tag: "timebox_live_upload",
    pinTag: "timebox_pinned_upload",
    unpinTag: "timebox_unpinned_upload",
  },
});

const VERIFY_PASSWORDS = Object.freeze({
  family: "FAMILY_PASSWORD",
  friends: "FRIENDS_PASSWORD",
  // Preserve the current site's campus unlock behavior: it uses the friends key.
  campus: "FRIENDS_PASSWORD",
});

const GALLERY_CACHE_TTL_SECONDS = 45;
const MAX_JSON_BODY_BYTES = 8192;
const RATE_LIMIT_WINDOW_SECONDS = 60;
const RATE_LIMIT_MAX_FAILURES = 5;
const RATE_LIMIT_COOLDOWN_SECONDS = 60;
const ADMIN_SESSION_TTL_SECONDS = 7 * 60;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const allowed = !origin || ALLOWED_ORIGINS.includes(origin);
    const corsHeaders = makeCorsHeaders(origin, allowed);

    try {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: allowed ? 204 : 403,
          headers: allowed ? corsHeaders : undefined,
        });
      }

      if (request.method === "GET" && url.pathname === "/") {
        return json({ status: "Timebox Auth & Gallery active" }, 200, corsHeaders);
      }

      if (!allowed) {
        return json({ ok: false, message: "Origin not allowed" }, 403, corsHeaders);
      }

      if (request.method === "POST" && url.pathname === "/verify") {
        return verifyPassword(request, env, corsHeaders);
      }

      if (request.method === "POST" && url.pathname === "/admin/verify") {
        return verifyAdmin(request, env, corsHeaders);
      }

      if (request.method === "POST" && url.pathname === "/gallery/upload-signature") {
        return createUploadSignature(request, env, corsHeaders);
      }

      if (request.method === "POST" && url.pathname === "/gallery/unpin") {
        return unpinGalleryImage(request, env, corsHeaders);
      }

      if (request.method === "POST" && url.pathname === "/gallery/pin") {
        return pinGalleryImage(request, env, corsHeaders);
      }

      if (request.method === "POST" && url.pathname === "/gallery/delete") {
        return deleteGalleryImage(request, env, corsHeaders);
      }

      if (request.method === "GET" && url.pathname === "/gallery/images") {
        return listGalleryImages(url, env, corsHeaders);
      }

      const knownRoute = [
        "/verify",
        "/admin/verify",
        "/gallery/upload-signature",
        "/gallery/unpin",
        "/gallery/pin",
        "/gallery/delete",
        "/gallery/images",
      ].includes(url.pathname);
      return json(
        { ok: false, message: knownRoute ? "Method not allowed" : "Not found" },
        knownRoute ? 405 : 404,
        corsHeaders
      );
    } catch (error) {
      console.error("Worker request failed", error);
      return json({ ok: false, message: "Internal server error" }, 500, corsHeaders);
    }
  },
};

async function verifyPassword(request, env, headers) {
  const body = await readJson(request);
  if (!body || !hasOnlyKeys(body, ["password", "scope"])) {
    return json({ ok: false, message: "Invalid request" }, 400, headers);
  }

  const scope = typeof body.scope === "string" ? body.scope : "";
  const password = cleanPassword(body.password);
  const secretName = VERIFY_PASSWORDS[scope];
  if (!secretName || !password) {
    return json({ ok: false, message: "Invalid request" }, 400, headers);
  }

  const rate = await checkRateLimit(request, env, "verify");
  if (rate.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
  if (rate.limited) return rateLimited(headers, rate.retryAfter);

  const expectedPassword = env[secretName];
  if (!expectedPassword) {
    console.error(`Missing Worker secret: ${secretName}`);
    return json({ ok: false, message: "Internal server error" }, 500, headers);
  }

  const ok = constantTimeEqual(password, String(expectedPassword));
  if (ok) {
    await clearRateLimit(request, env, "verify");
    return json({ ok: true }, 200, headers);
  }

  const failure = await recordRateLimitFailure(request, env, "verify");
  if (failure.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
  return json({ ok: false }, 401, headers);
}

async function verifyAdmin(request, env, headers) {
  const body = await readJson(request);
  if (!body || !hasOnlyKeys(body, ["username", "password"])) {
    return json({ ok: false, message: "Invalid request" }, 400, headers);
  }

  const username = cleanUsername(body.username);
  const password = cleanPassword(body.password);
  if (!username || !password) {
    return json({ ok: false, message: "Invalid request" }, 400, headers);
  }

  const rate = await checkRateLimit(request, env, "admin-verify");
  if (rate.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
  if (rate.limited) return rateLimited(headers, rate.retryAfter);

  if (!env.ADMIN_USERNAME || !env.ADMIN_PASSWORD) {
    console.error("Missing Worker secrets: ADMIN_USERNAME or ADMIN_PASSWORD");
    return json({ ok: false, message: "Internal server error" }, 500, headers);
  }

  const ok = constantTimeEqual(username, String(env.ADMIN_USERNAME)) &&
    constantTimeEqual(password, String(env.ADMIN_PASSWORD));
  if (ok) {
    await clearRateLimit(request, env, "admin-verify");
    const now = Math.floor(Date.now() / 1000);
    const token = await createAdminSessionToken(env, now);
    return json({ ok: true, token, expiresAt: (now + ADMIN_SESSION_TTL_SECONDS) * 1000 }, 200, headers);
  }

  const failure = await recordRateLimitFailure(request, env, "admin-verify");
  if (failure.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
  return json({ ok: false }, 401, headers);
}

async function requireAdminOrUploadPassword(request, value, env, headers) {
  if (request.headers.get("Authorization")) {
    const admin = await requireAdminSession(request, env);
    if (admin.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
    if (admin.ok) return null;
  }
  return requireUploadPassword(request, value, env, headers);
}

async function requireAdminSession(request, env) {
  const authorization = request.headers.get("Authorization") || "";
  const match = /^Bearer\s+([A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)$/.exec(authorization);
  if (!match) return { ok: false, error: false };
  if (!env.ADMIN_PASSWORD) {
    console.error("Missing Worker secret: ADMIN_PASSWORD");
    return { ok: false, error: true };
  }

  const parts = match[1].split(".");
  const encodedPayload = parts[0];
  const providedSignature = parts[1];
  const expectedSignature = await signAdminPayload(encodedPayload, String(env.ADMIN_PASSWORD));
  if (!constantTimeEqual(providedSignature, expectedSignature)) {
    return { ok: false, error: false };
  }

  try {
    const payload = JSON.parse(base64UrlDecode(encodedPayload));
    const now = Math.floor(Date.now() / 1000);
    if (!payload || payload.sub !== "admin" || Number(payload.exp) <= now) {
      return { ok: false, error: false };
    }
    return { ok: true, error: false };
  } catch {
    return { ok: false, error: false };
  }
}

async function createAdminSessionToken(env, now) {
  const payload = base64UrlEncode(JSON.stringify({
    sub: "admin",
    iat: now,
    exp: now + ADMIN_SESSION_TTL_SECONDS,
  }));
  const signature = await signAdminPayload(payload, String(env.ADMIN_PASSWORD));
  return payload + "." + signature;
}

async function signAdminPayload(payload, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return base64UrlEncode(new Uint8Array(signature));
}

function base64UrlEncode(value) {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : value;
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlDecode(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function createUploadSignature(request, env, headers) {
  const body = await readJson(request);
  if (!body || !hasOnlyKeys(body, ["scope", "mediaType", "pinned", "password"])) {
    return json({ ok: false, message: "Invalid request" }, 400, headers);
  }

  const scope = typeof body.scope === "string" ? body.scope : "";
  const config = GALLERY_SCOPES[scope];
  const mediaType = body.mediaType;
  if (!config || (mediaType !== "image" && mediaType !== "video") || typeof body.pinned !== "boolean" ||
      (scope === "upload" && body.pinned !== false)) {
    return json({ ok: false, message: "Invalid upload request" }, 400, headers);
  }

  const authResponse = await requireAdminOrUploadPassword(request, body.password, env, headers);
  if (authResponse) return authResponse;

  const missingCloudinary = getMissingCloudinaryConfig(env);
  if (missingCloudinary.length) {
    console.error("Missing Cloudinary Worker configuration", missingCloudinary);
    return json({ ok: false, message: "Internal server error" }, 500, headers);
  }

  const videoFolderMap = {
    family: "Upload video/video family",
    keepsakes: "Upload video/video middle school",
    friends: "Upload video/video Best frend",
    campus: "Upload video/video Student",
    cooking: "Upload video/video cooking",
    upload: "Upload video/video upload",
  };
  const assetFolder = mediaType === "video"
    ? videoFolderMap[scope]
    : config.assetFolder;
  const timestamp = Math.floor(Date.now() / 1000);
  const tags = body.pinned ? `${config.tag},${config.pinTag}` : config.tag;
  const signedParams = `asset_folder=${assetFolder}&tags=${tags}&timestamp=${timestamp}`;
  const signature = await sha1Hex(`${signedParams}${env.CLOUDINARY_API_SECRET}`);

  await deleteGalleryCache(scope);
  return json({
    ok: true,
    apiKey: env.CLOUDINARY_API_KEY,
    timestamp,
    signature,
    assetFolder,
    tags,
    mediaType,
    uploadUrl: `https://api.cloudinary.com/v1_1/${encodeURIComponent(env.CLOUDINARY_CLOUD_NAME)}/${mediaType}/upload`,
  }, 200, headers);
}

async function requireUploadPassword(request, value, env, headers) {
  const password = cleanPassword(value);
  if (!password) return json({ ok: false, message: "Invalid upload password" }, 401, headers);

  const rate = await checkRateLimit(request, env, "upload-mutation");
  if (rate.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
  if (rate.limited) return rateLimited(headers, rate.retryAfter);

  if (!env.UPLOAD_PASSWORD) {
    console.error("Missing Worker secret: UPLOAD_PASSWORD");
    return json({ ok: false, message: "Internal server error" }, 500, headers);
  }

  if (constantTimeEqual(password, String(env.UPLOAD_PASSWORD))) {
    await clearRateLimit(request, env, "upload-mutation");
    return null;
  }

  const failure = await recordRateLimitFailure(request, env, "upload-mutation");
  if (failure.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
  return json({ ok: false, message: "Invalid upload password" }, 401, headers);
}

async function unpinGalleryImage(request, env, headers) {
  const body = await readJson(request);
  if (!body || !hasOnlyKeys(body, ["scope", "publicId", "password"])) {
    return json({ ok: false, message: "Invalid request" }, 400, headers);
  }
  const scope = typeof body.scope === "string" ? body.scope : "";
  const publicId = cleanPublicId(body.publicId);
  const config = GALLERY_SCOPES[scope];
  if (!config || !publicId) return json({ ok: false, message: "Invalid unpin request" }, 400, headers);

  const admin = await requireAdminSession(request, env);
  if (admin.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
  if (!admin.ok) return json({ ok: false, message: "Unauthorized" }, 401, headers);
  if (getMissingCloudinaryConfig(env).length) {
    console.error("Missing Cloudinary Worker configuration");
    return json({ ok: false, message: "Internal server error" }, 500, headers);
  }

  const removeResult = await updateCloudinaryTag(env, "remove", config.pinTag, publicId);
  if (!removeResult.ok) return json({ ok: false, message: "Unable to unpin image" }, 502, headers);
  const rememberResult = await updateCloudinaryTag(env, "add", config.unpinTag, publicId);
  if (!rememberResult.ok) return json({ ok: false, message: "Unable to save image state" }, 502, headers);

  await deleteGalleryCache(scope);
  return json({ ok: true, scope, publicId }, 200, headers);
}

async function pinGalleryImage(request, env, headers) {
  const body = await readJson(request);
  if (!body || !hasOnlyKeys(body, ["scope", "publicId", "password"])) {
    return json({ ok: false, message: "Invalid request" }, 400, headers);
  }
  const scope = typeof body.scope === "string" ? body.scope : "";
  const publicId = cleanPublicId(body.publicId);
  const config = GALLERY_SCOPES[scope];
  if (!config || !publicId) return json({ ok: false, message: "Invalid pin request" }, 400, headers);

  const admin = await requireAdminSession(request, env);
  if (admin.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
  if (!admin.ok) return json({ ok: false, message: "Unauthorized" }, 401, headers);
  if (getMissingCloudinaryConfig(env).length) {
    console.error("Missing Cloudinary Worker configuration");
    return json({ ok: false, message: "Internal server error" }, 500, headers);
  }

  const clearUnpinResult = await updateCloudinaryTag(env, "remove", config.unpinTag, publicId);
  if (!clearUnpinResult.ok) return json({ ok: false, message: "Unable to update image state" }, 502, headers);
  const pinResult = await updateCloudinaryTag(env, "add", config.pinTag, publicId);
  if (!pinResult.ok) return json({ ok: false, message: "Unable to pin image" }, 502, headers);

  await deleteGalleryCache(scope);
  return json({ ok: true, scope, publicId }, 200, headers);
}

async function deleteGalleryImage(request, env, headers) {
  const body = await readJson(request);
  if (!body || !hasOnlyKeys(body, ["scope", "publicId", "resourceType"])) {
    return json({ ok: false, message: "Invalid request" }, 400, headers);
  }

  const scope = typeof body.scope === "string" ? body.scope : "";
  const publicId = cleanPublicId(body.publicId);
  const resourceType = body.resourceType;
  if (!GALLERY_SCOPES[scope] || !publicId || (resourceType !== "image" && resourceType !== "video")) {
    return json({ ok: false, message: "Invalid delete request" }, 400, headers);
  }

  const admin = await requireAdminSession(request, env);
  if (admin.error) return json({ ok: false, message: "Internal server error" }, 500, headers);
  if (!admin.ok) return json({ ok: false, message: "Unauthorized" }, 401, headers);

  if (getMissingCloudinaryConfig(env).length) {
    console.error("Missing Cloudinary Worker configuration");
    return json({ ok: false, message: "Internal server error" }, 500, headers);
  }

  const result = await destroyCloudinaryResource(env, resourceType, publicId);
  if (!result.ok) {
    return json({ ok: false, message: "Unable to delete image" }, 502, headers);
  }

  await deleteGalleryCache(scope);
  return json({ ok: true, scope, publicId }, 200, headers);
}

async function listGalleryImages(url, env, headers) {
  const scope = url.searchParams.get("scope") || "";
  const config = GALLERY_SCOPES[scope];
  if (!config) return json({ ok: false, message: "Invalid album" }, 400, headers);

  const cachedPayload = await readGalleryCache(scope);
  if (cachedPayload) return json(cachedPayload, 200, headers);

  const missingCloudinary = getMissingCloudinaryConfig(env);
  if (missingCloudinary.length) {
    console.error("Missing Cloudinary Worker configuration", missingCloudinary);
    return json({ ok: false, message: "Internal server error" }, 500, headers);
  }

  const [liveImages, liveVideos, pinnedResult, unpinnedResult] = await Promise.all([
    getCloudinaryResourcesByTag(env, config.tag, 100, "image"),
    getCloudinaryResourcesByTag(env, config.tag, 100, "video"),
    getCloudinaryResourcesByTag(env, config.pinTag, 100, "image"),
    getCloudinaryResourcesByTag(env, config.unpinTag, 100, "image"),
  ]);
  if (!liveImages.ok || !liveVideos.ok) {
    return json({ ok: false, message: "Unable to load gallery" }, 502, headers);
  }

  const unpinnedSet = new Set((unpinnedResult.resources || []).map((resource) => resource.public_id).filter(Boolean));
  const pinnedPublicIds = (pinnedResult.resources || []).map((resource) => resource.public_id).filter(Boolean);
  const pinnedSet = new Set(pinnedPublicIds);
  const combinedResources = [...(liveImages.resources || []), ...(liveVideos.resources || [])];
  const images = combinedResources
    .filter((resource) => resource.secure_url)
    .sort((a, b) => Date.parse(b.created_at || 0) - Date.parse(a.created_at || 0))
    .map((resource) => ({
      src: resource.secure_url,
      publicId: resource.public_id,
      createdAt: resource.created_at,
      width: resource.width,
      height: resource.height,
      resourceType: resource.resource_type,
      pinned: !unpinnedSet.has(resource.public_id) &&
        (pinnedSet.has(resource.public_id) || (Array.isArray(resource.tags) && resource.tags.includes(config.pinTag))),
    }));

  const payload = { ok: true, scope, images, pinnedPublicIds, unpinnedPublicIds: [...unpinnedSet] };
  await writeGalleryCache(scope, payload);
  return json(payload, 200, headers);
}

async function checkRateLimit(request, env, bucket) {
  const kv = env.VERIFY_RATE_LIMIT_KV;
  if (!kv) return { error: true };
  const key = rateLimitKey(request, bucket);
  const state = await kv.get(key, "json");
  const now = Math.floor(Date.now() / 1000);
  if (!state || typeof state !== "object") return { limited: false };
  if (Number(state.cooldownUntil) > now) {
    return { limited: true, retryAfter: Math.max(1, Number(state.cooldownUntil) - now) };
  }
  if (Number(state.windowStarted) + RATE_LIMIT_WINDOW_SECONDS <= now) return { limited: false };
  return { limited: false };
}

async function recordRateLimitFailure(request, env, bucket) {
  const kv = env.VERIFY_RATE_LIMIT_KV;
  if (!kv) return { error: true };
  const key = rateLimitKey(request, bucket);
  const now = Math.floor(Date.now() / 1000);
  const state = await kv.get(key, "json");
  const inWindow = state && Number(state.windowStarted) + RATE_LIMIT_WINDOW_SECONDS > now;
  const failures = inWindow ? Number(state.failures) || 0 : 0;
  const next = {
    failures: failures + 1,
    windowStarted: inWindow ? Number(state.windowStarted) : now,
    cooldownUntil: failures + 1 >= RATE_LIMIT_MAX_FAILURES ? now + RATE_LIMIT_COOLDOWN_SECONDS : 0,
  };
  await kv.put(key, JSON.stringify(next), { expirationTtl: RATE_LIMIT_WINDOW_SECONDS + RATE_LIMIT_COOLDOWN_SECONDS });
  return { error: false, state: next };
}

async function clearRateLimit(request, env, bucket) {
  if (env.VERIFY_RATE_LIMIT_KV) await env.VERIFY_RATE_LIMIT_KV.delete(rateLimitKey(request, bucket));
}

function rateLimitKey(request, bucket) {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  return `timebox-rate:${bucket}:${ip}`;
}

function rateLimited(headers, retryAfter) {
  const responseHeaders = new Headers(headers);
  responseHeaders.set("Retry-After", String(Math.max(1, retryAfter || RATE_LIMIT_COOLDOWN_SECONDS)));
  return json({ ok: false, message: "Too many attempts" }, 429, responseHeaders);
}

function getGalleryCacheRequest(scope) {
  return new Request(`https://timebox-gallery-cache.invalid/gallery/images?scope=${encodeURIComponent(scope)}`, { method: "GET" });
}

async function readGalleryCache(scope) {
  if (typeof caches === "undefined" || !caches.default) return null;
  try {
    const response = await caches.default.match(getGalleryCacheRequest(scope));
    return response ? await response.json() : null;
  } catch {
    return null;
  }
}

async function writeGalleryCache(scope, payload) {
  if (typeof caches === "undefined" || !caches.default) return;
  try {
    await caches.default.put(getGalleryCacheRequest(scope), Response.json(payload, {
      headers: { "Cache-Control": `public, max-age=${GALLERY_CACHE_TTL_SECONDS}` },
    }));
  } catch {
    // Cache is only an optimization.
  }
}

async function deleteGalleryCache(scope) {
  if (typeof caches === "undefined" || !caches.default) return;
  try {
    await caches.default.delete(getGalleryCacheRequest(scope));
  } catch {
    // Cache is only an optimization.
  }
}

async function getCloudinaryResourcesByTag(env, tag, maxResults, resourceType) {
  const endpoint = new URL(`https://api.cloudinary.com/v1_1/${encodeURIComponent(env.CLOUDINARY_CLOUD_NAME)}/resources/${resourceType}/tags/${encodeURIComponent(tag)}`);
  endpoint.searchParams.set("max_results", String(maxResults || 100));
  endpoint.searchParams.set("direction", "desc");
  endpoint.searchParams.set("tags", "true");
  const response = await fetch(endpoint.toString(), { headers: { Authorization: cloudinaryAuthorization(env) } });
  const data = await response.json().catch(() => ({}));
  return { ok: response.ok, resources: data.resources || [] };
}

async function updateCloudinaryTag(env, command, tag, publicId) {
  const endpoint = `https://api.cloudinary.com/v1_1/${encodeURIComponent(env.CLOUDINARY_CLOUD_NAME)}/image/tags`;
  const form = new URLSearchParams();
  form.set("command", command);
  form.set("tag", tag);
  form.append("public_ids[]", publicId);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { Authorization: cloudinaryAuthorization(env), "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });
  return { ok: response.ok };
}

async function destroyCloudinaryResource(env, resourceType, publicId) {
  const timestamp = Math.floor(Date.now() / 1000);
  const signedParams = "invalidate=true&public_id=" + publicId +
    "&timestamp=" + timestamp + "&type=upload";
  const signature = await sha1Hex(signedParams + env.CLOUDINARY_API_SECRET);
  const endpoint = "https://api.cloudinary.com/v1_1/" +
    encodeURIComponent(env.CLOUDINARY_CLOUD_NAME) + "/" +
    resourceType + "/destroy";
  const form = new URLSearchParams();
  form.set("public_id", publicId);
  form.set("timestamp", String(timestamp));
  form.set("type", "upload");
  form.set("invalidate", "true");
  form.set("signature", signature);
  form.set("api_key", env.CLOUDINARY_API_KEY);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });
  const data = await response.json().catch(() => ({}));
  return { ok: response.ok && data.result !== "error" };
}

function cloudinaryAuthorization(env) {
  return `Basic ${btoa(`${env.CLOUDINARY_API_KEY}:${env.CLOUDINARY_API_SECRET}`)}`;
}

function makeCorsHeaders(origin, allowed) {
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Cache-Control": "no-store",
    Vary: "Origin",
  };
  if (allowed && origin) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

function getMissingCloudinaryConfig(env) {
  return ["CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"].filter((name) => !env[name]);
}

async function readJson(request) {
  const contentType = request.headers.get("Content-Type") || "";
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (!/^application\/json(?:\s*;|$)/i.test(contentType) || contentLength > MAX_JSON_BODY_BYTES) return null;
  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > MAX_JSON_BODY_BYTES) return null;
  try {
    const body = JSON.parse(text);
    return body && typeof body === "object" && !Array.isArray(body) ? body : null;
  } catch {
    return null;
  }
}

function hasOnlyKeys(value, allowedKeys) {
  const keys = Object.keys(value);
  return keys.every((key) => allowedKeys.includes(key));
}

function cleanPassword(value) {
  if (typeof value !== "string") return "";
  const password = value.trim();
  return password && password.length <= 200 ? password : "";
}

function cleanUsername(value) {
  if (typeof value !== "string") return "";
  const username = value.trim();
  return username && username.length <= 200 ? username : "";
}

function cleanPublicId(value) {
  if (typeof value !== "string") return "";
  const publicId = value.trim();
  return publicId && publicId.length <= 255 && /^[A-Za-z0-9_/.()\-\s]+$/.test(publicId) ? publicId : "";
}

function json(body, status, headers) {
  return Response.json(body, { status, headers });
}

function constantTimeEqual(a, b) {
  const encoder = new TextEncoder();
  const first = encoder.encode(a);
  const second = encoder.encode(b);
  let difference = first.length ^ second.length;
  const length = Math.max(first.length, second.length);
  for (let i = 0; i < length; i += 1) difference |= (first[i] || 0) ^ (second[i] || 0);
  return difference === 0;
}

async function sha1Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-1", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
