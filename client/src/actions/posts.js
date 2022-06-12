import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_POST, FETCH_LATEST, FETCH_RECOMMENDATION } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const getPost = (id) => async (dispatch) => {

  try {

    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: { post: data } });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }

};


export const getPosts = (query) => async (dispatch) => {

  try {

    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(query);
    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }

};


export const getLatestPosts = () => async (dispatch) => {

  try {

    dispatch({ type: START_LOADING });
    const { data } = await api.fetchLatestPost();
    dispatch({ type: FETCH_LATEST, payload: { data } });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }

};


export const getRecommendationsPosts = (query) => async (dispatch) => {

  try {

    dispatch({ type: START_LOADING });
    const { data } = await api.fetchRecommendationPosts(query);
    dispatch({ type: FETCH_RECOMMENDATION, payload: { data } });
    dispatch({ type: END_LOADING });

  } catch (error) {
    console.log(error.message);
  }

};