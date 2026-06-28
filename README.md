# 📱 Kho lưu trữ – Trọng Hiếu

Kho lưu trữ – Nơi lưu giữ kỷ niệm cá nhân. Gia đình, bạn bè, sinh viên và những khoảnh khắc đáng nhớ.

## 📁 Cấu trúc thư mục

```
timebox/
├── index.html          (Trang chủ – Hub chính)
├── life.html           (Góc riêng – Lăng kính, Upload, Feedback)
├── moments.html        (Kỷ niệm – Menu con)
├── cooking.html        (Nấu ăn – Album ảnh)
├── keepsakes.html      (Tạm lưu tạm giữ – Album ảnh)
├── friends.html        (Bạn bè – Album ảnh, có khóa)
├── memories.html       (Hồi ức – Album ảnh)
├── family.html         (Gia đình – Có khóa)
├── campus.html         (Sinh viên – Có khóa)
├── style.css           (Giao diện chính)
├── life.css            (Giao diện trang con)
├── theme.js            (Logic tương tác chính)
├── life.js             (Logic trang Góc riêng)
├── README.md           (File hướng dẫn này)
├── HUONG-DAN.md        (Tài liệu chi tiết)
└── images/
    └── backgrod.webp   (Ảnh nền)
```

## ✨ Tính năng

- ✅ Responsive design (mobile-friendly)
- ✅ Dark mode gradient background
- ✅ Hiệu ứng blob floating background
- ✅ Animation mượt mà khi load trang
- ✅ Hệ thống khóa SHA-256 cho trang riêng tư
- ✅ Upload ảnh lên Cloudinary
- ✅ Feedback gửi về Google Sheets
- ✅ Photo gallery với lightbox phóng to
- ✅ Social media icons (Font Awesome)

## 🗺️ Sơ đồ website

```
index.html (Hub)
├── family.html 🔒
├── moments.html
│   ├── keepsakes.html
│   ├── friends.html 🔒
│   └── memories.html
├── campus.html 🔒
├── cooking.html
└── life.html
    ├── Lăng kính
    ├── Nấu ăn
    ├── Upload
    └── Feedback
```

## 🚀 Deploy lên GitHub Pages

1. Tạo repository `timebox` trên GitHub
2. Upload thư mục này lên repository
3. Vào Settings > Pages > Source: Branch > main
4. Trang sẽ có sẵn tại: `https://yourusername.github.io/timebox/`

## 📝 Ghi chú

- Tất cả links đã được set `target="_blank"` nên sẽ mở tab mới
- Font Awesome icons được load từ CDN nên cần internet
- Responsive tới 480px (mobile devices)
- Ảnh lưu trên Cloudinary, không lưu trong project

---

**Tác giả:** Em Hieu ✨  
**Ngày tạo:** May 16, 2026  
**Cập nhật:** June 28, 2026
