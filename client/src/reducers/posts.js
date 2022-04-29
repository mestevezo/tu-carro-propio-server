import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY, FETCH_POST, START_LOADING, END_LOADING } from '../constants/actionTypes';

const reducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY:
      return { ...state, posts: action.payload, filter: action.payload.filter }
    case FETCH_POST:
      return { ...state, post: action.payload.post }
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default reducer;