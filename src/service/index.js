import CinemaService from "./CinemaService";
import MovieService from "./MovieService";
import TicketService from "./TicketService";
import UserService from "./UserService";

export const movieService = new MovieService();
export const cinemaService = new CinemaService();
export const userService = new UserService();
export const ticketService = new TicketService();
