import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/Cars.js';
import dotenv from 'dotenv';

const router = express.Router();


import ImageKit from "imagekit";
//var fs = require('fs');






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

export const createPost = async (req, res) => {

  const { brand, model, version, type, year, km, price, transmission, fuel, t4x4, armor, addInfo,
      mainImg, othersImg, motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details } = req.body;

  var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
  });
    
    var base64Img = "iVBORw0KGgoAAAAN";
    
    imagekit.upload({
        file : base64Img, //required
        fileName : "my_file_name.jpg",   //required
        folder: "test"
    }, function(error, result) {
        if(error) console.log(error);
        else console.log(result);
    });


  const newPostMessage = new PostMessage({ brand, model, version, type, year, km, price, transmission, fuel, t4x4, armor, addInfo,
      mainImg, othersImg, motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details })

  try {
      await newPostMessage.save();

      res.status(201).json(newPostMessage);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const{ brand, model, version, type, year, km, price, transmission, fuel, t4x4, armor, addInfo,
      mainImg, othersImg, motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { brand, model, version, type, year, km, price, transmission, fuel,  t4x4,
      armor, addInfo, mainImg, othersImg, _id: id , motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
}

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}

export const getPostsAdmin = async (req, res) => { 

  try {
      //const postMessages = await PostMessage.find().select("-mainImg -othersImg");
      //const postMessages = await PostMessage.find("-othersImg");
      const postMessages = await PostMessage.find().select("-othersImg");
      res.status(200).json(postMessages);

  } catch (error) {
      res.status(404).json({ message: error.message });
  }
  
}


export default router;