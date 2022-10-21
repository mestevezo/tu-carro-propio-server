import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/Cars.js';
import dotenv from 'dotenv';

const router = express.Router();


import ImageKit from "imagekit";


export const getPosts = async (req, res) => {

  const SORT_CASES = {
    'reciente': '-createdAt',
    'descendente': '-price',
    'ascendente': 'price'
  }

  try {

    const LIMIT = 8;
    let query = { ...req.query };
    let filters = { ...req.query };
    const sort = query.sort || 'reciente';
    const page = query.page || 1;
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

  const { brand, model, version, type, year, km, price, transmission, fuel, t4x4, armor,
          motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details,
          folder, mainImgN, othersImgN, mainImgD, othersImgD } = req.body;

  try {

    var imagekit = new ImageKit({
      publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
    });
      
    let imgN = [mainImgN].concat(othersImgN)
    let imgD = [mainImgD].concat(othersImgD)
    var url = [];

    for (var i = 0; i < imgN.length; i++) {
      
      let info = { file : imgD[i], //required
                  fileName : imgN[i], //required
                  folder: process.env.IMAGEKIT_MAIN_FOLDER + folder }

      await imagekit.upload(info
      ).then(response => {
        url.push(response.url); 
      }).catch(error => {
          console.log(error);
      });
      
    };

    var mainImg = url[0];
    var othersImg = url.slice(1,);
      
    const newPostMessage = new PostMessage({ brand, model, version, type, year, km, price, transmission, fuel, t4x4, armor, folder,
        mainImg, othersImg, motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details })

    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}


export const updatePost = async (req, res) => {

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const { brand, model, version, type, year, km, price, transmission, fuel, t4x4, armor,
    motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details,
    folder, mainImgN, othersImgN, mainImgD, othersImgD } = req.body;

  try {

    var imagekit = new ImageKit({
      publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
    });
      
    let imgN = [mainImgN].concat(othersImgN)
    let imgD = [mainImgD].concat(othersImgD)
    var url = [];

    for (var i = 0; i < imgN.length; i++) {
      
      let info = { file : imgD[i], //required
                  fileName : imgN[i], //required
                  folder: process.env.IMAGEKIT_MAIN_FOLDER + folder }

      await imagekit.upload(info
      ).then(response => {
        url.push(response.url); 
      }).catch(error => {
          console.log(error);
      });
      
    };

    var mainImg = url[0];
    var othersImg = url.slice(1,);

    const updatedPost = { brand, model, version, type, year, km, price, transmission, fuel, t4x4, armor, folder,
          mainImg, othersImg, motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
    //res.status(201).json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

}

/*
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const{ brand, model, version, type, year, km, price, transmission, fuel, t4x4, armor, folder,
      mainImg, othersImg, motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { brand, model, version, type, year, km, price, transmission, fuel,  t4x4, armor, folder,
       mainImg, othersImg, _id: id , motor, owners, tapizado, location, power, accel, fuelConsumption, fuelCapacity, details };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
}
*/

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);

  //let folder = post.mainImg.split('/')[5]
  const { folder } = post;

  var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
  });

  imagekit.deleteFolder(process.env.IMAGEKIT_MAIN_FOLDER + folder).then(response => {
    //console.log(response);
  }).catch(error => {
    console.log(error);
  });

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