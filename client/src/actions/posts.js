import { FETCH_ALL, FETCH_POST, START_LOADING, END_LOADING, FETCH_LATEST, FETCH_RECOMMENDATION } from '../constants/actionTypes';
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


export const getLatestPosts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchLatestPost();

    dispatch({ type: FETCH_LATEST, payload: { latestPosts: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const getRecommendationsPosts = (query) => async (dispatch) => {

  try {

    dispatch({ type: START_LOADING });
    const { data } = await api.fetchRecommendationPosts(query);
    dispatch({ type: FETCH_RECOMMENDATION, payload: { recPosts : data} });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }

};