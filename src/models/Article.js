import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    trim: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  isPublished: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
  },
}, {
  timestamps: true, // 自动添加 createdAt 和 updatedAt 字段
});

const Article = mongoose.model('Article', articleSchema);
export default Article;