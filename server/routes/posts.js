import express from 'express';

import { getPosts, 
         getPost, 
         getLatestPosts, 
         getRecommendationPosts, 
         //getSpcRecommendationPosts, 
         createPost, 
         updatePost, 
         deletePost, 
         getPostsAdmin } from '../controllers/posts.js';


const router = express.Router();

import auth from "../middleware/auth.js";

router.get('/catalogo/search', getPosts);
router.get('/catalogo/:id', getPost);
router.get('/', getLatestPosts);
router.get('/recommendations', getRecommendationPosts);
//router.get('/catalogo/:id', getSpcRecommendationPosts);

router.get('/admin/posts', getPostsAdmin);
router.post('/admin/', createPost);
router.patch('/admin/:id', updatePost);
router.delete('/admin/:id', deletePost);
//router.post('/', auth, createPost);
//router.get('/admin/posts', auth, getPostsAdmin);
//router.patch('/:id', auth, updatePost);
//router.delete('/:id', auth, deletePost);

export default router;