import express from 'express';

import {getPostsByCategory, getPosts , getPost} from '../controllers/posts.js';

const router = express.Router();

router.get('/Catalogo', getPosts);

//router.get('/Catalogo/:id', getPost);

router.get('/Catalogo', getPostsByCategory);

router.get('/Catalogo/:id', getPost);
//router.get('/:id', getPost);



export default router;