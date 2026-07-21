// Timebox service worker: fast shell, bounded image cache, fresh API data.
var CACHE_PREFIX = 'timebox-';
var SHELL_CACHE = CACHE_PREFIX + 'shell-v10';
var IMAGE_CACHE = CACHE_PREFIX + 'images-v1';
var ASSET_CACHE = CACHE_PREFIX + 'assets-v1';
var MAX_IMAGE_ENTRIES = 180;
var MAX_ASSET_ENTRIES = 50;

var SHELL_URLS = [
    './',
    './index.html',
    './life.html',
    './moments.html',
    './cooking.html',
    './campus.html',
    './keepsakes.html',
    './friends.html',
    './family.html',
    './style.css',
    './life.css',
    './theme.js',
    './life.js',
    './images/backgrod.webp'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(SHELL_CACHE)
            .then(function (cache) { return cache.addAll(SHELL_URLS); })
            .then(function () { return self.skipWaiting(); })
    );
});

self.addEventListener('activate', function (event) {
    var activeCaches = [SHELL_CACHE, IMAGE_CACHE, ASSET_CACHE];
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.map(function (key) {
                if (key.indexOf(CACHE_PREFIX) === 0 && activeCaches.indexOf(key) === -1) {
                    return caches.delete(key);
                }
                return Promise.resolve(false);
            }));
        }).then(function () { return self.clients.claim(); })
    );
});

function canCache(response) {
    return Boolean(response && (response.ok || response.type === 'opaque'));
}

function trimCache(cacheName, maxEntries) {
    return caches.open(cacheName).then(function (cache) {
        return cache.keys().then(function (keys) {
            var overflow = keys.length - maxEntries;
            if (overflow <= 0) return undefined;
            return Promise.all(keys.slice(0, overflow).map(function (key) {
                return cache.delete(key);
            }));
        });
    });
}

function cacheFirst(request, cacheName, maxEntries) {
    return caches.open(cacheName).then(function (cache) {
        return cache.match(request).then(function (cached) {
            if (cached) return cached;
            return fetch(request).then(function (response) {
                if (canCache(response)) {
                    cache.put(request, response.clone()).then(function () {
                        return trimCache(cacheName, maxEntries);
                    }).catch(function () {});
                }
                return response;
            });
        });
    });
}

function staleWhileRevalidate(request) {
    return caches.open(SHELL_CACHE).then(function (cache) {
        return cache.match(request).then(function (cached) {
            var network = fetch(request).then(function (response) {
                if (canCache(response)) cache.put(request, response.clone()).catch(function () {});
                return response;
            }).catch(function () { return cached; });
            return cached || network;
        });
    });
}

function navigationNetworkFirst(request) {
    var cacheUrl = new URL(request.url);
    cacheUrl.search = '';
    cacheUrl.hash = '';
    return fetch(request).then(function (response) {
        if (canCache(response)) {
            caches.open(SHELL_CACHE).then(function (cache) {
                cache.put(cacheUrl.toString(), response.clone()).catch(function () {});
            });
        }
        return response;
    }).catch(function () {
        return caches.open(SHELL_CACHE).then(function (cache) {
            return cache.match(cacheUrl.toString()).then(function (cached) {
                return cached || cache.match('./');
            });
        });
    });
}

self.addEventListener('fetch', function (event) {
    var request = event.request;
    if (request.method !== 'GET') return;

    var url;
    try { url = new URL(request.url); } catch (error) { return; }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

    // Password, signatures and gallery metadata must always come from the Worker.
    if (url.hostname === 'timebox.trghy.workers.dev') return;

    // Cloudinary delivery URLs are versioned, so cache-first is safe and much faster.
    if (url.hostname === 'res.cloudinary.com' && url.pathname.indexOf('/image/upload/') !== -1) {
        event.respondWith(cacheFirst(request, IMAGE_CACHE, MAX_IMAGE_ENTRIES));
        return;
    }

    if (url.hostname === 'cdnjs.cloudflare.com' ||
        url.hostname === 'fonts.googleapis.com' ||
        url.hostname === 'fonts.gstatic.com') {
        event.respondWith(cacheFirst(request, ASSET_CACHE, MAX_ASSET_ENTRIES));
        return;
    }

    if (request.mode === 'navigate' && url.origin === self.location.origin) {
        event.respondWith(navigationNetworkFirst(request));
        return;
    }

    if (url.origin === self.location.origin) {
        event.respondWith(staleWhileRevalidate(request));
    }
});
