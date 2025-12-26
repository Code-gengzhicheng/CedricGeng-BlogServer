import Article from '../models/Article.js';

// 获取所有文章列表
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 }); // 按创建时间倒序
    res.status(200).json({ success: true, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 创建新文章
export const createArticle = async (req, res) => {
  const { title, content, summary, tags } = req.body;
  try {
    const newArticle = new Article({ title, content, summary, tags });
    await newArticle.save();
    res.status(201).json({ success: true, data: newArticle });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 其他控制器函数：getArticleById, updateArticle, deleteArticle...