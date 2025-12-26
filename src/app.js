import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import articleRoutes from './routes/articleRoutes.js';

dotenv.config();

const app = express();

// 中间件
app.use(cors()); // 启用跨域
app.use(express.json()); // 解析JSON格式的请求体
app.use(express.urlencoded({ extended: true })); // 解析URL编码的请求体

// 基本路由
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Blog API' });
});

// API路由
app.use('/api/articles', articleRoutes);

// 404处理
app.use('*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// 全局错误处理中间件（需在最后）
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;