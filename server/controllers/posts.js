import express from 'express';
import PostMessage from '../models/Cars.js';


const router = express.Router();


export const getPosts = async (req, res) => {

  const SORT_CASES = {
    'id': '-_id',
    'reciente': '-createdAt',
    'descendente': '-price',
    'ascendente': 'price'
  }

  try {

    const LIMIT = 8;
    let query = { ...req.query };
    let filters = { ...req.query };
    const { sort } = query || 'id';
    const { page } = query || 1;
    delete query.page;
    delete query.sort;
    const startIndex = (Number(page) - 1) * LIMIT;

    if (query.hasOwnProperty('minPrice') && query.hasOwnProperty('maxPrice')) {

      const minPrice = Number(query.minPrice);
      const maxPrice = Number(query.maxPrice);
      delete query.minPrice;
      delete query.maxPrice;
      query = { $and: [query, { $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] }] };

    }

    const count = await PostMessage.countDocuments(query);
    const posts = await PostMessage.find(query).select('-othersImg').sort(SORT_CASES[sort]).skip(startIndex).limit(LIMIT);
    res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(count / LIMIT), filters });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}


export const getPost = async (req, res) => {

  try {

    const { id } = req.params;
    const post = await PostMessage.findById(id);
    res.status(200).json(post);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}


export const getLatestPosts = async (req, res) => {

  try {

    const LIMIT = 3;
    const posts = await PostMessage.find().select('-othersImg').sort('-createdAt').limit(LIMIT);
    res.status(200).json({ posts });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}


export const getRecommendationPosts = async (req, res) => {

  try {

    const LIMIT = 3;
    let query = { ...req.query };
    const reqId = query.id;
    delete query.id;
    query = { $and: [query, { _id: { $ne: reqId } }] };

    const initialReq = await PostMessage.countDocuments(query);
    let posts = await PostMessage.find(query).select('-othersImg -addInfo').sort('-createdAt').limit(LIMIT);
    if (initialReq >= LIMIT) {
      res.status(200).json({ posts });
    } else {
      let reqIdList = [reqId];
      if (initialReq > 0) {
        for (let i in posts) {
          reqIdList.push(posts[i]._id);
        }
      }
      const latestPosts = await PostMessage.find({ _id: { $nin: reqIdList } }).select('-othersImg -addInfo').sort('-createdAt').limit(LIMIT - initialReq);
      posts = posts.concat(latestPosts);
      res.status(200).json({ posts });
    }

  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}


export const getSpcRecommendationPosts = async (req, res) => {

  try {

    const { id } = req.params;
    const post = await PostMessage.findById(id);

    const LIMIT = 3;
    const reqId = post._id;
    let query = { $and: [{ brand: post.brand }, { _id: { $ne: reqId } }] };

    const initialReq = await PostMessage.countDocuments(query);
    let posts = await PostMessage.find(query).select('-othersImg').sort('-createdAt').limit(LIMIT);
    if (initialReq < LIMIT) {
      let reqIdList = [reqId];
      if (initialReq > 0) {
        for (let i in posts) {
          reqIdList.push(posts[i]._id);
        }
      }
      const latestPosts = await PostMessage.find({ _id: { $nin: reqIdList } }).select('-othersImg').sort('-createdAt').limit(LIMIT - initialReq);
      posts = posts.concat(latestPosts);
    }
    posts = [post].concat(posts);
    res.status(200).json({ posts });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}


export default router;