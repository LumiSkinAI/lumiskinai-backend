const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Sử dụng CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL, // URL của client
    methods: ["GET", "POST", "PUT", "DELETE"], // Các phương thức được phép
  })
);

// Middleware cho CRUD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint chính
app.use("/", (req, res) => {
  return res.send("SERVER ON"); // Phản hồi khi truy cập vào '/'
});

// Khởi tạo PORT
const PORT = process.env.PORT || 8888;

// Lắng nghe tại port
const listener = app.listen(PORT, () => {
  console.log("Server is running on the port " + listener.address().port);
});
