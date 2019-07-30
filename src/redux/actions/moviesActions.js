import {
  FETCH_POPULAR_SUCSESS,
  FETCH_TRENDING_SUCSESS,
  FETCH_NOWPLAYING_SUCSESS
} from "./types";

export const fetchPopularSucsess = response => ({
  type: FETCH_POPULAR_SUCSESS,
  payload: response
});

export const fetchPopular = () => {
  return async dispatch => {
    try {
      let res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=3f3667e5e01a1fb0634517c27ebbdb9e&language=en-US&page=1"
      );
      let response = await res.json();
      dispatch(fetchPopularSucsess(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTrendingSucsess = response => ({
  type: FETCH_TRENDING_SUCSESS,
  payload: response
});

export const fetchTrending = () => {
  return async dispatch => {
    try {
      let res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=3f3667e5e01a1fb0634517c27ebbdb9e"
      );
      let response = await res.json();
      dispatch(fetchTrendingSucsess(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchNowPlayingSucsess = response => ({
  type: FETCH_NOWPLAYING_SUCSESS,
  payload: response
});

export const fetchNowPlaying = () => {
  return async dispatch => {
    try {
      let res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3f3667e5e01a1fb0634517c27ebbdb9e&language=en-US&page=1"
      );
      let response = await res.json();
      dispatch(fetchNowPlayingSucsess(response));
    } catch (error) {
      console.log(error);
    }
  };
};
