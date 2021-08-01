import { combineReducers } from "redux";
import listMovieReducer from "./listMovie";
import listShowTimeMovieReducer from "./listShowTimeMovie";
import listTheatersReducer from "./listTheaters";
import listCinemaByIdReducer from "./listCinema";
import listShowByTheaterReducer from "./listShowByTheater";
import listShowMovieReducer from "./listShowMovie";
import userLoginReducer from "./userLogin";
import trailerReducer from "./trailer";
import getTicketReducer from "./ticket";
import userInfoReducer from "./userInfo";
import editUserReducer from "./editUserInfo";

export const rootReducer = combineReducers({
  listMovieReducer,
  listShowTimeMovieReducer,
  listCinemaByIdReducer,
  listShowByTheaterReducer,
  listTheatersReducer,
  listShowMovieReducer,
  trailerReducer,
  userLoginReducer,
  getTicketReducer,
  userInfoReducer,
  editUserReducer,
});
