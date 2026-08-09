export const NAV_ITEMS = Object.freeze([
  {
    id: 'family',
    label: 'Gia đình',
    description: 'Những khoảnh khắc bình yên cùng gia đình.',
    iconClass: 'fas fa-house-user',
    color: '#ff4d8d',
    orbitSpeed: 0.72,
    orbit: 0,
    phase: 0.2
  },
  {
    id: 'thoughts',
    label: 'Lăng kính của Hiếu',
    description: 'Nhìn thế giới qua những suy nghĩ rất riêng.',
    iconClass: 'fas fa-eye',
    color: '#8b5cf6',
    orbitSpeed: 0.83,
    orbit: 1,
    phase: 1.1
  },
  {
    id: 'keepsakes',
    label: 'Tạm lưu tạm giữ',
    description: 'Một khoảng nhỏ dành cho điều chưa muốn quên.',
    iconClass: 'fas fa-infinity',
    color: '#14b8a6',
    orbitSpeed: 0.91,
    orbit: 2,
    phase: 2.1
  },
  {
    id: 'friends',
    label: 'Những thằng cốt đột',
    description: 'Tuổi trẻ, tình bạn và những lần cười hết cỡ.',
    iconClass: 'fas fa-users',
    color: '#38bdf8',
    orbitSpeed: 1.02,
    orbit: 0,
    phase: 3.15
  },
  {
    id: 'campus',
    label: 'Sinh viên',
    description: 'Nhật ký của những tháng ngày trên giảng đường.',
    iconClass: 'fas fa-graduation-cap',
    color: '#cbd5e1',
    orbitSpeed: 1.11,
    orbit: 1,
    phase: 4.05
  },
  {
    id: 'cooking',
    label: 'Nấu ăn',
    description: 'Những bữa cơm giản dị và đầy câu chuyện.',
    iconClass: 'fas fa-utensils',
    color: '#fb923c',
    orbitSpeed: 0.78,
    orbit: 2,
    phase: 5.15
  },
  {
    id: 'upload',
    label: 'Upload',
    description: 'Gửi thêm một tấm ảnh vào dòng ký ức.',
    iconClass: 'fas fa-upload',
    color: '#60a5fa',
    orbitSpeed: 0.96,
    orbit: 0,
    phase: 5.85
  },
  {
    id: 'feedback',
    label: 'Feedback',
    description: 'Để lại một suy nghĩ dành cho Timebox.',
    iconClass: 'fas fa-comment-dots',
    color: '#f8fafc',
    orbitSpeed: 1.16,
    orbit: 1,
    phase: 6.55
  }
]);

export const ORBITS = Object.freeze([
  { radiusX: 5.1, radiusZ: 3.35, tiltX: -0.2, tiltZ: 0.08, color: '#526174' },
  { radiusX: 6.15, radiusZ: 4.0, tiltX: 0.22, tiltZ: -0.1, color: '#5b6470' },
  { radiusX: 7.1, radiusZ: 4.65, tiltX: -0.08, tiltZ: 0.18, color: '#4b5b6b' }
]);

export const SPACE_SETTINGS = Object.freeze({
  earthRadius: 2.05,
  autoRotateSpeed: 0.055,
  focusDuration: 1.05,
  cameraZ: 15.5,
  cameraFocusZ: 13.9,
  resumeDelay: 3200,
  dragSensitivity: 0.0062
});
