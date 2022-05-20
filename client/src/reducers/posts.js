import { FETCH_ALL, FETCH_BY, FETCH_POST, START_LOADING, END_LOADING , FETCH_LATEST} from '../constants/actionTypes';

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
        filters: action.payload.filters
      };
    case FETCH_BY:
      return { ...state, posts: action.payload, filter: action.payload.filter }
    case FETCH_POST:
      return { ...state, post: action.payload.post }
      case FETCH_LATEST:
        return {...state, latestPosts: action.payload};
    default:
      return state;
  }
};

export default reducer;