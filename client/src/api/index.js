import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchPosts = (page) => API.get(`/posts/catalogo/search?page=${page}`)

export const fetchPost = (id) => API.get(`/posts/catalogo/${id}`);
export const fetchLatestPost = () => API.get(`/posts`);

//export const fetchPostsByCategory = (filters, page, test, sort) => API.get(`/posts/catalogo/search?page=${page}&test=${test}&brand=${filters.brand}`);
export const fetchPostsByCategory = (filters, page, test, sort) => API.get(`/posts/catalogo/search?page=${page}&${test}`);