import axios from 'axios';

const url = 'http://localhost:5000/posts/Catalogo';

// const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = () => axios.get(url);
