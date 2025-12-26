import express from 'express';
import {
  getArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} from '../controllers/articleController.js';

const router = express.Router();

router.route('/')
  .get(getArticles)      // GET /api/articles
  .post(createArticle);  // POST /api/articles

router.route('/:id')
  .get(getArticleById)   // GET /api/articles/:id
  .put(updateArticle)    // PUT /api/articles/:id
  .delete(deleteArticle);// DELETE /api/articles/:id

export default router;