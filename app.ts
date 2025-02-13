import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { request } from "http";
import userRouter from "./src/routes/user.routes";
dotenv.config();


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
app.use("/", userRouter);

// Khởi tạo PORT
const PORT = process.env.PORT || 8888;

// Lắng nghe tại port
const listener = app.listen(PORT, () => {
 const address = listener.address();
 if (address && typeof address !== "string") {
   console.log(`Server running at http://localhost:${address.port}`);
 } else {
   console.log("Server started but address information is not available.");
 }
});
