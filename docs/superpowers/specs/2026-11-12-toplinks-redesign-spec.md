# TOPLINKS Redesign Specification

## 1. Overview & Purpose
TOPLINKS (toplinks.vn) là đơn vị tư vấn doanh nghiệp, đào tạo năng lực lãnh đạo/quản lý/AI, giải pháp nhân sự và các công cụ thẩm định đánh giá năng lực tại Việt Nam, mang slogan và triết lý cốt lõi: **"CO-CREATION FOR SUCCESS" (Hiệp lực kiến tạo để thành công)**.

Mục tiêu của dự án là xây dựng lại toàn bộ giao diện website dưới dạng Multi-Page Web Application hiện đại, chuyên nghiệp, chuẩn mực quốc tế, áp dụng hệ thống thiết kế và UX rules từ **`ui-ux-pro-max-skill`** (Design System: Trust & Authority + Conversion).

## 2. Design System Tokens (Theo ui-ux-pro-max-skill)
- **Palette**:
  - Primary (Deep Slate/Navy): `#0F172A`
  - Secondary: `#334155`
  - Accent / CTA: `#0369A1` (Hover: `#0284C7`)
  - Background: `#F8FAFC`
  - Card: `#FFFFFF`
  - Text: `#020617` (Body text contrast >= 4.5:1)
  - Muted: `#64748B` / `#94A3B8`
  - Border: `#E2E8F0`
- **Typography**:
  - Headings: `Poppins`, sans-serif (700, 600, 500)
  - Body: `Plus Jakarta Sans`, sans-serif (400, 500, 600)
- **Icons**:
  - Lucide Icons (SVG inline / Lucide web script) - Không sử dụng emoji làm icon giao diện.
- **Micro-Interactions**:
  - Transitions 200ms ease-in-out.
  - Hover lift subtle shadows (`hover:-translate-y-1 hover:shadow-xl`).
  - Active focus states (`focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:outline-none`).

## 3. Site Architecture & Pages
1. **`index.html` (Trang chủ)**
   - Navigation Bar (Sticky, logo, mega dropdown links, CTA "Đăng ký tư vấn", mobile drawer).
   - Hero Section: Slogan "Hiệp lực kiến tạo để thành công", sub-headline định vị, badges uy tín (+100 Doanh nghiệp, 98% Hài lòng, 15+ Năm kinh nghiệm), CTA kép.
   - Social Proof Bar: Logo các đối tác và thương hiệu doanh nghiệp tiêu biểu.
   - Core Solutions Bento Grid: 4 mảng chính (Tư vấn doanh nghiệp, Dịch vụ Đào tạo, Giải pháp Nhân sự & KPI, Coaching & Assessment).
   - Co-Creation Methodology: Quy trình 4 bước chuẩn hóa (1. Chẩn đoán & Thấu cảm -> 2. Đồng kiến tạo giải pháp -> 3. Triển khai & Chuyển giao -> 4. Đo lường & Tối ưu hóa).
   - Featured Programs: Khóa học AI Competency Framework, Đào tạo năng lực quản lý/lãnh đạo.
   - Testimonials: Lời chứng thực từ các CEO / Giám đốc Nhân sự (CHRO).
   - Bottom CTA Banner & Footer toàn diện.

2. **`about.html` (Về Toplinks)**
   - Triết lý Co-Creation: Tại sao giải pháp áp đặt sẵn luôn thất bại, và vì sao sự hiệp lực là chìa khóa.
   - Tầm nhìn, Sứ mệnh & 5 Giá trị cốt lõi (Tận tâm - Đột phá - Đồng hành - Minh bạch - Bền vững).
   - Đội ngũ Chuyên gia cố vấn (Profiles chuyên gia tư vấn chiến lược, Master Coach, Chuyên gia Nhân sự & Quản trị).
   - Năng lực và Cam kết đồng hành cùng doanh nghiệp.

3. **`solutions.html` (Giải pháp Doanh nghiệp B2B)**
   - Tư vấn Doanh nghiệp & Chiến lược tăng trưởng.
   - Xây dựng hệ thống Quản trị & Đo lường hiệu suất (KPI, OKR).
   - Dịch vụ Nhân sự toàn diện (HR Audit, Tái cấu trúc tổ chức, Headhunting).
   - Văn hóa doanh nghiệp & Tối ưu hóa quy trình vận hành.
   - Interactive ROI / Impact Metrics: Bảng so sánh trước và sau khi triển khai giải pháp.

4. **`training.html` (Đào tạo & Coaching)**
   - AI Competency Framework: Làm chủ AI & Ứng dụng trí tuệ nhân tạo trong vận hành doanh nghiệp.
   - Đào tạo Lãnh đạo & Quản lý cấp trung (Leadership & Management Excellence).
   - Đào tạo Chuyên môn Nhân sự (HR Masterclass) & Khởi nghiệp.
   - Dịch vụ Huấn luyện cá nhân (Career & Executive Coaching 1:1).
   - Course Finder / Filter tương tác: Lọc theo đối tượng (Lãnh đạo, Quản lý, Chuyên viên).

5. **`tools.html` (Bộ công cụ đánh giá & Khảo sát)**
   - Sinh trắc vân tay (STVT) - Nền tảng khoa học & Ứng dụng quản trị nhân sự.
   - Trắc nghiệm tính cách MBTI & Mô hình hành vi DISC.
   - Thần số học ứng dụng & Bản đồ năng lực lãnh đạo.
   - **Interactive Quick Assessment Widget**: Mini-quiz trực quan cho phép người dùng trải nghiệm đánh giá nhanh phong cách làm việc & nhận kết quả ngay tức thì.

6. **`contact.html` (Liên hệ & Tư vấn)**
   - Form tư vấn thông minh phân tầng nhu cầu (Tư vấn doanh nghiệp, Đào tạo nội bộ, Coaching 1:1, Đánh giá nhân sự).
   - Thông tin liên hệ chính thức, Hotline, Email, Địa chỉ văn phòng.
   - FAQ (Câu hỏi thường gặp về quy trình triển khai và báo giá).
   - Toast notification feedback khi gửi form.

## 4. Shared Assets & Components
- `assets/css/style.css`: Custom utility classes, typography, animations, scrollbars.
- `assets/js/main.js`: Mobile menu toggle, sticky nav scroll effects, assessment widget logic, dynamic year, FAQ accordion, contact form feedback.
- Clean semantic HTML5, fully responsive (Mobile, Tablet, Desktop).
