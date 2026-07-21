// life.js – Gallery logic for "Góc cá nhân" page
(function () {
    var overlay = document.getElementById('gallery-overlay');
    var titleEl = document.getElementById('gallery-title');
    var gridEl = document.getElementById('gallery-grid');
    var quoteEl = document.getElementById('gallery-quote');
    var emptyEl = document.getElementById('gallery-empty');
    var closeBtn = document.getElementById('gallery-close');
    var backBtn = document.getElementById('life-back');
    var toast = document.getElementById('life-toast');
    var joinBtn = document.getElementById('card-join');
    var joinModal = document.getElementById('join-modal');
    var joinClose = document.getElementById('join-close');
    var joinForm = document.getElementById('join-form');
    var joinCreatedAt = document.getElementById('join-created-at');
    var momentsUploadWidget = document.getElementById('moments-upload-widget');
    var momentsUploadInput = document.getElementById('moments-upload-input');
    var momentsUploadHint = document.getElementById('moments-upload-hint');
    var momentsSendBtn = document.getElementById('moments-send-btn');
    var momentsPreview = document.getElementById('moments-upload-preview');
    var momentsStatus = document.getElementById('moments-upload-status');
    var toastTimer = null;
    var thoughtsConfirmModal = null;
    var thoughtsConfirmCloseTimer = null;
    var JOIN_STORAGE_KEY = 'life-join-submissions';
    var MOMENTS_UPLOAD_CLOUD_NAME = 'dtpw5htqs';
    var MOMENTS_UPLOAD_PRESET = 'Upload_img';
    var MOMENTS_MAX_FILES = 10;
    var MOMENTS_MAX_SIZE_MB = 20;
    var MOMENTS_MAX_SIZE = MOMENTS_MAX_SIZE_MB * 1024 * 1024;
    var selectedMomentsFiles = [];
    var momentsPreviewUrls = [];
    var momentsStatusTimer = null;
    var momentsUploading = false;
    var DEFAULT_TOAST_MESSAGE = toast ? toast.textContent : 'Mục này đang được cập nhật, hãy quay lại sau nhé!';
    var THOUGHTS_STORAGE_KEY = 'life-thoughts-selected';
    var thoughtsQuotes = [
        'Nghe hàng nghìn đạo lý — nhưng vẫn chưa sống tốt ở hiện tại.',
        'Những thứ đơn giản tạo nên tình yêu — tình yêu sẽ là những thứ đơn giản.',
        'Không cô đơn vì biết đủ hay không cô đơn vì không biết đủ.',
        'Ánh mắt của tôi chỉ dành cho bạn — nhưng liệu chỉ nhìn từ xa thì có hối hận không.',
        'Biết đủ để không cần nói.',
        'Ai cũng nghĩ mình là nạn nhân nhưng đâu nghĩ rằng ai cũng có lỗi.',
        'Một khoảnh khắc nhỏ đã biến ngày hôm đó thành kỷ niệm.',
        'Không cho em được gì nhiều nên chẳng dám đòi hỏi bao nhiêu.',
        'Khởi đầu đầy lời tạm biệt.',
        'Hãy chấp nhận góc nhìn của người khác mà không cần chứng minh mình đúng.',
        'Mình đang yêu người đó theo cách hiện tại, hay mình đang giữ một phần của bản thân mình trong quá khứ.',
        'Anh học thêm, để kể em nhiều — Em học thêm, để hiểu những gì anh kể.',
        'Bất kể là mối quan hệ gì, khi người khác không cần. Bạn phải học cách thu hồi sự nhiệt tình và lịch sự rời đi.',
        'Đừng mải mê một ánh mặt trời đã lặn, mà quên ngước nhìn bầu trời đầy sao',
        'Khi tình cảm vừa nảy sinh, điều đầu tiên mà tôi nghĩ đến lại là làm thế nào để phớt lờ nhau.'
    ];
    var specialThoughtIndexes = [1, 7, 11];


    // Category config: map category key → display name
    var categories = {
        cooking: {
            title: 'Nấu ăn',
            images: []
        },
        thoughts: {
            title: 'Sai số thứ...',
            images: []
        },
        connections: {
            title: 'Bạn bè',
            images: []
        },
        daily: {
            title: 'Upload',
            images: []
        }
    };

    function setThoughtQuote(index) {
        if (!quoteEl) return;

        if (!Number.isFinite(index) || index < 0 || index >= thoughtsQuotes.length) {
            quoteEl.className = 'gallery-panel__quote';
            quoteEl.innerHTML = '';
            quoteEl.hidden = true;
            try {
                localStorage.removeItem(THOUGHTS_STORAGE_KEY);
            } catch (e) {}
            document.querySelectorAll('.thoughts-number-btn').forEach(function (btn) {
                btn.classList.remove('is-active');
            });
            return;
        }

        var safeIndex = Math.max(0, Math.min(index, thoughtsQuotes.length - 1));
        var isSpecial = specialThoughtIndexes.indexOf(safeIndex) !== -1;
        quoteEl.className = 'gallery-panel__quote is-visible';
        quoteEl.innerHTML = '<span class="thought-quote__text' + (isSpecial ? ' thought-quote__text--special' : '') + '">' + thoughtsQuotes[safeIndex] + '</span>';
        quoteEl.hidden = false;

        try {
            localStorage.setItem(THOUGHTS_STORAGE_KEY, String(safeIndex));
        } catch (e) {}

        document.querySelectorAll('.thoughts-number-btn').forEach(function (btn) {
            btn.classList.toggle('is-active', Number(btn.getAttribute('data-index')) === safeIndex);
        });
    }

    function renderThoughtsQuotes() {
        titleEl.textContent = categories.thoughts.title;
        gridEl.innerHTML = '';
        gridEl.dataset.mode = 'thoughts';
        emptyEl.hidden = true;
        quoteEl.className = 'gallery-panel__quote';
        quoteEl.innerHTML = '';
        quoteEl.hidden = true;

        thoughtsQuotes.forEach(function (quote, index) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'thoughts-number-btn';
            btn.setAttribute('data-index', String(index));
            btn.innerHTML = '<span>' + (index + 1) + '</span>';
            btn.addEventListener('click', function () {
                setThoughtQuote(index);
            });
            gridEl.appendChild(btn);
        });
    }

    function openGallery(categoryKey) {
        var cat = categories[categoryKey];
        if (!cat || !overlay) return;

        titleEl.textContent = cat.title;
        overlay.classList.toggle('is-upload-mode', categoryKey === 'daily');
        gridEl.innerHTML = '';
        gridEl.dataset.mode = '';
        if (momentsUploadWidget) momentsUploadWidget.hidden = categoryKey !== 'daily';
        if (momentsStatus) momentsStatus.classList.remove('is-visible');
        clearTimeout(toastTimer);
        document.body.classList.add('is-modal-open');
        emptyEl.hidden = false;
        emptyEl.classList.remove('is-visible');
        quoteEl.hidden = true;
        quoteEl.className = 'gallery-panel__quote';
        quoteEl.classList.remove('is-visible');
        quoteEl.innerHTML = '';

        if (categoryKey === 'thoughts') {
            renderThoughtsQuotes();
        } else if (cat.images.length === 0) {
            if (categoryKey !== 'daily') {
                showLifeToast();
                return;
            }
            emptyEl.hidden = true;
        } else {
            emptyEl.classList.remove('is-visible');
            emptyEl.hidden = true;
            cat.images.forEach(function (filename) {
                var img = document.createElement('img');
                img.src = cat.folder + filename;
                img.alt = cat.title + ' – ' + filename;
                img.loading = 'lazy';
                gridEl.appendChild(img);
            });
        }

        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
    }

    function showLifeToast(message) {
        if (!toast) return;
        toast.textContent = message || DEFAULT_TOAST_MESSAGE;
        toast.classList.add('is-visible');
        toastTimer = setTimeout(function () {
            toast.classList.remove('is-visible');
        }, 900);
    }


    function setMomentsStatus(message, duration, onDone) {
        if (!momentsStatus) return;
        clearTimeout(momentsStatusTimer);
        momentsStatus.textContent = message || '';
        momentsStatus.classList.toggle('is-visible', Boolean(message));
        if (message) {
            momentsStatusTimer = setTimeout(function () {
                momentsStatus.classList.remove('is-visible');
                if (typeof onDone === 'function') onDone();
            }, duration || 3000);
        }
    }

    function releaseMomentsPreviewUrls() {
        momentsPreviewUrls.forEach(function (url) {
            try { URL.revokeObjectURL(url); } catch (e) { }
        });
        momentsPreviewUrls = [];
    }

    function renderMomentsPreview() {
        if (!momentsPreview || !momentsSendBtn || !momentsUploadHint) return;

        releaseMomentsPreviewUrls();
        momentsPreview.innerHTML = '';

        if (!selectedMomentsFiles.length) {
            momentsPreview.hidden = true;
            momentsUploadHint.hidden = false;
            momentsSendBtn.hidden = true;
            return;
        }

        selectedMomentsFiles.forEach(function (file, index) {
            var item = document.createElement('div');
            var img = document.createElement('img');
            var removeBtn = document.createElement('button');

            item.className = 'moments-upload-preview__item';
            img.alt = file.name;
            var previewUrl = URL.createObjectURL(file);
            momentsPreviewUrls.push(previewUrl);
            img.src = previewUrl;
            removeBtn.type = 'button';
            removeBtn.className = 'moments-upload-preview__remove';
            removeBtn.setAttribute('aria-label', 'Xóa ảnh ' + file.name);
            removeBtn.innerHTML = '&times;';
            removeBtn.addEventListener('click', function () {
                selectedMomentsFiles.splice(index, 1);
                renderMomentsPreview();
            });

            item.appendChild(img);
            item.appendChild(removeBtn);
            momentsPreview.appendChild(item);
        });

        momentsUploadHint.hidden = true;
        momentsPreview.hidden = false;
        momentsSendBtn.hidden = false;
    }

    function uploadMomentToCloudinary(file) {
        var formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', MOMENTS_UPLOAD_PRESET);

        return fetch('https://api.cloudinary.com/v1_1/' + MOMENTS_UPLOAD_CLOUD_NAME + '/image/upload', {
            method: 'POST',
            body: formData
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (!data.secure_url) throw new Error('Upload failed');
            return data.secure_url;
        });
    }

    function handleMomentsFileSelect(files) {
        var fileArray = Array.prototype.slice.call(files || []);
        if (momentsUploadInput) momentsUploadInput.value = '';
        if (!fileArray.length) return;

        for (var i = 0; i < fileArray.length; i += 1) {
            if (selectedMomentsFiles.length >= MOMENTS_MAX_FILES) {
                setMomentsStatus('Hi\u1ebfu ch\u01b0a pro n\u00ean ch\u01b0a n\u00e2ng c\u1ea5p nh\u1eadn nhi\u1ec1u \u1ea3nh \ud83e\udd72');
                break;
            }

            var file = fileArray[i];
            if (!/^image\/(jpeg|png|webp|gif)$/i.test(file.type)) {
                setMomentsStatus('Chỉ nhận ảnh JPG, PNG, WEBP hoặc GIF');
                continue;
            }

            if (file.size > MOMENTS_MAX_SIZE) {
                setMomentsStatus('Ảnh tối đa ' + MOMENTS_MAX_SIZE_MB + 'MB');
                continue;
            }

            selectedMomentsFiles.push(file);
        }

        renderMomentsPreview();
    }

    function resetMomentsUpload() {
        releaseMomentsPreviewUrls();
        selectedMomentsFiles = [];
        if (momentsPreview) {
            momentsPreview.innerHTML = '';
            momentsPreview.hidden = true;
        }
        if (momentsUploadHint) momentsUploadHint.hidden = false;
        if (momentsSendBtn) momentsSendBtn.hidden = true;
    }
    function stopConfirmEvent(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }

    function ensureThoughtsConfirmModal() {
        if (thoughtsConfirmModal) return thoughtsConfirmModal;

        thoughtsConfirmModal = document.createElement('div');
        thoughtsConfirmModal.className = 'thoughts-confirm';
        thoughtsConfirmModal.setAttribute('aria-hidden', 'true');
        thoughtsConfirmModal.innerHTML =
            '<div class="thoughts-confirm__backdrop"></div>' +
            '<article class="thoughts-confirm__card" role="dialog" aria-modal="true" aria-label="X&aacute;c nh&#7853;n L&#259;ng k&iacute;nh">' +
                '<p class="thoughts-confirm__message">Có thể bạn đã nghe - đã thấy và có thể chưa đúng với bạn, nhưng đó là góc nhìn từng trải của mình.</p>' +
                '<div class="thoughts-confirm__actions">' +
                    '<button type="button" class="thoughts-confirm__accept">Ch&#7845;p nh&#7853;n</button>' +
                    '<button type="button" class="thoughts-confirm__decline">Kh&ocirc;ng</button>' +
                '</div>' +
            '</article>';

        var backdrop = thoughtsConfirmModal.querySelector('.thoughts-confirm__backdrop');
        var card = thoughtsConfirmModal.querySelector('.thoughts-confirm__card');

        ['pointerdown', 'touchend', 'click'].forEach(function (eventName) {
            backdrop.addEventListener(eventName, stopConfirmEvent);
            card.addEventListener(eventName, function (ev) {
                ev.stopPropagation();
            });
        });

        thoughtsConfirmModal.querySelector('.thoughts-confirm__accept').addEventListener('click', function (ev) {
            stopConfirmEvent(ev);
            closeThoughtsConfirm(true);
        });

        thoughtsConfirmModal.querySelector('.thoughts-confirm__decline').addEventListener('click', function (ev) {
            stopConfirmEvent(ev);
            closeThoughtsConfirm(false);
        });

        document.body.appendChild(thoughtsConfirmModal);
        return thoughtsConfirmModal;
    }

    function openThoughtsConfirm() {
        var modal = ensureThoughtsConfirmModal();
        clearTimeout(thoughtsConfirmCloseTimer);
        document.body.classList.add('is-modal-open');
        modal.classList.remove('is-closing');
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeThoughtsConfirm(accepted) {
        if (!thoughtsConfirmModal) return;
        thoughtsConfirmModal.classList.remove('is-open');
        thoughtsConfirmModal.classList.add('is-closing');
        thoughtsConfirmModal.setAttribute('aria-hidden', 'true');

        thoughtsConfirmCloseTimer = setTimeout(function () {
            if (!thoughtsConfirmModal) return;
            thoughtsConfirmModal.classList.remove('is-closing');
            if (!accepted) document.body.classList.remove('is-modal-open');
        }, 320);

        if (accepted) openGallery('thoughts');
    }

    function closeGallery() {
        if (!overlay) return;
        // Không cho đóng trong khi đang upload
        if (momentsUploading) return;
        clearTimeout(toastTimer);
        document.body.classList.remove('is-modal-open');
        overlay.classList.remove('is-open');
        overlay.classList.remove('is-upload-mode');
        overlay.setAttribute('aria-hidden', 'true');
        resetMomentsUpload();

        var url = new URL(window.location.href);
        if (url.searchParams.has('category')) {
            url.searchParams.delete('category');
            history.replaceState({}, '', url.pathname + (url.search ? '?' + url.searchParams.toString() : ''));
        }
    }

    function openJoinModal() {
        if (!joinModal) return;
        document.body.classList.add('is-modal-open');
        joinModal.classList.add('is-open');
        joinModal.setAttribute('aria-hidden', 'false');
    }

    function closeJoinModal() {
        if (!joinModal) return;
        document.body.classList.remove('is-modal-open');
        joinModal.classList.remove('is-open');
        joinModal.setAttribute('aria-hidden', 'true');
    }

    function readJoinSubmissions() {
        try {
            return JSON.parse(localStorage.getItem(JOIN_STORAGE_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function saveJoinSubmission(data) {
        var submissions = readJoinSubmissions();
        submissions.push(data);
        try {
            localStorage.setItem(JOIN_STORAGE_KEY, JSON.stringify(submissions, null, 2));
        } catch (e) {
            return false;
        }
        return true;
    }

    function isValidGmail(email) {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email);
    }
    // Attach click to each category card
    document.querySelectorAll('.life-card').forEach(function (card) {
        card.addEventListener('click', function (e) {
            var category = card.getAttribute('data-category');
            if (!category) return;
            e.preventDefault();

            if (category === 'thoughts') {
                openThoughtsConfirm();
                return;
            }

            if (category) openGallery(category);
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // SPA mode: dùng _spaGoBack nếu có, fallback về navigate
            if (window._spaGoBack) {
                window._spaGoBack();
            } else {
                navigateWithTransition('./');
            }
        });
    }

    if (momentsUploadHint && momentsUploadInput) {
        momentsUploadHint.addEventListener('click', function () {
            momentsUploadInput.click();
        });
    }

    if (momentsUploadInput) {
        momentsUploadInput.addEventListener('change', function () {
            handleMomentsFileSelect(momentsUploadInput.files);
        });
    }

    if (momentsSendBtn) {
        momentsSendBtn.addEventListener('click', function () {
            if (!selectedMomentsFiles.length) return;
            if (momentsUploading) return;

            var filesToUpload = selectedMomentsFiles.slice();
            momentsUploading = true;
            momentsSendBtn.disabled = true;
            // Ẩn nút X và vô hiệu overlay click khi đang upload
            if (closeBtn) closeBtn.disabled = true;

            setMomentsStatus('Đang gửi ' + filesToUpload.length + ' ảnh...');

            Promise.allSettled(filesToUpload.map(function (file) {
                return uploadMomentToCloudinary(file);
            })).then(function (results) {
                var succeeded = results.filter(function (r) { return r.status === 'fulfilled'; }).length;
                var failed = results.length - succeeded;

                resetMomentsUpload();
                if (momentsUploadWidget) momentsUploadWidget.hidden = true;

                if (failed === 0) {
                    setMomentsStatus('Cảm ơn bro đã gửi ảnh \ud83c\udf37', 2000, closeGallery);
                } else if (succeeded > 0) {
                    setMomentsStatus('Gửi được ' + succeeded + '/' + filesToUpload.length + ' ảnh \ud83c\udf37', 3000, closeGallery);
                } else {
                    // Toàn bộ thất bại — khôi phục lại để thử lại
                    selectedMomentsFiles = filesToUpload;
                    if (momentsUploadWidget) momentsUploadWidget.hidden = false;
                    renderMomentsPreview();
                    setMomentsStatus('Gửi ảnh thất bại, thử lại nhé!', 3000);
                }
            }).catch(function (error) {
                console.error('Upload error:', error);
                // Khôi phục lại để thử lại
                selectedMomentsFiles = filesToUpload;
                if (momentsUploadWidget) momentsUploadWidget.hidden = false;
                renderMomentsPreview();
                setMomentsStatus('Có lỗi khi gửi ảnh, thử lại nhé!', 3000);
            }).finally(function () {
                momentsUploading = false;
                momentsSendBtn.disabled = false;
                if (closeBtn) closeBtn.disabled = false;
            });
        });
    }
    if (joinBtn) {
        joinBtn.addEventListener('click', openJoinModal);
    }

    if (joinClose) {
        joinClose.addEventListener('click', closeJoinModal);
    }


    // Auto-open category only when the URL explicitly requests one.
    var params = new URLSearchParams(window.location.search);
    var categoryParam = params.get('category');
    if (categoryParam && categories[categoryParam]) {
        openGallery(categoryParam);
    }
    if (joinModal) {
        joinModal.querySelector('.join-modal__backdrop').addEventListener('click', closeJoinModal);
    }

    if (joinForm) {
        joinForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var content = String(document.getElementById('join-content').value || '').trim();
            var createdAt = new Date().toISOString();
            var submitBtn = joinForm.querySelector('.join-form__submit');

            if (!content) return;

            if (joinCreatedAt) joinCreatedAt.value = createdAt;
            saveJoinSubmission({
                content: content,
                createdAt: createdAt
            });

            if (submitBtn) submitBtn.disabled = true;

            // Báo cảm ơn ngay, gửi dữ liệu ở background
            joinForm.reset();
            closeJoinModal();
            showLifeToast('C\u1ea3m \u01a1n b\u1ea1n \u0111\u00e3 g\u00f3p \u00fd \ud83c\udf37');
            if (submitBtn) submitBtn.disabled = false;

            // Build URL params for Apps Script
            var params = new URLSearchParams();
            params.append('content', content);
            params.append('createdAt', createdAt);
            params.append('type', 'feedback');

            var scriptUrl = 'https://script.google.com/macros/s/AKfycby-reALynElbYg4QpU4P6PVcD8qj3qObR3SPil7rOLZkjJv7w0jXzxbv03IgAKyGAu6HA/exec';

            // Gửi dữ liệu ở background bằng Image Beacon
            var img = new Image();
            img.src = scriptUrl + '?' + params.toString();
        });
    }

    // Close gallery
    if (closeBtn) {
        closeBtn.addEventListener('click', closeGallery);
    }

    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeGallery();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (!momentsUploading) closeGallery();
            closeJoinModal();
            closeThoughtsGuideNotice();
        }
    });
    window.addEventListener('pagehide', releaseMomentsPreviewUrls);
})();
