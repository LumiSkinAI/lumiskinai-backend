import mysql from "mysql2/promise";
 
// khởi tạo kết nối
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Địa chỉ máy chủ MySQL
  user: process.env.DB_PORT, // Tên người dùng
  password: process.env.DB_PASSWRD, // Mật khẩu
  database: process.env.DB_HOST, // Tên cơ sở dữ liệu
//   waitForConnections: true, // Chờ khi hết kết nối
// //   connectionLimit: 10, // Số kết nối tối đa
// //   queueLimit: 0,
});
export default pool;