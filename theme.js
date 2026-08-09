// theme.js – interactions for link panels, modals, galleries, and toasts.
(function () {
    /* ---- Service Worker Registration ---- */
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' })
                .then(function (registration) { return registration.update(); })
                .catch(function (error) {
                    console.warn('[Timebox] Service worker update failed:', error);
                });
        });
    }

    /* ---- Page Transition Helpers (exposed globally) ---- */
    function prefetchPage(url) {
        if (!url || !document.createElement) return;
        try {
            var existing = document.querySelector('link[rel="prefetch"][href="' + url + '"]');
            if (existing) return;
            var link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = url;
            document.head.appendChild(link);
        } catch (e) {}
    }

    function navigateWithTransition(url) {
        if (!url) return;
        try { sessionStorage.setItem('_nav_transition', '1'); } catch (e) {}
        var mainCard = document.querySelector('.bio-card');
        if (mainCard) {
            mainCard.classList.add('is-exiting');
        }
        document.body.classList.add('is-page-transitioning');
        setTimeout(function () {
            window.location.href = url;
        }, 150);
    }

    // Expose to global scope for inline use across pages
    window.navigateWithTransition = navigateWithTransition;
    window.prefetchPage = prefetchPage;

    /* ---- Page Enter Animation ---- */
    (function () {
        var mainCard = document.querySelector('.bio-card');
        if (!mainCard) return;
        var fromInternalNav = false;
        try { fromInternalNav = sessionStorage.getItem('_nav_transition') === '1'; } catch (e) {}
        if (fromInternalNav) {
            mainCard.classList.add('is-entering');
            try { sessionStorage.removeItem('_nav_transition'); } catch (e) {}
            mainCard.addEventListener('animationend', function () {
                mainCard.classList.remove('is-entering');
            }, { once: true });
        }
    })();

    /* ---- Smooth back button on life/album pages ---- */
    document.querySelectorAll('.life-back').forEach(function (backLink) {
        backLink.addEventListener('click', function (e) {
            var href = backLink.getAttribute('href');
            if (!href || href === '#') return;
            e.preventDefault();
            if (backLink.hasAttribute('data-history-back')) {
                var fallback = backLink.getAttribute('data-back-fallback') || href;
                var referrer = '';
                try { referrer = document.referrer ? new URL(document.referrer).origin : ''; } catch (err) {}
                if (window.history.length > 1 && referrer === window.location.origin) {
                    window.history.back();
                    return;
                }
                navigateWithTransition(fallback);
                return;
            }
            navigateWithTransition(href);
        });
    });

    /* ---- Pointer-tracking ripple on .link-btn ---- */
    var lastRippleTime = 0;
    var rippleThrottle = 16; // ~60fps

    document.querySelectorAll('.link-btn').forEach(function (btn) {
        btn.addEventListener('mousemove', function (e) {
            var now = Date.now();
            if (now - lastRippleTime < rippleThrottle) return;
            lastRippleTime = now;

            var rect = btn.getBoundingClientRect();
            var x = ((e.clientX - rect.left) / rect.width) * 100;
            var y = ((e.clientY - rect.top) / rect.height) * 100;
            btn.style.setProperty('--mx', x + '%');
            btn.style.setProperty('--my', y + '%');
        });
    });

    /* ---- Link group panels ---- */
    var linkHub = document.getElementById('link-hub');
    var linkPanels = Array.prototype.slice.call(document.querySelectorAll('.link-panel'));
    var panelHistoryActive = false;
    var qrHistoryActive = false;

    function pushUiState(state) {
        if (!window.history || !window.history.pushState) return false;
        try {
            window.history.pushState(state, '');
            return true;
        } catch (e) {
            return false;
        }
    }

    function hasOpenLinkPanel() {
        return linkPanels.some(function (panel) {
            return panel.classList.contains('is-open');
        });
    }

    function closeLinkPanels() {
        if (linkHub) linkHub.classList.remove('is-hidden');
        linkPanels.forEach(function (panel) {
            panel.classList.remove('is-open');
            panel.setAttribute('aria-hidden', 'true');
        });
        document.querySelectorAll('[data-panel-target]').forEach(function (btn) {
            btn.classList.remove('is-active');
            btn.setAttribute('aria-expanded', 'false');
        });
        panelHistoryActive = false;
    }

    function openLinkPanel(panelId, skipHistory) {
        var target = document.getElementById(panelId);
        if (!target || !linkHub) return;

        if (!skipHistory) {
            panelHistoryActive = pushUiState({ bioPanel: panelId });
        }

        linkHub.classList.add('is-hidden');
        linkPanels.forEach(function (panel) {
            var isTarget = panel === target;
            panel.classList.toggle('is-open', isTarget);
            panel.setAttribute('aria-hidden', isTarget ? 'false' : 'true');
        });

        document.querySelectorAll('[data-panel-target]').forEach(function (btn) {
            var isActive = btn.getAttribute('data-panel-target') === panelId;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
    }

    document.querySelectorAll('[data-panel-target]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            openLinkPanel(btn.getAttribute('data-panel-target'));
        });
    });

    var personalLink = document.getElementById('link-life');
    if (personalLink) {
        personalLink.addEventListener('click', function (e) {
            e.preventDefault();
            navigateWithTransition(personalLink.getAttribute('href'));
        });
        prefetchPage(personalLink.getAttribute('href'));
    }

    /* ---- Prefetch sub-pages on life.html ---- */
    (function () {
        if (!/\/life\.html$/i.test(window.location.pathname)) return;
        var subPages = ['./moments.html', './campus.html', './cooking.html'];
        // Prefetch after a short idle delay so it doesn't compete with initial load
        var schedFn = window.requestIdleCallback || function (cb) { setTimeout(cb, 400); };
        schedFn(function () {
            subPages.forEach(function (url) { prefetchPage(url); });
        });
    })();

    document.querySelectorAll('[data-panel-back]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (panelHistoryActive) {
                window.history.back();
            } else {
                closeLinkPanels();
            }
        });
    });

    /* ---- QR Lightbox ---- */
    var lightbox = document.getElementById('qr-lightbox');
    var qrLightboxImg = document.getElementById('qr-lightbox-img');

    function openLightbox(trigger, skipHistory) {
        if (lightbox) {
            var qrSrc = trigger ? trigger.getAttribute('data-qr-src') : '';
            var qrAlt = trigger ? trigger.getAttribute('data-qr-alt') : '';
            if (trigger && qrLightboxImg) {
                qrLightboxImg.src = qrSrc || 'https://res.cloudinary.com/dtpw5htqs/image/upload/v1782284227/qr_zalo_huh7bk.webp';
                qrLightboxImg.alt = qrAlt || 'Ma QR phong to';
            }
            if (!skipHistory) {
                qrHistoryActive = pushUiState({
                    qrLightbox: true,
                    qrSrc: qrSrc || 'https://res.cloudinary.com/dtpw5htqs/image/upload/v1782284227/qr_zalo_huh7bk.webp',
                    qrAlt: qrAlt || 'Ma QR phong to'
                });
            }
            document.body.classList.add('is-modal-open');
            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
        }
    }

    function closeLightbox(skipHistory) {
        if (lightbox) {
            if (!skipHistory && qrHistoryActive) {
                window.history.back();
                return;
            }
            document.body.classList.remove('is-modal-open');
            lightbox.classList.remove('is-open');
            lightbox.setAttribute('aria-hidden', 'true');
            qrHistoryActive = false;
        }
    }

    document.querySelectorAll('[data-qr-src]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            openLightbox(btn);
        });
    });

    if (lightbox) {
        lightbox.querySelector('.lightbox__backdrop').addEventListener('click', function () {
            closeLightbox();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    window.addEventListener('popstate', function (e) {
        if (e.state && e.state.qrLightbox) {
            if (qrLightboxImg) {
                qrLightboxImg.src = e.state.qrSrc || 'https://res.cloudinary.com/dtpw5htqs/image/upload/v1782284227/qr_zalo_huh7bk.webp';
                qrLightboxImg.alt = e.state.qrAlt || 'Ma QR phong to';
            }
            qrHistoryActive = true;
            openLightbox(null, true);
            return;
        }

        if (qrHistoryActive) {
            closeLightbox(true);
            return;
        }

        if (e.state && e.state.bioPanel) {
            openLinkPanel(e.state.bioPanel, true);
            panelHistoryActive = true;
            return;
        }

        if (panelHistoryActive || hasOpenLinkPanel()) {
            closeLinkPanels();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (lightbox && lightbox.classList.contains('is-open')) return;
        if (e.key !== 'Escape' || !hasOpenLinkPanel()) return;
        if (panelHistoryActive) {
            window.history.back();
        } else {
            closeLinkPanels();
        }
    });

    /* ---- Profile Info Card ---- */
    var profileOpenBtn = document.getElementById('profile-info-open');
    var profileCloseBtn = document.getElementById('profile-info-close');
    var profileModal = document.getElementById('profile-info-modal');

    function openProfileModal() {
        if (profileModal) {
            document.body.classList.add('is-modal-open');
            profileModal.classList.add('is-open');
            profileModal.setAttribute('aria-hidden', 'false');
        }
    }

    function closeProfileModal() {
        if (profileModal) {
            document.body.classList.remove('is-modal-open');
            profileModal.classList.remove('is-open');
            profileModal.setAttribute('aria-hidden', 'true');
        }
    }

    if (profileOpenBtn) {
        profileOpenBtn.addEventListener('click', openProfileModal);
    }

    if (profileCloseBtn) {
        profileCloseBtn.addEventListener('click', closeProfileModal);
    }

    if (profileModal) {
        profileModal.querySelector('.profile-modal__backdrop').addEventListener('click', closeProfileModal);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeProfileModal();
        });
    }

    /* ---- Photo Gallery Lightbox ---- */
    var photoLightbox = document.getElementById('photo-lightbox');
    var photoLightboxImg = document.getElementById('photo-lightbox-img');
    var photoLightboxCaption = document.getElementById('photo-lightbox-caption');
    var photoLightboxClose = document.getElementById('photo-lightbox-close');
    var photoLightboxReleaseTimer = null;
    var photoLightboxPinAction = null;

    function fitPhotoLightboxImage() {
        if (!photoLightboxImg || !photoLightboxImg.naturalWidth || !photoLightboxImg.naturalHeight) return;
        var viewport = window.visualViewport;
        var viewportWidth = viewport ? viewport.width : window.innerWidth;
        var viewportHeight = viewport ? viewport.height : window.innerHeight;
        var horizontalSpace = viewportWidth <= 480 ? 32 : 48;
        var verticalSpace = viewportWidth <= 480 ? 140 : 110;
        var maxWidth = Math.max(160, Math.min(960, viewportWidth - horizontalSpace));
        var maxHeight = Math.max(120, viewportHeight - verticalSpace);
        var scale = Math.min(
            maxWidth / photoLightboxImg.naturalWidth,
            maxHeight / photoLightboxImg.naturalHeight
        );

        photoLightboxImg.style.width = Math.round(photoLightboxImg.naturalWidth * scale) + 'px';
        photoLightboxImg.style.height = Math.round(photoLightboxImg.naturalHeight * scale) + 'px';
    }

    if (photoLightbox) {
        var photoLightboxContent = photoLightbox.querySelector('.photo-lightbox__content');
        if (photoLightboxContent) {
            photoLightboxPinAction = document.createElement('button');
            photoLightboxPinAction.type = 'button';
            photoLightboxPinAction.className = 'photo-lightbox__pin-action';
            photoLightboxPinAction.hidden = true;
            photoLightboxContent.appendChild(photoLightboxPinAction);
            photoLightboxPinAction.addEventListener('click', function () {
                var gallery = photoLightbox._activeGallery;
                var photo = photoLightbox._activePhoto;
                if (!gallery || !photo) return;
                openPinActionDialog(
                    gallery,
                    photo,
                    isPhotoPinned(gallery, photo) ? 'unpin' : 'pin'
                );
            });
        }
    }

    function openPhotoLightbox(card) {
        if (!photoLightbox || !photoLightboxImg) return;
        clearTimeout(photoLightboxReleaseTimer);
        var src = card.getAttribute('data-full');
        var title = card.getAttribute('data-title') || '';
        var meta = card.getAttribute('data-meta') || '';
        var img = card.querySelector('img');
        var nextSrc = src || (img ? img.src : '');
        var requestId = String(Date.now()) + Math.random();

        photoLightboxImg.dataset.requestId = requestId;
        photoLightbox.classList.add('is-loading');
        photoLightboxImg.removeAttribute('srcset');
        photoLightboxImg.removeAttribute('src');
        photoLightboxImg.style.removeProperty('width');
        photoLightboxImg.style.removeProperty('height');
        photoLightboxImg.alt = title || (img ? img.alt : '');

        photoLightboxImg.onload = function () {
            if (photoLightboxImg.dataset.requestId !== requestId) return;
            fitPhotoLightboxImage();
            photoLightbox.classList.remove('is-loading');
        };
        photoLightboxImg.onerror = function () {
            if (photoLightboxImg.dataset.requestId !== requestId) return;
            photoLightbox.classList.remove('is-loading');
        };

        photoLightboxImg.sizes = '(max-width: 1000px) calc(100vw - 44px), 960px';
        photoLightboxImg.srcset = card.getAttribute('data-full-srcset') || '';
        photoLightboxImg.src = nextSrc;
        if (photoLightboxImg.complete && photoLightboxImg.naturalWidth) {
            fitPhotoLightboxImage();
            photoLightbox.classList.remove('is-loading');
        }
        if (photoLightboxCaption) {
            var caption = [title, meta].filter(Boolean).join(' - ');
            photoLightboxCaption.textContent = caption;
            photoLightboxCaption.hidden = !caption;
        }
        photoLightbox._activeGallery = card._gallery || null;
        photoLightbox._activePhoto = card._photo || null;
        updatePhotoLightboxPinAction();
        document.body.classList.add('is-modal-open');
        photoLightbox.classList.add('is-open');
        photoLightbox.setAttribute('aria-hidden', 'false');
    }

    function closePhotoLightbox() {
        if (!photoLightbox) return;
        closeUnpinDialog();
        document.body.classList.remove('is-modal-open');
        photoLightbox.classList.remove('is-open', 'is-loading');
        photoLightbox.setAttribute('aria-hidden', 'true');
        photoLightbox._activeGallery = null;
        photoLightbox._activePhoto = null;
        if (photoLightboxPinAction) photoLightboxPinAction.hidden = true;
        photoLightboxImg.dataset.requestId = '';
        photoLightboxReleaseTimer = setTimeout(function () {
            photoLightboxImg.onload = null;
            photoLightboxImg.onerror = null;
            photoLightboxImg.removeAttribute('srcset');
            photoLightboxImg.removeAttribute('src');
            photoLightboxImg.style.removeProperty('width');
            photoLightboxImg.style.removeProperty('height');
            if (photoLightboxCaption) photoLightboxCaption.textContent = '';
        }, 220);
    }

    function isImageFile(path) {
        return /\.(avif|gif|jpe?g|png|webp|heic|heif)$/i.test(path || '');
    }

    function normalizeGalleryPhotoUrl(url) {
        if (!url) return '';
        return decodeURIComponent(url.split('?')[0]).replace(/\/+$/, '');
    }

    function getCloudinaryPublicId(url) {
        var marker = '/image/upload/';
        var normalized = normalizeGalleryPhotoUrl(url);
        var markerIndex = normalized.indexOf(marker);
        if (markerIndex === -1) return '';
        var parts = normalized.slice(markerIndex + marker.length).split('/');
        var versionIndex = parts.findIndex(function (part) { return /^v\d+$/.test(part); });
        if (versionIndex !== -1) parts = parts.slice(versionIndex + 1);
        if (!parts.length) return '';
        parts[parts.length - 1] = parts[parts.length - 1].replace(/\.[a-z0-9]+$/i, '');
        return decodeURIComponent(parts.join('/'));
    }

    function isExplicitlyUnpinned(gallery, publicId) {
        return Boolean(publicId && (gallery._unpinnedPublicIds || []).indexOf(publicId) !== -1);
    }

    function isExplicitlyPinned(gallery, publicId) {
        return Boolean(publicId && (gallery._pinnedPublicIds || []).indexOf(publicId) !== -1);
    }

    function isPhotoPinned(gallery, photo) {
        if (!gallery || !photo) return false;
        var publicId = photo.publicId || getCloudinaryPublicId(photo.src);
        if (isExplicitlyUnpinned(gallery, publicId)) return false;
        if (photo.isPinnedUpload === true || isExplicitlyPinned(gallery, publicId)) return true;
        return isPinnedPhotoCard(gallery, photo.src, photo.full || photo.src, publicId);
    }

    function updatePhotoLightboxPinAction() {
        if (!photoLightboxPinAction || !photoLightbox) return;
        var gallery = photoLightbox._activeGallery;
        var photo = photoLightbox._activePhoto;
        var publicId = photo && (photo.publicId || getCloudinaryPublicId(photo.src));
        var scope = gallery && gallery.getAttribute('data-live-scope');
        if (!gallery || !photo || !scope || !publicId) {
            photoLightboxPinAction.hidden = true;
            return;
        }
        photo.publicId = publicId;
        photo.scope = scope;
        var pinned = isPhotoPinned(gallery, photo);
        photoLightboxPinAction.hidden = false;
        photoLightboxPinAction.classList.toggle('is-pinned', pinned);
        photoLightboxPinAction.innerHTML =
            '<i class="fas fa-thumbtack" aria-hidden="true"></i>';
        photoLightboxPinAction.setAttribute(
            'aria-label',
            pinned ? 'Mở tùy chọn bỏ ghim ảnh' : 'Mở tùy chọn ghim ảnh'
        );
    }

    function getPinnedPhotoUrls(gallery) {
        return (gallery.getAttribute('data-pinned-image') || '').split(',').map(function (url) {
            return url.trim();
        }).filter(Boolean);
    }

    function isPinnedPhotoCard(gallery, src, fullSrc, publicId) {
        if (isExplicitlyUnpinned(gallery, publicId || getCloudinaryPublicId(src || fullSrc))) return false;
        if (isExplicitlyPinned(gallery, publicId || getCloudinaryPublicId(src || fullSrc))) return true;
        var pinnedUrls = getPinnedPhotoUrls(gallery).map(normalizeGalleryPhotoUrl);
        if (!pinnedUrls.length) return false;

        var candidates = [src, fullSrc].map(normalizeGalleryPhotoUrl).filter(Boolean);
        return candidates.some(function (candidate) {
            return pinnedUrls.indexOf(candidate) !== -1;
        });
    }

    var GALLERY_PIN_API = 'https://timebox.trghy.workers.dev/gallery/pin';
    var GALLERY_UNPIN_API = 'https://timebox.trghy.workers.dev/gallery/unpin';
    var unpinDialog = null;

    function closeUnpinDialog() {
        if (!unpinDialog) return;
        unpinDialog.classList.remove('is-open');
        unpinDialog.setAttribute('aria-hidden', 'true');
        unpinDialog._gallery = null;
        unpinDialog._photo = null;
    }

    function ensureUnpinDialog() {
        if (unpinDialog) return unpinDialog;
        unpinDialog = document.createElement('div');
        unpinDialog.className = 'pin-action-modal';
        unpinDialog.setAttribute('aria-hidden', 'true');
        unpinDialog.innerHTML =
            '<div class="pin-action-modal__backdrop"></div>' +
            '<div class="pin-action-modal__card" role="dialog" aria-modal="true" aria-label="Tùy chọn ảnh ghim">' +
                '<button type="button" class="pin-action-modal__unpin"><i class="fas fa-thumbtack" aria-hidden="true"></i> Bỏ ghim</button>' +
                '<button type="button" class="pin-action-modal__close">Đóng</button>' +
                '<p class="pin-action-modal__status" aria-live="polite"></p>' +
            '</div>';
        document.body.appendChild(unpinDialog);

        var closeButton = unpinDialog.querySelector('.pin-action-modal__close');
        var unpinButton = unpinDialog.querySelector('.pin-action-modal__unpin');
        unpinDialog.querySelector('.pin-action-modal__backdrop').addEventListener('click', closeUnpinDialog);
        closeButton.addEventListener('click', closeUnpinDialog);
        unpinButton.addEventListener('click', function () {
            var gallery = unpinDialog._gallery;
            var photo = unpinDialog._photo;
            var status = unpinDialog.querySelector('.pin-action-modal__status');
            var mode = unpinDialog._mode === 'pin' ? 'pin' : 'unpin';
            if (!gallery || !photo || !photo.publicId || !photo.scope) return;
            unpinButton.disabled = true;
            closeButton.disabled = true;
            status.textContent = mode === 'pin' ? 'Đang ghim ảnh...' : 'Đang bỏ ghim...';
            fetch(mode === 'pin' ? GALLERY_PIN_API : GALLERY_UNPIN_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ scope: photo.scope, publicId: photo.publicId })
            }).then(function (response) {
                return response.json().catch(function () { return {}; }).then(function (data) {
                    if (!response.ok || !data.ok) {
                        throw new Error(data.message || (mode === 'pin' ? 'Không thể ghim ảnh' : 'Không thể bỏ ghim'));
                    }
                });
            }).then(function () {
                gallery._unpinnedPublicIds = gallery._unpinnedPublicIds || [];
                gallery._pinnedPublicIds = gallery._pinnedPublicIds || [];
                if (mode === 'pin') {
                    gallery._unpinnedPublicIds = gallery._unpinnedPublicIds.filter(function (id) {
                        return id !== photo.publicId;
                    });
                    if (gallery._pinnedPublicIds.indexOf(photo.publicId) === -1) {
                        gallery._pinnedPublicIds.push(photo.publicId);
                    }
                    photo.isPinnedUpload = true;
                } else {
                    gallery._pinnedPublicIds = gallery._pinnedPublicIds.filter(function (id) {
                        return id !== photo.publicId;
                    });
                    if (gallery._unpinnedPublicIds.indexOf(photo.publicId) === -1) {
                        gallery._unpinnedPublicIds.push(photo.publicId);
                    }
                    photo.isPinnedUpload = false;
                }
                closeUnpinDialog();
                renderPhotoGallery(gallery, (gallery._photos || []).slice());
                updatePhotoLightboxPinAction();
                if (window.showTimeboxToast) {
                    window.showTimeboxToast(mode === 'pin' ? 'Đã ghim ảnh' : 'Đã bỏ ghim ảnh');
                }
            }).catch(function (error) {
                status.textContent = error.message || (mode === 'pin' ? 'Không thể ghim ảnh' : 'Không thể bỏ ghim');
            }).finally(function () {
                unpinButton.disabled = false;
                closeButton.disabled = false;
            });
        });
        return unpinDialog;
    }

    function openPinActionDialog(gallery, photo, mode) {
        var dialog = ensureUnpinDialog();
        dialog._gallery = gallery;
        dialog._photo = photo;
        dialog._mode = mode === 'pin' ? 'pin' : 'unpin';
        var actionButton = dialog.querySelector('.pin-action-modal__unpin');
        actionButton.innerHTML = dialog._mode === 'pin'
            ? '<i class="fas fa-thumbtack" aria-hidden="true"></i> Ghim ảnh'
            : '<i class="fas fa-thumbtack" aria-hidden="true"></i> Bỏ ghim';
        actionButton.classList.toggle('is-pin-mode', dialog._mode === 'pin');
        dialog.querySelector('.pin-action-modal__status').textContent = '';
        dialog.classList.add('is-open');
        dialog.setAttribute('aria-hidden', 'false');
        dialog.querySelector('.pin-action-modal__unpin').focus();
    }

    function openUnpinDialog(gallery, photo) {
        openPinActionDialog(gallery, photo, 'unpin');
    }

    function createPhotoCard(gallery, src, name, fullSrc, originalSrc, thumbSrcset, fullSrcset, isPriority, isPinnedUpload, photo) {
        var card = document.createElement('button');
        var img = document.createElement('img');
        photo = photo || {};
        var publicId = (photo && photo.publicId) || getCloudinaryPublicId(originalSrc || fullSrc || src);
        var scope = gallery.getAttribute('data-live-scope') || '';
        photo.publicId = publicId;
        photo.scope = scope;
        card._gallery = gallery;
        card._photo = photo;
        var isPinned = isPinnedUpload === true || isPinnedPhotoCard(
            gallery,
            originalSrc || fullSrc || src,
            fullSrc || src,
            publicId
        );
        if (isExplicitlyUnpinned(gallery, publicId)) isPinned = false;

        card.className = 'photo-card';
        card.type = 'button';
        card.style.setProperty('--card-delay', Math.min(gallery.children.length, 11) * 35 + 'ms');
        card.setAttribute('data-full', fullSrc || src);
        if (fullSrcset) {
            card.setAttribute('data-full-srcset', fullSrcset);
        }
        if (isPinned) {
            card.classList.add('photo-card--pinned');
        }

        if (thumbSrcset) {
            img.srcset = thumbSrcset;
            img.sizes = '(max-width: 639px) calc((100vw - 34px) / 2), (max-width: 899px) calc((100vw - 68px) / 3), 210px';
        }
        img.src = src;
        img.alt = name || 'Anh nau an';
        img.width = 420;
        img.height = 420;
        img.loading = isPriority ? 'eager' : 'lazy';
        img.decoding = 'async';
        if (isPriority) {
            img.fetchPriority = 'high';
        }
        
        img.onload = function () {
            img.classList.add('is-loaded');
            card.classList.add('is-loaded');
        };
        if (img.complete) {
            img.classList.add('is-loaded');
            card.classList.add('is-loaded');
        }

        card.appendChild(img);
        if (isPinned) {
            var pinBadge = document.createElement('span');
            pinBadge.className = 'photo-card__pin';
            pinBadge.innerHTML = '<i class="fas fa-thumbtack" aria-hidden="true"></i>';
            pinBadge.setAttribute('role', 'button');
            pinBadge.setAttribute('tabindex', '0');
            pinBadge.setAttribute('aria-label', 'Tùy chọn ảnh ghim');
            function activatePinMenu(event) {
                event.preventDefault();
                event.stopPropagation();
                if (!scope || !publicId) return;
                photo = photo || {};
                photo.publicId = publicId;
                photo.scope = scope;
                openUnpinDialog(gallery, photo);
            }
            pinBadge.addEventListener('click', activatePinMenu);
            pinBadge.addEventListener('keydown', function (event) {
                if (event.key === 'Enter' || event.key === ' ') activatePinMenu(event);
            });
            card.appendChild(pinBadge);
        }
        card.addEventListener('click', function () {
            openPhotoLightbox(card);
        });
        gallery.appendChild(card);
    }

    function createPlaceholderPhotoCard(gallery, index) {
        var card = document.createElement('div');
        card.className = 'photo-card photo-card--placeholder';
        card.setAttribute('aria-label', 'Khung anh dang cho cap nhat ' + index);
        card.innerHTML =
            '<div class="photo-placeholder">' +
                '<i class="fas fa-image" aria-hidden="true"></i>' +
                '<span>Dang cho anh</span>' +
            '</div>';
        gallery.appendChild(card);
    }

    function renderPlaceholderGallery(gallery, count) {
        var total = Math.max(1, Number(count) || 9);
        var oldPager = gallery.parentElement.querySelector('.photo-pager');
        if (oldPager) oldPager.remove();
        gallery.innerHTML = '';
        for (var i = 1; i <= total; i += 1) {
            createPlaceholderPhotoCard(gallery, i);
        }
    }

    function getPhotoTime(photo) {
        return photo.time || 0;
    }

    function sortPhotosNewestFirst(photos) {
        return photos.sort(function (a, b) {
            var timeDiff = getPhotoTime(b) - getPhotoTime(a);
            if (timeDiff) return timeDiff;
            return b.name.localeCompare(a.name, undefined, { numeric: true, sensitivity: 'base' });
        });
    }


    function createPhotoPager(gallery, pageCount, currentPage, onPageChange) {
        var oldPager = gallery.parentElement.querySelector('.photo-pager');
        if (oldPager) oldPager.remove();
        if (pageCount <= 1) return;

        var pager = document.createElement('nav');
        pager.className = 'photo-pager';
        pager.setAttribute('aria-label', 'Chuyen trang anh');

        for (var i = 1; i <= pageCount; i += 1) {
            (function (page) {
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'photo-pager__btn';
                btn.textContent = page;
                if (page === currentPage) {
                    btn.classList.add('is-active');
                    btn.setAttribute('aria-current', 'page');
                }
                btn.addEventListener('click', function () {
                    onPageChange(page);
                });
                pager.appendChild(btn);
            })(i);
        }

        gallery.insertAdjacentElement('afterend', pager);
    }

    function getPerPage() {
        return 12;
    }

    function renderPhotoGalleryPage(gallery, photos, page) {
        var perPage = getPerPage();
        var pageCount = Math.max(1, Math.ceil(photos.length / perPage));
        var currentPage = Math.min(Math.max(page || 1, 1), pageCount);
        var visiblePhotos = photos.slice((currentPage - 1) * perPage, currentPage * perPage);
        var activeView = gallery.closest('.spa-view');
        var countTarget = activeView && activeView.querySelector('[data-gallery-count]');

        if (countTarget) {
            countTarget.textContent = photos.length + (photos.length === 1 ? ' ký ức' : ' ký ức');
        }
        gallery.classList.toggle('is-empty', photos.length === 0);

        gallery.innerHTML = '';
        gallery._currentPage = currentPage;
        visiblePhotos.forEach(function (photo, index) {
            createPhotoCard(
                gallery,
                photo.thumb || photo.src,
                photo.name,
                photo.full || photo.src,
                photo.src,
                photo.thumbSrcset,
                photo.fullSrcset,
                index < 4,
                photo.isPinnedUpload === true,
                photo
            );
        });
        createPhotoPager(gallery, pageCount, currentPage, function (nextPage) {
            gallery.classList.add('is-changing');
            setTimeout(function () {
                renderPhotoGalleryPage(gallery, photos, nextPage);
                gallery.classList.remove('is-changing');
            }, 180);
        });
    }

    function renderPhotoGallery(gallery, photos) {
        var sortedPhotos = applyPinnedPhotoOrder(gallery, sortPhotosNewestFirst(photos));
        gallery._photos = sortedPhotos;
        renderPhotoGalleryPage(gallery, sortedPhotos, 1);
    }

    function getGithubGalleryUrl(gallery, dir) {
        var owner = gallery.getAttribute('data-github-owner');
        var repo = gallery.getAttribute('data-github-repo');
        var branch = gallery.getAttribute('data-github-branch') || 'main';
        if (!owner || !repo) return '';
        return 'https://api.github.com/repos/' + owner + '/' + repo +
            '/contents/' + dir.replace(/\/$/, '') + '?ref=' + encodeURIComponent(branch);
    }

    function getLocalPhotosFromListing(html, dir) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        return Array.prototype.slice.call(doc.querySelectorAll('a[href]'))
            .map(function (link) {
                var href = link.getAttribute('href') || '';
                var name = decodeURIComponent(href.split('/').pop() || '');
                return {
                    src: href.charAt(0) === '/' ? href : dir + href,
                    name: name,
                    time: Date.parse((link.parentElement && link.parentElement.querySelector('.date'))
                        ? link.parentElement.querySelector('.date').textContent
                        : '') || 0
                };
            })
            .filter(function (photo) {
                return isImageFile(photo.src);
            });
    }

    function getGithubPhotos(items) {
        return items
            .filter(function (item) {
                return item.type === 'file' && isImageFile(item.name);
            })
            .map(function (item) {
                return {
                    src: item.download_url,
                    name: item.name,
                    path: item.path,
                    time: 0
                };
            });
    }

    function getCloudinaryVariant(src, transform) {
        if (!src || src.indexOf('/image/upload/') === -1) return src;
        return src.replace('/image/upload/', '/image/upload/' + transform + '/');
    }

    function getCloudinarySrcset(src, widths, quality) {
        if (!src || src.indexOf('/image/upload/') === -1) return '';
        return widths.map(function (width) {
            return getCloudinaryVariant(src, 'f_auto,' + quality + ',c_limit,w_' + width) + ' ' + width + 'w';
        }).join(', ');
    }

    function applyPinnedPhotoOrder(gallery, photos) {
        var pinnedUrls = getPinnedPhotoUrls(gallery).filter(function (url) {
            return !isExplicitlyUnpinned(gallery, getCloudinaryPublicId(url));
        }).map(normalizeGalleryPhotoUrl);
        if (!photos.length) return photos;

        // Ảnh ghim đứng đầu; toàn bộ ảnh còn lại giữ đúng thứ tự thời gian.
        var taggedPinnedPhotos = photos.filter(function (photo) {
            var publicId = photo.publicId || getCloudinaryPublicId(photo.src);
            return !isExplicitlyUnpinned(gallery, publicId) &&
                (photo.isPinnedUpload === true || isExplicitlyPinned(gallery, publicId));
        });
        var normalPhotos = photos.filter(function (photo) {
            return taggedPinnedPhotos.indexOf(photo) === -1;
        });
        if (!pinnedUrls.length) return taggedPinnedPhotos.concat(normalPhotos);

        var pinnedPhotos = [];
        var remainingPhotos = normalPhotos.slice();

        pinnedUrls.forEach(function (pinnedUrl) {
            var pinnedIndex = -1;

            remainingPhotos.forEach(function (photo, index) {
                if (pinnedIndex === -1 && normalizeGalleryPhotoUrl(photo.src) === pinnedUrl) {
                    pinnedIndex = index;
                }
            });

            if (pinnedIndex !== -1) {
                pinnedPhotos.push(remainingPhotos.splice(pinnedIndex, 1)[0]);
            }
        });

        return pinnedPhotos.concat(taggedPinnedPhotos, remainingPhotos);
    }

    function getCloudinaryGalleryPhotos(gallery) {
        var imageList = [
            gallery.getAttribute('data-gallery-prepend') || '',
            gallery.getAttribute('data-gallery-cloudinary') || ''
        ].filter(Boolean).join(',');
        if (!imageList.trim()) return [];

        var urls = imageList.split(',')
            .map(function (url) {
                return url.trim();
            })
            .filter(function (url) {
                return url && isImageFile(url);
            });

        return urls.map(function (url, index) {
            var cleanUrl = url.split('?')[0];
            var name = decodeURIComponent(cleanUrl.split('/').pop() || 'Anh ky niem');
            // Lấy version timestamp từ URL Cloudinary (v1782486xxx) — số lớn hơn = mới hơn
            var versionMatch = cleanUrl.match(/\/v(\d+)\//);
            var time = versionMatch ? parseInt(versionMatch[1], 10) : (urls.length - index);
            return {
                src: url,
                thumb: getCloudinaryVariant(url, 'f_auto,q_auto:good,c_limit,w_720'),
                thumbSrcset: getCloudinarySrcset(url, [360, 540, 720, 960], 'q_auto:good'),
                full: getCloudinaryVariant(url, 'f_auto,q_auto:best,c_limit,w_2400'),
                fullSrcset: getCloudinarySrcset(url, [1200, 1800, 2400], 'q_auto:best'),
                name: name,
                time: time
            };
        });
    }
    function getStaticGalleryPhotos(gallery, dir) {
        var imageList = gallery.getAttribute('data-gallery-images') || '';
        if (!imageList.trim()) return [];

        return imageList.split(',')
            .map(function (name) {
                return name.trim();
            })
            .filter(function (name) {
                return name && isImageFile(name);
            })
            .map(function (name, index, files) {
                return {
                    src: dir + name,
                    name: name,
                    time: files.length - index
                };
            });
    }
    function addGithubPhotoTimes(gallery, photos) {
        var owner = gallery.getAttribute('data-github-owner');
        var repo = gallery.getAttribute('data-github-repo');
        var branch = gallery.getAttribute('data-github-branch') || 'main';
        if (!owner || !repo || !photos.length) return Promise.resolve(photos);

        return Promise.all(photos.map(function (photo) {
            var commitsUrl = 'https://api.github.com/repos/' + owner + '/' + repo +
                '/commits?path=' + encodeURIComponent(photo.path) +
                '&sha=' + encodeURIComponent(branch) + '&per_page=1';
            return fetch(commitsUrl)
                .then(function (response) {
                    if (!response.ok) return photo;
                    return response.json();
                })
                .then(function (commits) {
                    if (commits && commits[0] && commits[0].commit && commits[0].commit.committer) {
                        photo.time = Date.parse(commits[0].commit.committer.date) || 0;
                    }
                    return photo;
                })
                .catch(function () {
                    return photo;
                });
        }));
    }

    var LIVE_GALLERY_API = 'https://timebox.trghy.workers.dev/gallery/images';

    function getLiveGalleryPhotos(scope, gallery) {
        return fetch(LIVE_GALLERY_API + '?scope=' + encodeURIComponent(scope), {
            headers: { 'Accept': 'application/json' },
            cache: 'no-store'
        }).then(function (response) {
            return response.json().catch(function () {
                return { ok: false, message: 'Máy chủ trả dữ liệu không hợp lệ' };
            }).then(function (data) {
                if (!response.ok || !data.ok) {
                    throw new Error(data.message || 'Không thể tải ảnh mới');
                }
                gallery._unpinnedPublicIds = Array.isArray(data.unpinnedPublicIds)
                    ? data.unpinnedPublicIds
                    : [];
                gallery._pinnedPublicIds = Array.isArray(data.pinnedPublicIds)
                    ? data.pinnedPublicIds
                    : [];
                return (data.images || []).map(function (image) {
                    var src = image.src || '';
                    return {
                        src: src,
                        thumb: getCloudinaryVariant(src, 'f_auto,q_auto:good,c_limit,w_720'),
                        thumbSrcset: getCloudinarySrcset(src, [360, 540, 720, 960], 'q_auto:good'),
                        full: getCloudinaryVariant(src, 'f_auto,q_auto:best,c_limit,w_2400'),
                        fullSrcset: getCloudinarySrcset(src, [1200, 1800, 2400], 'q_auto:best'),
                        name: image.publicId || 'Ảnh mới',
                        time: Date.parse(image.createdAt || '') || 0,
                        isLive: true,
                        publicId: image.publicId || '',
                        isPinnedUpload: image.pinned === true
                    };
                }).filter(function (photo) {
                    return photo.src && isImageFile(photo.src);
                });
            });
        });
    }

    function mergeGalleryPhotos(livePhotos, oldPhotos) {
        var seen = {};
        return livePhotos.concat(oldPhotos).filter(function (photo) {
            var key = normalizeGalleryPhotoUrl(photo.src);
            if (!key || seen[key]) return false;
            seen[key] = true;
            return true;
        });
    }

    function refreshLiveGallery(gallery) {
        var scope = gallery.getAttribute('data-live-scope');
        if (!scope) return Promise.resolve();
        var oldPhotos = getCloudinaryGalleryPhotos(gallery);

        return getLiveGalleryPhotos(scope, gallery).then(function (livePhotos) {
            var mergedPhotos = mergeGalleryPhotos(livePhotos, oldPhotos);
            gallery._lastGalleryRefresh = Date.now();
            if (gallery._isSuspended) {
                gallery._photos = applyPinnedPhotoOrder(gallery, sortPhotosNewestFirst(mergedPhotos));
            } else {
                renderPhotoGallery(gallery, mergedPhotos);
            }
        }).catch(function () {
            // Nếu Worker tạm lỗi, các URL ảnh cũ vẫn hiển thị bình thường.
            if (!gallery._photos && oldPhotos.length) renderPhotoGallery(gallery, oldPhotos);
            if (!gallery._photos) gallery._hasLoaded = false;
        });
    }

    window.refreshTimeboxGallery = function (scope) {
        var gallery = document.querySelector('.photo-gallery[data-live-scope="' + scope + '"]');
        return gallery ? refreshLiveGallery(gallery) : Promise.resolve();
    };

    window.prependTimeboxGallery = function (scope, urls, pinned) {
        var gallery = document.querySelector('.photo-gallery[data-live-scope="' + scope + '"]');
        if (!gallery || !urls || !urls.length) return;
        var now = Date.now();
        var uploadedPhotos = urls.map(function (src, index) {
            return {
                src: src,
                thumb: getCloudinaryVariant(src, 'f_auto,q_auto:good,c_limit,w_720'),
                thumbSrcset: getCloudinarySrcset(src, [360, 540, 720, 960], 'q_auto:good'),
                full: getCloudinaryVariant(src, 'f_auto,q_auto:best,c_limit,w_2400'),
                fullSrcset: getCloudinarySrcset(src, [1200, 1800, 2400], 'q_auto:best'),
                name: decodeURIComponent((src.split('?')[0].split('/').pop() || 'Ảnh mới')),
                time: now - index,
                isLive: true,
                isPinnedUpload: pinned === true
            };
        });
        var currentPhotos = gallery._photos || getCloudinaryGalleryPhotos(gallery);
        renderPhotoGallery(gallery, mergeGalleryPhotos(uploadedPhotos, currentPhotos));
    };

    function loadPhotoGallery(gallery) {
        gallery._hasLoaded = true;
        gallery._isSuspended = false;
        var dir = gallery.getAttribute('data-gallery-dir');
        var cloudinaryPhotos = getCloudinaryGalleryPhotos(gallery);
        if (gallery.hasAttribute('data-live-scope')) {
            if (cloudinaryPhotos.length) renderPhotoGallery(gallery, cloudinaryPhotos);
            refreshLiveGallery(gallery);
            return;
        }
        if (cloudinaryPhotos.length) {
            renderPhotoGallery(gallery, applyPinnedPhotoOrder(gallery, cloudinaryPhotos));
            return;
        }
        if (!dir) return;

        // Show loading state
        var loadingDiv = document.createElement('div');
        loadingDiv.className = 'gallery-loading';
        loadingDiv.textContent = 'Đang tải ảnh...';
        gallery.innerHTML = '';
        gallery.appendChild(loadingDiv);

        var staticPhotos = getStaticGalleryPhotos(gallery, dir);
        if (staticPhotos.length) {
            renderPhotoGallery(gallery, applyPinnedPhotoOrder(gallery, staticPhotos));
            return;
        }

        var placeholderCount = gallery.getAttribute('data-gallery-placeholders');
        if (placeholderCount) {
            renderPlaceholderGallery(gallery, placeholderCount);
            return;
        }

        fetch(dir)
            .then(function (response) {
                if (!response.ok) throw new Error('No local directory listing');
                return response.text();
            })
            .then(function (html) {
                var photos = getLocalPhotosFromListing(html, dir);
                if (!photos.length) throw new Error('No local photos');
                renderPhotoGallery(gallery, applyPinnedPhotoOrder(gallery, photos));
            })
            .catch(function () {
                var githubUrl = getGithubGalleryUrl(gallery, dir);
                if (!githubUrl) {
                    var emptyDiv = document.createElement('div');
                    emptyDiv.className = 'gallery-empty';
                    emptyDiv.textContent = 'Chưa update. Hãy quay lại sau nhé!🌷';
                    gallery.innerHTML = '';
                    gallery.appendChild(emptyDiv);
                    return;
                }
                fetch(githubUrl)
                    .then(function (response) {
                        if (!response.ok) throw new Error('No GitHub photos');
                        return response.json();
                    })
                    .then(function (items) {
                        return addGithubPhotoTimes(gallery, getGithubPhotos(items));
                    })
                    .then(function (photos) {
                        if (!photos.length) throw new Error('No photos');
                        renderPhotoGallery(gallery, applyPinnedPhotoOrder(gallery, photos));
                    })
                    .catch(function () {
                        var emptyDiv = document.createElement('div');
                        emptyDiv.className = 'gallery-empty';
                        emptyDiv.textContent = 'Chưa update. Hãy quay lại sau nhé!🌷';
                        gallery.innerHTML = '';
                        gallery.appendChild(emptyDiv);
                    });
            });
    }

    var gallerySelector = '.photo-gallery[data-gallery-dir], .photo-gallery[data-gallery-cloudinary], .photo-gallery[data-live-scope]';

    function ensurePhotoGalleryLoaded(gallery) {
        if (!gallery) return;
        gallery._isSuspended = false;
        if (gallery._photos) {
            renderPhotoGalleryPage(gallery, gallery._photos, gallery._currentPage || 1);
            if (gallery.hasAttribute('data-live-scope') &&
                Date.now() - (gallery._lastGalleryRefresh || 0) > 2 * 60 * 1000) {
                refreshLiveGallery(gallery);
            }
            return;
        }
        if (!gallery._hasLoaded) loadPhotoGallery(gallery);
    }

    window.ensureTimeboxGallery = function (viewId) {
        var view = document.getElementById('view-' + viewId);
        var gallery = view ? view.querySelector(gallerySelector) : null;
        ensurePhotoGalleryLoaded(gallery);
    };

    window.suspendTimeboxGallery = function (viewId) {
        var view = document.getElementById('view-' + viewId);
        var gallery = view ? view.querySelector(gallerySelector) : null;
        if (!gallery) return;
        gallery._isSuspended = true;
        gallery.innerHTML = '';
        var pager = gallery.parentElement.querySelector('.photo-pager');
        if (pager) pager.remove();
    };

    document.querySelectorAll(gallerySelector).forEach(function (gallery) {
        var spaView = gallery.closest('.spa-view');
        if (!spaView || !spaView.classList.contains('is-hidden')) {
            ensurePhotoGalleryLoaded(gallery);
        }
    });

    // Debounce resize event
    var resizeTimer = null;
    if (window.addEventListener) {
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                if (photoLightbox && photoLightbox.classList.contains('is-open')) {
                    fitPhotoLightboxImage();
                }
                document.querySelectorAll(gallerySelector).forEach(function (gallery) {
                    if (gallery._photos && !gallery._isSuspended) {
                        var currentPage = gallery._currentPage || 1;
                        renderPhotoGalleryPage(gallery, gallery._photos, currentPage);
                    }
                });
            }, 250);
        });
    }

    document.querySelectorAll('.photo-card').forEach(function (card) {
        card.addEventListener('click', function () {
            openPhotoLightbox(card);
        });
    });

    if (photoLightboxClose) {
        photoLightboxClose.addEventListener('click', closePhotoLightbox);
    }

    if (photoLightbox) {
        photoLightbox.querySelector('.photo-lightbox__backdrop').addEventListener('click', closePhotoLightbox);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closePhotoLightbox();
        });
    }

    /* ---- Copy Email to Clipboard ---- */
    var emailBtn = document.getElementById('link-email');
    var toast = document.getElementById('toast');
    var toastTimer = null;

    function showToast(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toast.classList.remove('is-visible');
        }, 2000);
    }

    window.showTimeboxToast = showToast;

    if (emailBtn) {
        emailBtn.addEventListener('click', function () {
            var email = emailBtn.getAttribute('data-email');
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(function () {
                    showToast('Đã copy email: ' + email);
                });
            } else {
                // Fallback cho trình duyệt cũ
                var tmp = document.createElement('textarea');
                tmp.value = email;
                tmp.style.position = 'fixed';
                tmp.style.opacity = '0';
                document.body.appendChild(tmp);
                tmp.select();
                document.execCommand('copy');
                document.body.removeChild(tmp);
                showToast('Đã copy email: ' + email);
            }
        });
    }
})();
