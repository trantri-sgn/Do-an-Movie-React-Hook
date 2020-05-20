import { combineReducers } from "redux";
import UserReducer from "./user/reducer";
import AuthReducer from "./auth/reducer";
import LoadingReducer from "./appLoading/reducer";
import DCReducer from "./danhSachPhimDC/reducer";

const MovieApp = combineReducers({
  User: UserReducer,
  Auth: AuthReducer,
  Loading: LoadingReducer,
  DC: DCReducer,
});

export default MovieApp;
