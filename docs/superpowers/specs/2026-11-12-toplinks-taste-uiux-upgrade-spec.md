# TOPLINKS UI/UX Taste Upgrade Specification (Anti-Slop & Brand Alignment)

## 1. Overview & Objectives
Nâng cấp toàn bộ hệ thống giao diện và trải nghiệm (UI/UX) của TOPLINKS (toplinks.vn) theo các nguyên tắc chuẩn mực của **`taste-skill` (v2.5.1 - Anti-Slop Frontend Skill)** và đồng bộ màu sắc nhận diện thương hiệu trực tiếp từ trang chính thức **toplinks.vn**.

Loại bỏ triệt để các dấu hiệu "AI-slop" (giao diện mẫu AI chung chung):
- Loại bỏ màu sắc Tailwind mặc định (`slate-900` / `sky-600` / tím hồng gradient).
- Loại bỏ các hiệu ứng mesh gradient, bóng mờ kính lạm dụng (`glass-card`, `bg-corporate-mesh`).
- Tái lập layout cân đối: nhịp điệu section rõ ràng, căn lề đồng nhất, khoảng thở hào phóng, typography sắc nét.
- Thiết lập bảng màu chuẩn Toplinks: Deep Teal-Navy (`#153e4d`), Vibrant Yellow (`#fbee41`), Deep Slate (`#0a0a0a`), Forest Teal (`#165751`), nền sạch (`#ffffff`, `#f8fafb`).

---

## 2. Brand Identity & Design Tokens

### 2.1 Color Palette (Derived from toplinks.vn)
| Vai trò | Hex Code | Tên biến CSS | Ứng dụng |
|---------|----------|--------------|----------|
| **Brand Primary (Deep Teal-Navy)** | `#153e4d` | `--color-primary` | Header nền/chữ, tiêu đề chính, nút primary, đường nét chủ đạo |
| **Brand Accent (Toplinks Yellow)** | `#fbee41` | `--color-accent` | Điểm nhấn logo, CTA nổi bật, badges quan trọng, highlight |
| **Accent Hover** | `#f0de2b` | `--color-accent-hover` | Trạng thái hover của nút vàng |
| **Brand Secondary (Forest Teal)** | `#165751` | `--color-secondary` | Nền tương phản, thẻ dịch vụ nổi bật, hover link |
| **Dark Neutral (Heading/Body)** | `#0a0a0a` | `--color-text` | Tiêu đề chính, văn bản độ tương phản cao đạt chuẩn WCAG AAA |
| **Muted Neutral** | `#5a6872` | `--color-text-muted` | Phụ đề, mô tả phụ, thông tin thời gian |
| **Background Light** | `#ffffff` | `--color-bg` | Nền trang chính |
| **Surface Alt** | `#f8fafb` | `--color-bg-alt` | Nền xen kẽ giữa các section |
| **Card Surface** | `#ffffff` | `--color-card` | Thẻ nội dung |
| **Border Neutral** | `#e2e8ec` | `--color-border` | Đường kẻ phân cách tinh tế |
| **Focus Ring** | `#153e4d` | `--color-ring` | Focus state rõ nét cho accessibility |

### 2.2 Typography System
- **Heading Font:** `Poppins`, sans-serif (Weights: 600, 700) - phong thái đĩnh đạc, hiện đại, uy tín.
- **Body Font:** `Plus Jakarta Sans`, sans-serif (Weights: 400, 500, 600) - độ đọc tối ưu cho tiếng Việt và thuật ngữ chuyên môn.

### 2.3 Micro-Interactions (Theo chuẩn taste-skill)
- Card hover: nâng nhẹ `2px` (`transform: translateY(-2px)`), đổ bóng mềm `0 12px 24px -6px rgba(21, 62, 77, 0.08)`. Không lật 3D nghiêng ngả.
- Button click: `active:scale-[0.98]`.
- Link hover: gạch chân tinh tế hoặc đổi màu về `#153e4d` / `#165751`.

---

## 3. Scope of Changes Across Pages
1. **`design-system/toplinks/MASTER.md`**: Cập nhật toàn bộ design tokens theo màu toplinks.vn và quy chuẩn taste-skill.
2. **`assets/css/style.css`**: Viết lại hệ thống class CSS cốt lõi, xóa bỏ mesh gradients và glassmorphism nhân tạo; bổ sung các class tiện ích chuẩn cho brand palette Toplinks và taste micro-interactions.
3. **`index.html`**: Trang chủ - Tái cấu trúc Hero Section sang trọng với ảnh lãnh đạo/doanh nghiệp thực tế, thanh social proof đối tác cao cấp, Bento Grid giải pháp cốt lõi tông `#153e4d` và điểm nhấn `#fbee41`, quy trình Co-Creation 4 bước, lời chứng thực khách hàng thực tế và Footer chuẩn mực với địa chỉ 152 Võ Văn Kiệt.
4. **`about.html`**: Về Toplinks - Triết lý Co-Creation, sứ mệnh, 5 giá trị cốt lõi, đội ngũ chuyên gia với hình ảnh chân dung thực tế, loại bỏ gradient màu mè.
5. **`solutions.html`**: Giải pháp doanh nghiệp B2B - Thẻ dịch vụ gọn gàng, so sánh ROI/tác động minh bạch, bảng biểu rõ ràng.
6. **`training.html`**: Đào tạo & Coaching - Khung năng lực AI (HRAI), Leadership, Management, giao diện lọc khóa học tinh tế, dứt khoát.
7. **`tools.html`**: Bộ công cụ trắc nghiệm & khảo sát (MBTI, DISC, STVT) - Widget trắc nghiệm trực quan, kết quả rõ ràng, phối màu chuyên nghiệp.
8. **`contact.html`**: Trang liên hệ & tư vấn - Form liên hệ sắc nét, trường thông tin rõ ràng, focus ring chuẩn WCAG, sơ đồ địa chỉ và hotline.
9. **Tests Verification**: Đảm bảo tất cả 8 bộ test kiểm thử trong thư mục `tests/` đều chạy thành công (`verify-index.js`, `verify-about.js`, `verify-solutions.js`, `verify-training.js`, `verify-tools.js`, `verify-contact.js`, `verify-assets.js`, `verify-all-links.js`).
