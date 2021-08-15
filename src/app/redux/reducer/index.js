import { combineReducers } from "redux";
// Home Reducer
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
import userRegisterReducer from "./userRegister";
// Admin Reducer
import listUserPaginationReducer from "./Admin/listUserPagination";
import deleteUserReducer from "./Admin/deleteUser";
import addUserReducer from "./Admin/addUser";
import listMoviePaginationReducer from "./Admin/listMoviePagination";
import addMovieReducer from "./Admin/addMovie";
import deleteMovieReducer from "./Admin/deleteMovie";
import updateMovieReducer from "./Admin/updateMovie";
import uploadFileReducer from "./Admin/uploadFile";
import infoShowMovieReducer from "./Admin/infoShowMovie";
import listUserReducer from "./Admin/listUser";

export const rootReducer = combineReducers({
  listMovieReducer,
  listShowTimeMovieReducer,
  listCinemaByIdReducer,
  listShowByTheaterReducer,
  listTheatersReducer,
  listShowMovieReducer,
  trailerReducer,
  userLoginReducer,
  userRegisterReducer,
  getTicketReducer,
  userInfoReducer,
  editUserReducer,
  listUserPaginationReducer,
  deleteUserReducer,
  addUserReducer,
  listMoviePaginationReducer,
  addMovieReducer,
  deleteMovieReducer,
  updateMovieReducer,
  uploadFileReducer,
  infoShowMovieReducer,
  listUserReducer,
});
