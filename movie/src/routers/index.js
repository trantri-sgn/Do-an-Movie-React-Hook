import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Resgister from "../pages/Resgister";

import { PATHS } from "../constants";

export const Routers = [
  {
    path: PATHS.HOMEPAGE,
    exact: true,
    component: HomePage,
  },
  {
    path: PATHS.LOGIN,
    exact: true,
    component: Login,
  },
  {
    path: PATHS.RESGISTER,
    exexact: true,
    component: Resgister,
  },
];
