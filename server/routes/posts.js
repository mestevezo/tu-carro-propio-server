import express from 'express';

import { getPosts, getPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/Catalogo', getPosts);
router.get('/Catalogo/:id', getPost);

export default router;