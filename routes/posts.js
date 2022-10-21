import express from "express";

import {
  getPosts,
  getPost,
  getLatestPosts,
  getRecommendationPosts,
  //getSpcRecommendationPosts,
  createPost,
  updatePost,
  deletePost,
  getPostsAdmin,
} from "../controllers/posts.js";

const router = express.Router();

import auth from "../middleware/auth.js";

router.get("/catalogo/search", getPosts);
router.get("/catalogo/:id", getPost);
router.get("/", getLatestPosts);
router.get("/recommendations", getRecommendationPosts);
//router.get('/catalogo/:id', getSpcRecommendationPosts);

router.get("/admin/posts", getPostsAdmin);
router.post("/admin/", createPost);
router.patch("/admin/:id", updatePost);
router.delete("/admin/:id", deletePost);
//router.get('/admin/posts', auth, getPostsAdmin);
//router.post('/admin/', auth, createPost);
//router.patch('/admin/:id', auth, updatePost);
//router.delete('/admin/:id', auth, deletePost);

export default router;
