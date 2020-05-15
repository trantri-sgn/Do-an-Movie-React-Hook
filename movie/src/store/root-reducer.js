import { combineReducers } from "redux";
import UserReducer from "./user/reducer";
import AuthReducer from "./auth/reducer";
import LoadingReducer from "./appLoading/reducer";

const MovieApp = combineReducers({
  User: UserReducer,
  Auth: AuthReducer,
  Loading: LoadingReducer,
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
export default MovieApp;
