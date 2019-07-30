import {
  FETCH_POPULAR_SUCSESS,
  FETCH_TRENDING_SUCSESS,
  FETCH_NOWPLAYING_SUCSESS
} from "../actions/types";

const initialState = {
  popular: [],
  trending: [],
  nowplaying: []
};

export default (moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_SUCSESS:
      return { ...state, popular: action.payload };
    case FETCH_TRENDING_SUCSESS:
      return { ...state, trending: action.payload };
    case FETCH_NOWPLAYING_SUCSESS:
      return { ...state, nowplaying: action.payload };
    default:
      return state;
  }
});
