const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sql, poolPromise } = require('./dbConfig'); // Import cấu hình kết nối

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint để lấy dữ liệu từ SQL Server
app.get('/api/data', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM your_table'); // Thay thế 'your_table' bằng tên bảng của bạn
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});