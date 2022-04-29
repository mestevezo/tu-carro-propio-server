import axios from 'axios';

const url = 'http://localhost:5000/posts/catalogo';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = (page) => API.get(`/posts/catalogo?page=${page}`)

export const fetchPost = (id) => API.get(`/posts/catalogo/${id}`);


//export const fetchPostsByCategory = (key,value,page) => API.get(`/posts/catalogo/search?page=${page}&${key}=${value || ''}`);

export const fetchPostsByCategory = (filters, page, test, sort) => API.get(`/posts/catalogo/search?page=${page}&${test}`);
