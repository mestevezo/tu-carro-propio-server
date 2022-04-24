import express from 'express';

import PostMessage from '../models/Cars.js';

const router = express.Router();

export const getPosts = async (req, res) => {
  const {page} = req.query;

        
    try {
        const LIMIT = 4;
        const startIndex = (Number(page) - 1) * LIMIT;  
        const total = await PostMessage.countDocuments({});

        //console.log( Math.ceil(total / LIMIT))
        
        const posts = await PostMessage.find().sort({_id:-1}).limit(LIMIT).skip(startIndex);
        //console.log(posts);
        

        res.status(200).json({data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getPostsByCategory = async (req, res) => {
  
  const categoryQuery = req.query

  try {
  
    const category = await PostMessage.find();

   
    res.json({data: category});

  } catch (error) {
    res.status(404).json({ message: error.message });
    }

  

}


export const getPost = async (req, res) => {
    const { id } = req.params;
    

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;