// server.js
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// --- Cấu hình EJS & public ---
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// --- Kết nối MongoDB ---
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch((err) => console.error("❌ Lỗi kết nối MongoDB:", err));

// --- Tạo Schema & Model ---
const reviewSchema = new mongoose.Schema({
  company: String,
  reviewer: String,
  rating: Number,
  comment: String,
});

const Review = mongoose.model("Review", reviewSchema);

// --- Trang chủ ---
app.get("/", async (req, res) => {
  const reviews = await Review.find();
  const companies = [...new Set(reviews.map((r) => r.company))]; // danh sách công ty duy nhất
  res.render("index", { reviews, companies });
});

// --- Trang thêm đánh giá ---
app.post("/add-review", async (req, res) => {
  try {
    const { company, reviewer, rating, comment } = req.body;

    if (!company || !rating || !comment) {
      return res.status(400).send("Vui lòng nhập đầy đủ thông tin!");
    }

    await Review.create({
      company,
      reviewer,
      rating,
      comment,
    });

    res.redirect("/");
  } catch (error) {
    console.error("❌ Lỗi khi thêm đánh giá:", error);
    res.status(500).send("Lỗi server!");
  }
});

// --- Trang xem đánh giá theo công ty ---
app.get("/company/:name", async (req, res) => {
  const companyName = req.params.name;
  const reviews = await Review.find({ company: companyName });
  res.render("company", { company: companyName, reviews });
});

// --- Khởi động server ---
app.listen(3000, () => {
  console.log("🚀 Server đang chạy tại http://localhost:3000");
});
