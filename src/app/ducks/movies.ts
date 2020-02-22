import { hen, Hen } from "app/utility/createReducer";
import { createSelector } from "reselect";
import { RootState } from "ducks";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { url, key } from "../config";

export type Movie = {
  posterPath: string;
  popularity: number;
  voteCount: number;
  video: any;
  media_type: string;
  id: number;
  adult: boolean;
  backdropPath: string;
  originLanguage: string;
  originalTitle: string;
  genreIds: Array<number>;
  title: string;
  voteAverage: number;
  overview: string;
  releaseDate: string;
};

export interface MovieState {
  movie: Movie;
  movies: Array<Movie>;
  loading: boolean;
  totalResults: number;
  trailerKey: string;
  genres: Array<any>;
}

export type InitialState = MovieState;

const initialState: InitialState = {
  movie: {
    posterPath: "",
    popularity: 0,
    voteCount: 0,
    video: false,
    media_type: "",
    id: 0,
    adult: false,
    backdropPath: "",
    originLanguage: "",
    originalTitle: "",
    genreIds: [],
    title: "",
    voteAverage: 0,
    overview: "",
    releaseDate: ""
  },
  totalResults: 0,
  movies: [],
  genres: [],
  trailerKey: "",
  loading: false
};

const mainSelector = (state: RootState) => state.movies;

export const getMovies = createSelector(mainSelector, state => {
  return {
    loading: state.loading,
    movies: state.movies,
    movie: state.movie,
    genres: state.genres,
    totalResults: state.totalResults,
    trailerKey: state.trailerKey
  };
});

class EditorReactions extends Hen<InitialState> {
  setLoading(a: boolean) {
    this.state.loading = a;
  }

  listMovies(movies: Array<Movie>) {
    this.state.movies = movies;
  }

  searchedMovies(movies: Array<Movie>) {
    this.state.movies = movies;
  }

  totalResults(total: number) {
    this.state.totalResults = total;
  }

  listGenres(genres: Array<any>) {
    this.state.genres = genres.reduce(function(total, current) {
      total[current.id] = current.name;
      return total;
    }, {});
  }

  getMovie(movie: Movie) {
    this.state.movie = movie;
  }

  getTrailerKey(key: string) {
    this.state.trailerKey = key;
  }

  clearMovies() {
    this.state.movies = [];
  }
}

//Reducers
export const [menuReducer, actions] = hen(new EditorReactions(initialState));
export default menuReducer;

export function fetchListMovies(
  page: number
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(`${url}/3/list/${page}?api_key=${key}&language=pt-BR`)
      .then((r: any) => {
        dispatch(actions.listMovies(r.data.results));
        dispatch(actions.totalResults(r.data.total_results));
        dispatch(actions.setLoading(false));
      })
      .catch(e => {
        dispatch(actions.setLoading(false));
      });
  };
}

export function SearchMovies(
  keyword: string
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.clearMovies());
    return axios
      .get(
        `${url}/3/search/movie/?api_key=${key}&language=pt-BR&query=${keyword}`
      )
      .then((r: any) => {
        dispatch(actions.searchedMovies(r.data.results));
        dispatch(actions.totalResults(r.data.total_results));
        dispatch(actions.setLoading(false));
      })
      .catch(e => {
        dispatch(actions.setLoading(false));
      });
  };
}

export function fetchListGenres(): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.clearMovies());
    return axios
      .get(`${url}/3/genre/movie/list?api_key=${key}&language=pt-BR`)
      .then((r: any) => {
        dispatch(actions.listGenres(r.data.genres));
        dispatch(actions.setLoading(false));
      })
      .catch(e => {
        dispatch(actions.setLoading(false));
      });
  };
}

export function fetchMovie(
  movieID: string
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.clearMovies());
    return axios
      .get(`${url}/3/movie/${movieID}?api_key=${key}&language=pt-BR`)
      .then((r: any) => {
        dispatch(actions.getMovie(r.data));
        dispatch(actions.setLoading(false));
      })
      .catch(e => {
        dispatch(actions.setLoading(false));
      });
  };
}

export function fetchTrailer(
  movieID: string
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.clearMovies());
    return axios
      .get(`${url}/3/movie/${movieID}/videos?api_key=${key}&language=pt-BR`)
      .then((r: any) => {
        dispatch(actions.getTrailerKey(r.data.results[0].key));
        dispatch(actions.setLoading(false));
      })
      .catch(e => {
        dispatch(actions.setLoading(false));
      });
  };
}
