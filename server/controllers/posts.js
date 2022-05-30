import express from 'express';

import PostMessage from '../models/Cars.js';


const router = express.Router();

export const getPosts = async (req, res) => {
  
  const { page } = req.query;

  try {

    const LIMIT = 10;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await PostMessage.countDocuments({});
    const posts = await PostMessage.find().select('-othersImg').sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
    res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


export const getPostsByCategory = async (req, res) => {

  const SORT_CASES = {
    'id' : '-_id',
    'reciente' : '-createdAt',
    'descendente': '-price',
    'ascendente': 'price'
  }
  //console.log(req)
  const arrayQuery = req.query;
  const { sort } = req.query || 'id';
  const { page } = req.query
  delete arrayQuery.page;
  delete arrayQuery.sort;

  try {

    const LIMIT = 10;
    const startIndex = (Number(page) - 1) * LIMIT;
    let finalQuery = {...arrayQuery};

    if (arrayQuery.minPrice && arrayQuery.maxPrice !== '') {

      const minPrice = Number(finalQuery.minPrice);
      const maxPrice = Number(finalQuery.maxPrice);
      delete finalQuery.minPrice;
      delete finalQuery.maxPrice;
      finalQuery = { $and: [finalQuery, { $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] }] };   

    } 
    
    const total = await PostMessage.countDocuments(finalQuery);
    const posts = await PostMessage.find(finalQuery).select('-othersImg').limit(LIMIT).skip(startIndex).sort(SORT_CASES[sort]);
    res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT), filters: arrayQuery });

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


export const getLatestPosts = async (req, res) => {
  
  try {

    const LIMIT = 3;
    const latestPosts = await PostMessage.find().select('-othersImg').sort('-createdAt').limit(LIMIT);
    res.status(200).json({ latestPosts });
    
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


export const getRecommendationPosts = async (req, res) => {

  const arrayQuery = req.query;

  try {

    const LIMIT = 3;
    let reqId = req.query.id;
    delete arrayQuery.id;
    let finalQuery = { $and: [arrayQuery, { _id: { $ne: reqId } }, ] }; 

    const initialReq = await PostMessage.countDocuments(finalQuery);
    //let recPosts = await PostMessage.find(finalQuery).select('-othersImg -mainImg').limit(LIMIT).sort('-createdAt');
    let recPosts = await PostMessage.find(finalQuery).select('-othersImg').limit(LIMIT).sort('-createdAt');
    if (initialReq >= LIMIT) {
      res.status(200).json({ recPosts });
    } else {
      let reqIdList = [reqId];
      if (initialReq > 0) {
        for (let i in recPosts) {
          reqIdList.push(recPosts[i]._id);
        }
      }
      //const latestPosts = await PostMessage.find({ _id: { $nin: reqIdList } }).select('-othersImg -mainImg').limit(LIMIT - initialReq).sort('-createdAt');
      const latestPosts = await PostMessage.find({ _id: { $nin: reqIdList } }).select('-othersImg').limit(LIMIT - initialReq).sort('-createdAt');
      recPosts = recPosts.concat(latestPosts);
      res.status(200).json({ recPosts });
    }
    
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


export default router;