import DetailPage from "pages/Home/DetailPage";
import HomePage from "pages/Home/HomePage";
import TicketPage from "pages/Home/TicketPage";

const routeHome = [
  {
    path: "/",
    Component: HomePage,
    exact: true,
  },
  {
    path: "/movie/:id",
    Component: DetailPage,
    exact: true,
  },
  {
    path: "/ticket/:id",
    Component: TicketPage,
    exact: true,
    login: true,
  },
];

export { routeHome };
