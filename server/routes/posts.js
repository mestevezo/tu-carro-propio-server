import express from 'express';

import { getPostsByCategory, getPosts, getPost, getLatestPosts, getRecommendationPosts } from '../controllers/posts.js';


const router = express.Router();

router.get('/catalogo', getPosts);

router.get('/catalogo/search', getPostsByCategory);

router.get('/catalogo/:id', getPost);

router.get('/', getLatestPosts);

router.get('/recommendations', getRecommendationPosts);

export default router;