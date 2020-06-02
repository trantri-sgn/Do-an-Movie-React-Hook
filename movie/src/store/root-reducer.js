import { combineReducers } from "redux";
import UserReducer from "./user/reducer";
import AuthReducer from "./auth/reducer";
import LoadingReducer from "./appLoading/reducer";
import DCReducer from "./danhSachPhimDC/reducer";
import DatVeReducer from "./datVe/reducer";
const MovieApp = combineReducers({
  User: UserReducer,
  Auth: AuthReducer,
  Loading: LoadingReducer,
  DC: DCReducer,
  DatVe: DatVeReducer,
});

export default MovieApp;
