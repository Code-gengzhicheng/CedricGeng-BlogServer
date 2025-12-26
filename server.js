import app from './src/app.js';
import connectDB from './src/config/db.js';

const PORT = process.env.PORT || 3000;

// 连接数据库，成功后启动服务器
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});