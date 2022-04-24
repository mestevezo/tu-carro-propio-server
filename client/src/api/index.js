import axios from 'axios';

const url = 'http://localhost:5000/posts/Catalogo';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = (page) => API.get(`/posts/Catalogo?page=${page}`)

export const fetchPost = (id) => API.get(`/posts/Catalogo/${id}`);

export const fetchPostsByCategory = () => API.get(`/posts/Catalogo/`);

