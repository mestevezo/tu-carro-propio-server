import express from 'express';

import { getPosts, getPost, getLatestPosts, getRecommendationPosts, getSpcRecommendationPosts } from '../controllers/posts.js';


const router = express.Router();

router.get('/catalogo/search', getPosts);

//router.get('/catalogo/:id', getPost);

router.get('/catalogo/:id', getSpcRecommendationPosts);

router.get('/', getLatestPosts);

//router.get('/recommendations', getRecommendationPosts);

export default router;