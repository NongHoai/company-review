# Website Đánh giá Công ty Ẩn danh

Một trang web đơn giản để review công ty ẩn danh. Dự án này được xây dựng nhằm mục đích học tập và chia sẻ với cộng đồng mã nguồn mở.

## ✨ Tính năng

- Xem danh sách các công ty đã được đánh giá.
- Xem chi tiết và điểm trung bình của từng công ty.
- Gửi đánh giá mới cho một công ty (có thể gửi ẩn danh).

## 🚀 Hướng dẫn cài đặt

1.  **Clone repository:**

    ```bash
    git clone [https://github.com/TEN_CUA_BAN/company-review.git](https://github.com/TEN_CUA_BAN/company-review.git)
    ```

2.  **Cài đặt các gói cần thiết:**

    ```bash
    npm install
    ```

3.  **Cấu hình biến môi trường:**
    Tạo một file `.env` ở thư mục gốc và thêm vào chuỗi kết nối MongoDB của bạn.

    ```
    MONGODB_URI="your_mongodb_connection_string"
    ```

4.  **Khởi động server:**
    `bash
npm run dev
`
    Website sẽ chạy tại `http://localhost:3000`.

## 🛠️ Công nghệ sử dụng

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (với Mongoose)
- **Frontend:** EJS (Embedded JavaScript templates)
