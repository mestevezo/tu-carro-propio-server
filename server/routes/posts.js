import express from 'express';

import { getPosts, 
         getPost, 
         getLatestPosts, 
         getRecommendationPosts, 
         //getSpcRecommendationPosts, 
         createPost, 
         updatePost, 
         deletePost } from '../controllers/posts.js';


const router = express.Router();

import auth from "../middleware/auth.js";

router.get('/catalogo/search', getPosts);
router.get('/catalogo/:id', getPost);
router.get('/', getLatestPosts);
router.get('/recommendations', getRecommendationPosts);
//router.get('/catalogo/:id', getSpcRecommendationPosts);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;