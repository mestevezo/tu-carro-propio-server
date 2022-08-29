import axios from 'axios';

//const url = 'http://localhost:5000/posts/inventario';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

// export const fetchPosts = () => axios.get(url);
export const fetchPosts = () => API.get('/admin/posts/');
export const createPost = (newPost) => API.post('/admin/', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/admin/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/admin/${id}`);
//export const createPost = (newPost) => axios.post(url, newPost);
//export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const signIn = (formData) => API.post('/admin/signin', formData);
export const signUp = (formData) => API.post('/admin/signup', formData);