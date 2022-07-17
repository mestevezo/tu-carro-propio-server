import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
//const API = axios.create({ baseURL: 'https://tu-carro-propio-server-production.up.railway.app' });

export const fetchPost = (id) => API.get(`/catalogo/${id}`);
export const fetchPosts = (query) => API.get(`/catalogo/search?${query}`);
export const fetchLatestPost = () => API.get(`/`);
export const fetchRecommendationPosts = (query) => API.get(`/recommendations?${query}`);
export const fetchSpcRecommendationPosts = (id) => API.get(`/catalogo/${id}`);