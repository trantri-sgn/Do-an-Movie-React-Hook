import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Resgister from "../pages/Resgister";
import ListPhim from "../pages/ListPhim";
import DatVeDetail from "../pages/DatVeDetail";
import SearchPhim from "../pages/SearchPhim";
import { PATHS } from "../constants";
import Muave from "../pages/MuaVe";

export const Routers = [
  {
    path: PATHS.HOMEPAGE,
    exact: true,
    component: HomePage,
  },
  {
    path: PATHS.LOGIN,
    exact: false,
    component: Login,
  },
  {
    path: PATHS.RESGISTER,
    exexact: false,
    component: Resgister,
  },
  {
    path: PATHS.ListPhim,
    exexact: false,
    component: ListPhim,
  },
  {
    path: PATHS.DatVeDetail,
    exexact: false,
    component: DatVeDetail,
  },
  {
    path: PATHS.MuaVe,
    exexact: false,
    component: Muave,
  },
  {
    path: PATHS.SearchPhim,
    exexact: false,
    component: SearchPhim,
  },
];
