import DetailPage from "pages/Home/DetailPage";
import HomePage from "pages/Home/HomePage";

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
];

export { routeHome };
