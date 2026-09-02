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

    /* ---- Shared dialog focus, Escape, and scroll lock ---- */
    var managedDialogSelector = [
        '.lightbox',
        '.profile-modal',
        '.gallery-overlay',
        '.photo-lightbox',
        '.join-modal',
        '.key-modal',
        '.upload-modal',
        '.thoughts-confirm',
        '.pin-action-modal'
    ].join(', ');
    var dialogCloseSelector = '.pin-action-modal__close, .thoughts-confirm__decline, .upload-modal__close, .key-modal__close, .join-modal__close, .gallery-panel__close, .photo-lightbox__close, .profile-modal__close, .lightbox__close';
    var dialogOpenState = new WeakMap();
    var dialogReturnFocus = new WeakMap();

    function getOpenManagedDialogs() {
        return Array.prototype.filter.call(document.querySelectorAll(managedDialogSelector), function (dialog) {
            return dialog.classList.contains('is-open') && dialog.getAttribute('aria-hidden') !== 'true';
        });
    }

    function getDialogFocusable(dialog) {
        return Array.prototype.filter.call(dialog.querySelectorAll(
            'button:not([disabled]), [href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ), function (element) {
            return !element.hidden && element.getAttribute('aria-hidden') !== 'true' && element.offsetParent !== null;
        });
    }

    function prepareDialogClose(dialog) {
        if (!dialog) return;
        var active = document.activeElement;
        if (active && dialog.contains(active) && typeof active.blur === 'function') active.blur();
    }

    function syncModalState() {
        var dialogs = document.querySelectorAll(managedDialogSelector);
        Array.prototype.forEach.call(dialogs, function (dialog) {
            var isOpen = dialog.classList.contains('is-open') && dialog.getAttribute('aria-hidden') !== 'true';
            var wasOpen = dialogOpenState.get(dialog) === true;
            dialog.inert = !isOpen;

            if (isOpen && !wasOpen) {
                var active = document.activeElement;
                if (active && active !== document.body && !dialog.contains(active)) {
                    dialogReturnFocus.set(dialog, active);
                }
                dialogOpenState.set(dialog, true);
                window.setTimeout(function () {
                    if (!dialog.classList.contains('is-open') || dialog.contains(document.activeElement)) return;
                    var initial = dialog.querySelector('[data-dialog-focus]') ||
                        dialog.querySelector('input:not([disabled]):not([type="hidden"]), textarea:not([disabled])') ||
                        getDialogFocusable(dialog)[0];
                    if (initial) initial.focus({ preventScroll: true });
                }, 0);
            } else if (!isOpen && wasOpen) {
                dialogOpenState.set(dialog, false);
                var previous = dialogReturnFocus.get(dialog);
                dialogReturnFocus.delete(dialog);
                var remainingDialogs = getOpenManagedDialogs();
                var nextDialog = remainingDialogs[remainingDialogs.length - 1];
                if (previous && nextDialog && !dialogReturnFocus.has(nextDialog)) {
                    dialogReturnFocus.set(nextDialog, previous);
                }
                window.setTimeout(function () {
                    if (!previous || !previous.isConnected || previous.offsetParent === null) return;
                    var parentDialog = previous.closest(managedDialogSelector);
                    if (!getOpenManagedDialogs().length || (parentDialog && parentDialog.classList.contains('is-open'))) {
                        previous.focus({ preventScroll: true });
                    }
                }, 0);
            }
        });

        var hasOpenDialog = getOpenManagedDialogs().length > 0;
        document.body.classList.toggle('is-modal-open', hasOpenDialog);
        var shell = document.querySelector('.spa-shell');
        if (shell) {
            var openDialogs = getOpenManagedDialogs();
            shell.inert = false;
            Array.prototype.forEach.call(shell.children, function (child) {
                var containsOpenDialog = openDialogs.some(function (dialog) {
                    return child === dialog || child.contains(dialog);
                });
                child.inert = hasOpenDialog && !containsOpenDialog;
            });
        }
    }

    window.prepareTimeboxDialogClose = prepareDialogClose;
    window.syncTimeboxModalState = syncModalState;
    window.closeTimeboxDialogsForNavigation = function () {
        var safety = 12;
        var dialogs = getOpenManagedDialogs();
        while (dialogs.length && safety > 0) {
            var dialog = dialogs[dialogs.length - 1];
            var closeButton = dialog.querySelector(dialogCloseSelector);
            if (!closeButton || closeButton.disabled) return false;
            closeButton.click();
            var remaining = getOpenManagedDialogs();
            if (remaining.length >= dialogs.length && remaining[remaining.length - 1] === dialog) return false;
            dialogs = remaining;
            safety -= 1;
        }
        syncModalState();
        return getOpenManagedDialogs().length === 0;
    };

    var dialogObserver = new MutationObserver(function (mutations) {
        var shouldSync = mutations.some(function (mutation) {
            if (mutation.type === 'childList') {
                var changedNodes = Array.prototype.concat.call(
                    Array.prototype.slice.call(mutation.addedNodes),
                    Array.prototype.slice.call(mutation.removedNodes)
                );
                return changedNodes.some(function (node) {
                    return node.nodeType === 1 && (
                        (node.matches && node.matches(managedDialogSelector)) ||
                        (node.querySelector && node.querySelector(managedDialogSelector))
                    );
                });
            }
            return mutation.target.matches && mutation.target.matches(managedDialogSelector);
        });
        if (shouldSync) syncModalState();
    });
    dialogObserver.observe(document.body, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['class', 'aria-hidden']
    });

    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Tab') return;
        var dialogs = getOpenManagedDialogs();
        var dialog = dialogs[dialogs.length - 1];
        if (!dialog) return;
        var focusable = getDialogFocusable(dialog);
        if (!focusable.length) {
            event.preventDefault();
            return;
        }
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }, true);

    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        var dialogs = getOpenManagedDialogs();
        var dialog = dialogs[dialogs.length - 1];
        if (!dialog) return;
        var closeButton = dialog.querySelector(dialogCloseSelector);
        event.preventDefault();
        event.stopImmediatePropagation();
        if (closeButton && !closeButton.disabled) closeButton.click();
    }, true);

    syncModalState();

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
        if (lightbox && lightbox.classList.contains('is-open')) {
            if (!skipHistory && qrHistoryActive) {
                window.history.back();
                return;
            }
            prepareDialogClose(lightbox);
            lightbox.classList.remove('is-open');
            lightbox.setAttribute('aria-hidden', 'true');
            syncModalState();
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
        if (profileModal && profileModal.classList.contains('is-open')) {
            prepareDialogClose(profileModal);
            profileModal.classList.remove('is-open');
            profileModal.setAttribute('aria-hidden', 'true');
            syncModalState();
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
    var photoLightboxStage = document.getElementById('photo-lightbox-stage');
    var photoLightboxCaption = document.getElementById('photo-lightbox-caption');
    var photoLightboxClose = document.getElementById('photo-lightbox-close');
    var photoLightboxOrbitRects = photoLightbox
        ? photoLightbox.querySelectorAll('.photo-lightbox__orbit rect')
        : [];
    var photoLightboxReleaseTimer = null;
    var photoLightboxPinAction = null;
    var photoLightboxZoom = { scale: 1, x: 0, y: 0 };
    var photoLightboxTouch = null;
    var PHOTO_LIGHTBOX_MAX_ZOOM = 4;
    var PHOTO_LIGHTBOX_MIN_ZOOM = 1;
    var PHOTO_LIGHTBOX_ZOOM_STEP = 0.15;

    function clearPhotoLightboxFrame() {
        if (!photoLightbox) return;
        ['--lightbox-frame-width', '--lightbox-frame-height', '--lightbox-frame-radius'].forEach(function (name) {
            photoLightbox.style.removeProperty(name);
        });
    }

    function setPhotoLightboxFrame(width, height) {
        if (!photoLightbox || !width || !height) return;
        var shortestSide = Math.min(width, height);
        var radius = Math.max(10, Math.min(20, Math.round(shortestSide * 0.055)));
        var radiusX = (radius / width) * 100;
        var radiusY = (radius / height) * 100;

        photoLightbox.style.setProperty('--lightbox-frame-width', width + 'px');
        photoLightbox.style.setProperty('--lightbox-frame-height', height + 'px');
        photoLightbox.style.setProperty('--lightbox-frame-radius', radius + 'px');

        Array.prototype.forEach.call(photoLightboxOrbitRects, function (rect) {
            rect.setAttribute('rx', radiusX.toFixed(3));
            rect.setAttribute('ry', radiusY.toFixed(3));
        });
    }

    function clampPhotoLightboxZoomPosition(x, y, scale) {
        if (!photoLightboxStage) return { x: 0, y: 0 };
        var bounds = photoLightboxStage.getBoundingClientRect();
        var maxX = Math.max(0, (bounds.width * (scale - 1)) / 2);
        var maxY = Math.max(0, (bounds.height * (scale - 1)) / 2);
        return {
            x: Math.max(-maxX, Math.min(maxX, x)),
            y: Math.max(-maxY, Math.min(maxY, y))
        };
    }

    function applyPhotoLightboxZoom() {
        if (!photoLightboxImg) return;
        var position = clampPhotoLightboxZoomPosition(
            photoLightboxZoom.x,
            photoLightboxZoom.y,
            photoLightboxZoom.scale
        );
        photoLightboxZoom.x = position.x;
        photoLightboxZoom.y = position.y;
        photoLightboxImg.style.transform = 'translate3d(' + position.x + 'px, ' + position.y + 'px, 0) scale(' + photoLightboxZoom.scale + ')';
        photoLightboxImg.style.objectFit = photoLightboxZoom.scale > 1.01 ? 'contain' : 'cover';
        if (photoLightbox) photoLightbox.classList.toggle('is-zoomed', photoLightboxZoom.scale > 1.01);
        if (photoLightboxStage) {
            photoLightboxStage.style.cursor = photoLightboxZoom.scale > 1.01 ? 'grab' : 'default';
        }
    }

    function resetPhotoLightboxZoom() {
        photoLightboxZoom.scale = 1;
        photoLightboxZoom.x = 0;
        photoLightboxZoom.y = 0;
        photoLightboxTouch = null;
        if (photoLightboxImg) photoLightboxImg.style.removeProperty('transform');
        if (photoLightbox) photoLightbox.classList.remove('is-zoomed');
    }

    function getTouchDistance(first, second) {
        var deltaX = second.clientX - first.clientX;
        var deltaY = second.clientY - first.clientY;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    function getTouchMidpoint(first, second) {
        return {
            x: (first.clientX + second.clientX) / 2,
            y: (first.clientY + second.clientY) / 2
        };
    }

    function beginPhotoLightboxTouch(touches) {
        if (!touches || !touches.length) return;
        if (touches.length >= 2) {
            photoLightboxTouch = {
                mode: 'pinch',
                distance: getTouchDistance(touches[0], touches[1]),
                midpoint: getTouchMidpoint(touches[0], touches[1]),
                scale: photoLightboxZoom.scale,
                x: photoLightboxZoom.x,
                y: photoLightboxZoom.y
            };
            return;
        }
        photoLightboxTouch = {
            mode: 'pan',
            x: touches[0].clientX,
            y: touches[0].clientY,
            offsetX: photoLightboxZoom.x,
            offsetY: photoLightboxZoom.y
        };
    }

    function movePhotoLightboxTouch(touches) {
        if (!photoLightboxTouch || !touches || !touches.length || !photoLightboxStage) return;
        if (touches.length >= 2) {
            if (photoLightboxTouch.mode !== 'pinch') {
                beginPhotoLightboxTouch(touches);
                return;
            }
            var distance = getTouchDistance(touches[0], touches[1]);
            var scale = Math.max(1, Math.min(PHOTO_LIGHTBOX_MAX_ZOOM,
                photoLightboxTouch.scale * (distance / Math.max(1, photoLightboxTouch.distance))));
            var midpoint = getTouchMidpoint(touches[0], touches[1]);
            var bounds = photoLightboxStage.getBoundingClientRect();
            var startX = photoLightboxTouch.midpoint.x - bounds.left - (bounds.width / 2);
            var startY = photoLightboxTouch.midpoint.y - bounds.top - (bounds.height / 2);
            var currentX = midpoint.x - bounds.left - (bounds.width / 2);
            var currentY = midpoint.y - bounds.top - (bounds.height / 2);
            photoLightboxZoom.scale = scale;
            photoLightboxZoom.x = currentX - ((startX - photoLightboxTouch.x) / photoLightboxTouch.scale) * scale;
            photoLightboxZoom.y = currentY - ((startY - photoLightboxTouch.y) / photoLightboxTouch.scale) * scale;
            applyPhotoLightboxZoom();
            return;
        }
        if (photoLightboxTouch.mode !== 'pan') {
            beginPhotoLightboxTouch(touches);
            return;
        }
        if (photoLightboxZoom.scale <= 1.01) return;
        photoLightboxZoom.x = photoLightboxTouch.offsetX + touches[0].clientX - photoLightboxTouch.x;
        photoLightboxZoom.y = photoLightboxTouch.offsetY + touches[0].clientY - photoLightboxTouch.y;
        applyPhotoLightboxZoom();
    }

    function fitPhotoLightboxImage() {
        if (!photoLightboxImg || !photoLightboxImg.naturalWidth || !photoLightboxImg.naturalHeight) return;
        var viewport = window.visualViewport;
        var viewportWidth = viewport ? viewport.width : window.innerWidth;
        var viewportHeight = viewport ? viewport.height : window.innerHeight;
        var horizontalSpace = viewportWidth <= 640 ? 20 : 52;
        var verticalSpace = viewportWidth <= 640 ? 132 : 122;
        var maxWidth = Math.max(144, Math.min(1180, viewportWidth - horizontalSpace));
        var maxHeight = Math.max(144, viewportHeight - verticalSpace);
        var scale = Math.min(
            maxWidth / photoLightboxImg.naturalWidth,
            maxHeight / photoLightboxImg.naturalHeight
        );
        var width = Math.max(1, Math.round(photoLightboxImg.naturalWidth * scale));
        var height = Math.max(1, Math.round(photoLightboxImg.naturalHeight * scale));

        setPhotoLightboxFrame(width, height);
        applyPhotoLightboxZoom();
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
        resetPhotoLightboxZoom();
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
        clearPhotoLightboxFrame();
        photoLightboxImg.alt = title || (img ? img.alt : '');

        // Khóa scroll body
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';

        photoLightboxImg.onload = function () {
            if (photoLightboxImg.dataset.requestId !== requestId) return;
            fitPhotoLightboxImage();
            photoLightbox.classList.remove('is-loading');
        };
        photoLightboxImg.onerror = function () {
            if (photoLightboxImg.dataset.requestId !== requestId) return;
            photoLightbox.classList.remove('is-loading');
        };

        photoLightboxImg.sizes = '(max-width: 1200px) 100vw, 1180px';
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
        var lightboxWorld = photoLightbox._activeGallery && photoLightbox._activeGallery.getAttribute('data-live-scope');
        if (lightboxWorld) photoLightbox.setAttribute('data-world', lightboxWorld);
        else photoLightbox.removeAttribute('data-world');
        updatePhotoLightboxPinAction();
        document.body.classList.add('is-modal-open');
        photoLightbox.classList.add('is-open');
        photoLightbox.setAttribute('aria-hidden', 'false');
    }

    function closePhotoLightbox() {
        if (!photoLightbox || !photoLightbox.classList.contains('is-open')) return;
        closeUnpinDialog();
        resetPhotoLightboxZoom();
        prepareDialogClose(photoLightbox);
        photoLightbox.classList.remove('is-open', 'is-loading');
        photoLightbox.setAttribute('aria-hidden', 'true');
        syncModalState();
        photoLightbox._activeGallery = null;
        photoLightbox._activePhoto = null;
        photoLightbox.removeAttribute('data-world');
        if (photoLightboxPinAction) photoLightboxPinAction.hidden = true;
        photoLightboxImg.dataset.requestId = '';
        
        // Mở khóa scroll body
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('touch-action');
        
        photoLightboxReleaseTimer = setTimeout(function () {
            photoLightboxImg.onload = null;
            photoLightboxImg.onerror = null;
            photoLightboxImg.removeAttribute('srcset');
            photoLightboxImg.removeAttribute('src');
            clearPhotoLightboxFrame();
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

    function fetchGalleryActionWithTimeout(url, options, timeoutMs) {
        if (!window.AbortController) return fetch(url, options);
        var controller = new AbortController();
        var timer = setTimeout(function () { controller.abort(); }, timeoutMs);
        return fetch(url, Object.assign({}, options, { signal: controller.signal })).finally(function () {
            clearTimeout(timer);
        });
    }

    function closeUnpinDialog() {
        if (!unpinDialog || !unpinDialog.classList.contains('is-open')) return;
        prepareDialogClose(unpinDialog);
        unpinDialog.classList.remove('is-open');
        unpinDialog.setAttribute('aria-hidden', 'true');
        syncModalState();
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
            fetchGalleryActionWithTimeout(mode === 'pin' ? GALLERY_PIN_API : GALLERY_UNPIN_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ scope: photo.scope, publicId: photo.publicId })
            }, 30000).then(function (response) {
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
                var pageToKeep = gallery._currentPage || 1;
                closeUnpinDialog();
                renderPhotoGallery(gallery, (gallery._photos || []).slice(), pageToKeep);
                updatePhotoLightboxPinAction();
                if (!photoLightbox || !photoLightbox.classList.contains('is-open')) {
                    gallery.setAttribute('tabindex', '-1');
                    window.requestAnimationFrame(function () {
                        gallery.focus({ preventScroll: true });
                    });
                }
                if (window.showTimeboxToast) {
                    window.showTimeboxToast(mode === 'pin' ? 'Đã ghim ảnh' : 'Đã bỏ ghim ảnh');
                }
            }).catch(function (error) {
                if (error && error.name === 'AbortError') {
                    status.textContent = 'Kết nối quá lâu, vui lòng thử lại.';
                    return;
                }
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
        syncModalState();
        actionButton.focus({ preventScroll: true });
    }

    function openUnpinDialog(gallery, photo) {
        openPinActionDialog(gallery, photo, 'unpin');
    }

    function createPhotoCard(gallery, src, name, fullSrc, originalSrc, thumbSrcset, fullSrcset, isPriority, isPinnedUpload, photo) {
        var card = document.createElement('div');
        var openButton = document.createElement('button');
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
        openButton.type = 'button';
        openButton.className = 'photo-card__open';
        openButton.setAttribute('aria-label', 'Mở ảnh ' + (name || 'kỷ niệm'));
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
            img.sizes = '(max-width: 899px) and (orientation: landscape) calc((100vw - 54px) / 4), (max-width: 639px) calc((100vw - 36px) / 3), (max-width: 699px) calc((100vw - 68px) / 3), (max-width: 899px) calc((100vw - 88px) / 4), 210px';
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

        openButton.appendChild(img);
        card.appendChild(openButton);
        if (isPinned) {
            var pinBadge = document.createElement('button');
            pinBadge.type = 'button';
            pinBadge.className = 'photo-card__pin';
            pinBadge.innerHTML = '<i class="fas fa-thumbtack" aria-hidden="true"></i>';
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
            card.appendChild(pinBadge);
        }
        openButton.addEventListener('click', function () {
            openPhotoLightbox(card);
        });

        // 3D Spatial Holographic Card Tilt (Desktop only, GPU accelerated)
        var isTouchDevice = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
        if (!isTouchDevice) {
            var tiltRaf = 0;
            card.addEventListener('mousemove', function (e) {
                if (tiltRaf) return;
                tiltRaf = requestAnimationFrame(function () {
                    tiltRaf = 0;
                    var rect = card.getBoundingClientRect();
                    if (!rect.width || !rect.height) return;
                    var x = (e.clientX - rect.left) / rect.width - 0.5;
                    var y = (e.clientY - rect.top) / rect.height - 0.5;
                    card.style.setProperty('--tilt-rx', (-y * 12).toFixed(2) + 'deg');
                    card.style.setProperty('--tilt-ry', (x * 12).toFixed(2) + 'deg');
                    card.style.setProperty('--glare-x', ((x + 0.5) * 100).toFixed(1) + '%');
                    card.style.setProperty('--glare-y', ((y + 0.5) * 100).toFixed(1) + '%');
                });
            });
            card.addEventListener('mouseleave', function () {
                if (tiltRaf) cancelAnimationFrame(tiltRaf);
                tiltRaf = 0;
                card.style.removeProperty('--tilt-rx');
                card.style.removeProperty('--tilt-ry');
                card.style.removeProperty('--glare-x');
                card.style.removeProperty('--glare-y');
            });
        }

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

        var pages = [];
        if (pageCount <= 7) {
            for (var pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) pages.push(pageNumber);
        } else {
            [1, currentPage - 1, currentPage, currentPage + 1, pageCount].forEach(function (pageNumber) {
                if (pageNumber >= 1 && pageNumber <= pageCount && pages.indexOf(pageNumber) === -1) {
                    pages.push(pageNumber);
                }
            });
            pages.sort(function (a, b) { return a - b; });
        }

        pages.forEach(function (page, index) {
            if (index > 0 && page - pages[index - 1] > 1) {
                var ellipsis = document.createElement('span');
                ellipsis.className = 'photo-pager__ellipsis';
                ellipsis.textContent = '…';
                ellipsis.setAttribute('aria-hidden', 'true');
                pager.appendChild(ellipsis);
            }
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'photo-pager__btn';
            btn.textContent = page;
            btn.setAttribute('aria-label', 'Trang ' + page + ' trên ' + pageCount);
            if (page === currentPage) {
                btn.classList.add('is-active');
                btn.setAttribute('aria-current', 'page');
            }
            btn.addEventListener('click', function () {
                if (page === currentPage) return;
                onPageChange(page);
            });
            pager.appendChild(btn);
        });

        gallery.insertAdjacentElement('afterend', pager);
    }

    function getPerPage() {
        return 12;
    }

    function renderPhotoGalleryPage(gallery, photos, page) {
        gallery.classList.remove('is-changing');
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
            if (nextPage === currentPage) return;
            clearTimeout(gallery._pageTimer);
            gallery.classList.add('is-changing');
            var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            gallery._pageTimer = setTimeout(function () {
                gallery._pageTimer = null;
                renderPhotoGalleryPage(gallery, photos, nextPage);
                gallery.classList.remove('is-changing');
                gallery.setAttribute('tabindex', '-1');
                gallery.setAttribute('aria-label', 'Trang ảnh ' + nextPage + ' trên ' + pageCount);
                window.requestAnimationFrame(function () {
                    gallery.focus({ preventScroll: true });
                    if (window.innerWidth <= 899) {
                        gallery.scrollIntoView({
                            behavior: reduceMotion ? 'auto' : 'smooth',
                            block: 'start'
                        });
                    }
                });
            }, reduceMotion ? 0 : 140);
        });
    }

    function renderPhotoGallery(gallery, photos, page) {
        if (photoLightbox && photoLightbox.classList.contains('is-open') && photoLightbox._activeGallery === gallery) {
            gallery.setAttribute('tabindex', '-1');
            dialogReturnFocus.set(photoLightbox, gallery);
        }
        var sortedPhotos = applyPinnedPhotoOrder(gallery, sortPhotosNewestFirst(photos));
        gallery._photos = sortedPhotos;
        renderPhotoGalleryPage(gallery, sortedPhotos, page || 1);
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
                thumb: getCloudinaryVariant(url, 'f_auto,q_90,c_limit,w_1080'),
                thumbSrcset: getCloudinarySrcset(url, [540, 720, 1080, 1440], 'q_90'),
                full: getCloudinaryVariant(url, 'f_auto,q_95,c_limit,w_3200'),
                fullSrcset: getCloudinarySrcset(url, [1440, 2160, 3200], 'q_95'),
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
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return Promise.resolve([]);
        }
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
                        thumb: getCloudinaryVariant(src, 'f_auto,q_90,c_limit,w_1080'),
                        thumbSrcset: getCloudinarySrcset(src, [540, 720, 1080, 1440], 'q_90'),
                        full: getCloudinaryVariant(src, 'f_auto,q_95,c_limit,w_3200'),
                        fullSrcset: getCloudinarySrcset(src, [1440, 2160, 3200], 'q_95'),
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
                renderPhotoGallery(gallery, mergedPhotos, gallery._currentPage || 1);
            }
        }).catch(function () {
            // Nếu Worker tạm lỗi, các URL ảnh cũ vẫn hiển thị bình thường.
            if (!gallery._photos && oldPhotos.length) renderPhotoGallery(gallery, oldPhotos, gallery._currentPage || 1);
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
                thumb: getCloudinaryVariant(src, 'f_auto,q_90,c_limit,w_1080'),
                thumbSrcset: getCloudinarySrcset(src, [540, 720, 1080, 1440], 'q_90'),
                full: getCloudinaryVariant(src, 'f_auto,q_95,c_limit,w_3200'),
                fullSrcset: getCloudinarySrcset(src, [1440, 2160, 3200], 'q_95'),
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
        clearTimeout(gallery._pageTimer);
        gallery._pageTimer = null;
        gallery.classList.remove('is-changing');
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

    // CSS owns the responsive column count. Resize only refits an open lightbox.
    var resizeTimer = null;
    function queueLightboxFit() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (photoLightbox && photoLightbox.classList.contains('is-open')) {
                fitPhotoLightboxImage();
            }
        }, 120);
    }
    if (window.addEventListener) {
        window.addEventListener('resize', queueLightboxFit, { passive: true });
    }
    if (window.visualViewport && window.visualViewport.addEventListener) {
        window.visualViewport.addEventListener('resize', queueLightboxFit, { passive: true });
    }

    document.querySelectorAll('.photo-card').forEach(function (card) {
        if (card.querySelector('.photo-card__open')) return;
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

    if (photoLightboxStage) {
        photoLightboxStage.addEventListener('touchstart', function (event) {
            event.preventDefault();
            beginPhotoLightboxTouch(event.touches);
        }, { passive: false });
        photoLightboxStage.addEventListener('touchmove', function (event) {
            event.preventDefault();
            movePhotoLightboxTouch(event.touches);
        }, { passive: false });
        photoLightboxStage.addEventListener('touchend', function (event) {
            event.preventDefault();
            if (event.touches.length) {
                beginPhotoLightboxTouch(event.touches);
            } else {
                photoLightboxTouch = null;
            }
        }, { passive: false });
        photoLightboxStage.addEventListener('touchcancel', function () {
            photoLightboxTouch = null;
        }, { passive: true });

        // iOS Safari emits these legacy gesture events in addition to touch events.
        ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (eventName) {
            photoLightboxStage.addEventListener(eventName, function (event) {
                event.preventDefault();
            }, { passive: false });
        });

        // Desktop: Wheel scroll để zoom trong khung ảnh
        photoLightboxStage.addEventListener('wheel', function (event) {
            event.preventDefault();
            event.stopPropagation();
            
            if (!photoLightboxImg) return;
            
            var delta = event.deltaY;
            var zoomChange = delta > 0 ? -PHOTO_LIGHTBOX_ZOOM_STEP : PHOTO_LIGHTBOX_ZOOM_STEP;
            var newScale = Math.max(PHOTO_LIGHTBOX_MIN_ZOOM, 
                Math.min(PHOTO_LIGHTBOX_MAX_ZOOM, photoLightboxZoom.scale + zoomChange));
            
            // Lấy vị trí chuột trong khung ảnh
            var bounds = photoLightboxStage.getBoundingClientRect();
            var mouseX = event.clientX - bounds.left - (bounds.width / 2);
            var mouseY = event.clientY - bounds.top - (bounds.height / 2);
            
            // Tính toán zoom origin tại vị trí chuột
            var scaleRatio = newScale / photoLightboxZoom.scale;
            photoLightboxZoom.x = mouseX - (mouseX - photoLightboxZoom.x) * scaleRatio;
            photoLightboxZoom.y = mouseY - (mouseY - photoLightboxZoom.y) * scaleRatio;
            photoLightboxZoom.scale = newScale;
            
            applyPhotoLightboxZoom();
        }, { passive: false });

        // Desktop: Click và drag để pan khi đã zoom
        var isDragging = false;
        var dragStart = { x: 0, y: 0 };
        var dragOffset = { x: 0, y: 0 };

        photoLightboxStage.addEventListener('mousedown', function (event) {
            if (photoLightboxZoom.scale <= 1.01) return;
            isDragging = true;
            dragStart.x = event.clientX;
            dragStart.y = event.clientY;
            dragOffset.x = photoLightboxZoom.x;
            dragOffset.y = photoLightboxZoom.y;
            photoLightboxStage.style.cursor = 'grabbing';
            event.preventDefault();
        });

        document.addEventListener('mousemove', function (event) {
            if (!isDragging) return;
            photoLightboxZoom.x = dragOffset.x + (event.clientX - dragStart.x);
            photoLightboxZoom.y = dragOffset.y + (event.clientY - dragStart.y);
            applyPhotoLightboxZoom();
        });

        document.addEventListener('mouseup', function () {
            if (isDragging) {
                isDragging = false;
                photoLightboxStage.style.cursor = photoLightboxZoom.scale > 1.01 ? 'grab' : 'default';
            }
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
                document.body.removeChild(tmp);
                showToast('Đã copy email: ' + email);
            }
        });
    }

    /* ---- Mobile 3D Coverflow / Cylinder Carousel Controller for Quick Dock ---- */
    function initCoverflowDock() {
        var dock = document.querySelector('[data-coverflow-dock]');
        if (!dock) return;
        var buttons = dock.querySelectorAll('.space-dock-btn');
        if (!buttons.length) return;

        var isTicking = false;
        function updateCoverflow() {
            isTicking = false;
            if (window.innerWidth > 768) {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].style.removeProperty('transform');
                    buttons[i].style.removeProperty('opacity');
                    buttons[i].classList.remove('is-active-center');
                }
                return;
            }

            var dockWidth = dock.clientWidth;
            if (!dockWidth) return;
            var center = dock.scrollLeft + dockWidth / 2;

            var closestBtn = null;
            var closestDist = Infinity;

            for (var i = 0; i < buttons.length; i++) {
                var btn = buttons[i];
                var btnCenter = btn.offsetLeft + btn.offsetWidth / 2;
                var dist = btnCenter - center;
                var absDist = Math.abs(dist);

                if (absDist < closestDist) {
                    closestDist = absDist;
                    closestBtn = btn;
                }

                var norm = dist / (btn.offsetWidth * 0.95);
                var clampNorm = Math.max(-2.2, Math.min(2.2, norm));

                var rotateY = clampNorm * -24;
                var scale = Math.max(0.76, 1 - Math.abs(clampNorm) * 0.14);
                var opacity = Math.max(0.32, 1 - Math.abs(clampNorm) * 0.38);

                btn.style.transform = 'scale(' + scale.toFixed(3) + ') rotateY(' + rotateY.toFixed(2) + 'deg) translateZ(0)';
                btn.style.opacity = opacity.toFixed(3);
            }

            for (var j = 0; j < buttons.length; j++) {
                if (buttons[j] === closestBtn) {
                    buttons[j].classList.add('is-active-center');
                } else {
                    buttons[j].classList.remove('is-active-center');
                }
            }
        }

        function requestUpdate() {
            if (isTicking) return;
            isTicking = true;
            requestAnimationFrame(updateCoverflow);
        }

        dock.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate, { passive: true });
        window.addEventListener('orientationchange', requestUpdate, { passive: true });

        // Immediate run
        updateCoverflow();
    }

    initCoverflowDock();
})();
