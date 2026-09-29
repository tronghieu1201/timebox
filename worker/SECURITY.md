# Timebox Worker security configuration

`worker/index.js` is the canonical Worker source for the current routes. It keeps the existing Cloudinary folder/tag map so old assets and public URLs remain valid.

Required Worker secrets:

- `FAMILY_PASSWORD`
- `FRIENDS_PASSWORD`
- `UPLOAD_PASSWORD`
- `CLOUDINARY_API_SECRET`

Required non-secret variables:

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`

Required KV binding:

- `VERIFY_RATE_LIMIT_KV`

The same KV binding stores short-lived failure counters for `/verify`, `/gallery/upload-signature`, `/gallery/pin`, and `/gallery/unpin`. The key uses Cloudflare's `CF-Connecting-IP` value and does not include scope, so changing scope cannot bypass the limit.

For compatibility with the current site, the whitelisted `campus` verify scope intentionally uses `FRIENDS_PASSWORD`; it is not a client-controlled environment-variable lookup. A separate `CAMPUS_PASSWORD` can be introduced later by changing the explicit Worker map and creating that secret.

This repository does not contain a Wrangler config or the Worker name. Do not invent one. In the Worker that is already deployed, create a KV namespace and bind it with the exact binding name above:

```sh
wrangler kv namespace create VERIFY_RATE_LIMIT_KV
```

Then add the returned namespace ID as the `VERIFY_RATE_LIMIT_KV` binding in the existing Worker configuration/dashboard. If the current deployment is managed through Wrangler, add the binding to that deployment's existing `wrangler.toml`/`wrangler.jsonc` rather than creating a new project.

Wrangler TOML binding shape:

```toml
[[kv_namespaces]]
binding = "VERIFY_RATE_LIMIT_KV"
id = "<namespace-id-from-the-command>"
```

Equivalent JSONC shape:

```jsonc
{
  "kv_namespaces": [
    { "binding": "VERIFY_RATE_LIMIT_KV", "id": "<namespace-id-from-the-command>" }
  ]
}
```

The frontend receives only a Cloudinary API key, timestamp, signed `asset_folder`/`tags`, and signature. `CLOUDINARY_API_SECRET`, passwords, and the KV binding stay in the Worker.
