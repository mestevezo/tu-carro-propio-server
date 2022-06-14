import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPost = (id) => API.get(`/posts/catalogo/${id}`);
export const fetchPosts = (query) => API.get(`/posts/catalogo/search?${query}`);
export const fetchLatestPost = () => API.get(`/posts`);
export const fetchRecommendationPosts = (query) => API.get(`/posts/recommendations?${query}`); 
export const fetchSpcRecommendationPosts = (id) => API.get(`/posts/catalogo/${id}`);