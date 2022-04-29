import express from 'express';

import { getPostsByCategory, getPosts, getPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/catalogo', getPosts);

router.get('/catalogo/search', getPostsByCategory);

router.get('/catalogo/:id', getPost);
//router.get('/:id', getPost);



export default router;