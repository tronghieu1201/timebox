// sw.js – Service Worker for Timebox
// Cache-first cho shell pages, network-first cho Cloudinary images

var CACHE_NAME = 'timebox-v1';

// Các file shell — cache ngay khi install
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

// Install: cache shell
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(SHELL_URLS);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});

// Activate: xóa cache cũ
self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys.filter(function (key) { return key !== CACHE_NAME; })
                    .map(function (key) { return caches.delete(key); })
            );
        }).then(function () {
            return self.clients.claim();
        })
    );
});

// Fetch strategy:
// - Shell files (.html, .css, .js, .webp local) → stale-while-revalidate
// - Cloudinary / external → network-first với fallback cache
// - Font Awesome, Google Fonts → cache-first (immutable)
self.addEventListener('fetch', function (e) {
    var url = e.request.url;

    // Bỏ qua non-GET
    if (e.request.method !== 'GET') return;

    // Chỉ xử lý http/https — bỏ qua chrome-extension và các scheme khác
    if (!url.startsWith('http://') && !url.startsWith('https://')) return;

    // Cloudinary uploads (ảnh user upload) — network only, không cache để tránh stale
    if (url.indexOf('res.cloudinary.com') !== -1 && url.indexOf('/upload/') !== -1) {
        return; // browser tự xử lý
    }

    // Font Awesome & Google Fonts — cache-first (CDN immutable)
    if (url.indexOf('cdnjs.cloudflare.com') !== -1 || url.indexOf('fonts.googleapis.com') !== -1 || url.indexOf('fonts.gstatic.com') !== -1) {
        e.respondWith(
            caches.match(e.request).then(function (cached) {
                if (cached) return cached;
                return fetch(e.request).then(function (response) {
                    if (response && response.status === 200) {
                        var clone = response.clone();
                        caches.open(CACHE_NAME).then(function (cache) { cache.put(e.request, clone); });
                    }
                    return response;
                });
            })
        );
        return;
    }

    // Shell files — stale-while-revalidate (instant từ cache, update ngầm)
    e.respondWith(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.match(e.request).then(function (cached) {
                var fetchPromise = fetch(e.request).then(function (response) {
                    if (response && response.status === 200) {
                        cache.put(e.request, response.clone());
                    }
                    return response;
                }).catch(function () { return cached; });

                // Trả về cache ngay nếu có, update ngầm
                return cached || fetchPromise;
            });
        })
    );
});
