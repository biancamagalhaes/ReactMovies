import { InitialState as moviesInitial } from "./movies";

export interface RootState {
  router: any;
  movies: moviesInitial;
}
