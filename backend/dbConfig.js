const sql = require('mssql');

const dbConfig = {
  user: 'your_username', // Thay thế bằng tên người dùng của bạn
  password: 'your_password', // Thay thế bằng mật khẩu của bạn
  server: 'your_server', // Thay thế bằng tên máy chủ của bạn, ví dụ: 'localhost'
  database: 'your_database', // Thay thế bằng tên cơ sở dữ liệu của bạn
  options: {
    encrypt: true, // Sử dụng mã hóa nếu cần thiết
    enableArithAbort: true // Cấu hình bổ sung để xử lý các phép toán số học
  }
};

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('Database Connection Failed! Bad Config: ', err);
    process.exit(1);
  });

module.exports = {
  sql, poolPromise
};