import AuthHome from "pages/Home/Auth";
import DetailPage from "pages/Home/DetailPage";
import HomePage from "pages/Home/HomePage";
import TheaterPage from "pages/Home/TheaterPage";
import TicketPage from "pages/Home/TicketPage";
import AccountPage from "pages/Home/AccountPage";
import DashBoard from "pages/Admin/Dashboard";
import UserManagerment from "pages/Admin/User";

const routeHome = [
  {
    path: "/",
    Component: HomePage,
    exact: true,
    isLogin: false,
  },
  {
    path: "/movie/:id",
    Component: DetailPage,
    exact: true,
    isLogin: false,
  },
  {
    path: "/ticket/:id",
    Component: TicketPage,
    exact: true,
    isLogin: true,
  },
  {
    path: "/login",
    authRoute: "login",
    Component: AuthHome,
    exact: false,
    isLogin: false,
  },
  {
    path: "/register",
    authRoute: "register",
    Component: AuthHome,
    exact: false,
    isLogin: false,
  },
  {
    path: "/theater",
    Component: TheaterPage,
    exact: false,
    isLogin: false,
  },
  {
    path: "/account",
    Component: AccountPage,
    exact: false,
    isLogin: true,
  },
];
const routeAdmin = [
  {
    path: "/dashboard",
    Component: DashBoard,
    exact: true,
    isLogin: true,
    isAdmin: true,
  },
  {
    path: "/login",
    authRoute: "login",
    Component: AuthHome,
    exact: false,
    isLogin: false,
  },
  {
    path: "/user",
    Component: UserManagerment,
    exact: true,
    isLogin: true,
    isAdmin: true,
  },
];

export { routeHome, routeAdmin };
