import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_POST, FETCH_LATEST, FETCH_RECOMMENDATION} from '../constants/actionTypes';

const reducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return { ...state, posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
                };
    case FETCH_POST:
      return { ...state, post: action.payload.post, recposts:[] }
    case FETCH_LATEST:
      return { ...state, lasposts: action.payload.data.posts};
    case FETCH_RECOMMENDATION:
      return { ...state, recposts: action.payload.data.posts};
    default:
      return state;
  }
};

export default reducer;