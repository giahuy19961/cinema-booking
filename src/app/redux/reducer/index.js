import { combineReducers } from "redux";
import listMovieReducer from "./listMovie";
import listShowTimeMovieReducer from "./listShowTimeMovie";
import listTheatersReducer from "./listTheaters";
import listCinemaByIdReducer from "./listCinema";
import listShowByTheaterReducer from "./listShowByTheater";
import trailerReducer from "./trailer";

export const rootReducer = combineReducers({
  listMovieReducer,
  listShowTimeMovieReducer,
  listCinemaByIdReducer,
  listShowByTheaterReducer,
  listTheatersReducer,
  trailerReducer,
});
