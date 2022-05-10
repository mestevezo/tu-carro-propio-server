import { FETCH_ALL, FETCH_POST, START_LOADING, END_LOADING } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);


    dispatch({ type: FETCH_POST, payload: { post: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsByCategory = (filters, page, test, sort) => async (dispatch) => {


  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchPostsByCategory(filters, page, test);
    //console.log(filters)

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages, filters } });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }
};


