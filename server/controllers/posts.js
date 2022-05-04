import express from 'express';



import PostMessage from '../models/Cars.js';


const router = express.Router();

export const getPosts = async (req, res) => {
  const { page } = req.query;


  try {
    const LIMIT = 4;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await PostMessage.countDocuments({});

    //console.log( Math.ceil(total / LIMIT))

    const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
    //console.log(posts);


    res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


export const getPostsByCategory = async (req, res) => {
  const filter = req.query

  const { sort } = req.query

  const { page } = req.query

  var arrayQuery = filter;

  delete arrayQuery.page
  delete arrayQuery.sort


  try {

    const LIMIT = 4;
    const startIndex = (Number(page) - 1) * LIMIT;



    if (arrayQuery.minPrice && arrayQuery.maxPrice !== '') {

      const minPrice = Number(arrayQuery.minPrice)
      const maxPrice = Number(arrayQuery.maxPrice)
      delete arrayQuery.minPrice
      delete arrayQuery.maxPrice



      const posts = await PostMessage.find({ $and: [arrayQuery, { $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }] }] }).limit(LIMIT).skip(startIndex);


      const total = await PostMessage.find(arrayQuery);




      res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total.length / LIMIT), filters: arrayQuery });

    } else {
      const posts = await PostMessage.find(arrayQuery).limit(LIMIT).skip(startIndex);

      const total = await PostMessage.find(arrayQuery);
      //console.log(posts)

      if (sort === 'reciente') {

        posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      }

      if (sort === 'descendente') {

        posts.sort((a, b) => b.price - a.price);

      }

      if (sort === 'ascendente') {

        posts.sort((a, b) => a.price - b.price);

      }

      res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total.length / LIMIT), filters: arrayQuery });

    }





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