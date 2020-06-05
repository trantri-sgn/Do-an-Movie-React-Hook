import { SET_USER_INFOR } from "./actions";
import { StorageUser } from "../../helpers";
import { LOGOUT_SUCCESS } from "../auth/actions";
const initState = {
  TTUSER: StorageUser.getUser(),
};

export default function UserReducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_INFOR:
      // console.log("SET_USER_INFOR", action);
      return { ...state, TTUSER: action.payload };
    case LOGOUT_SUCCESS:
      StorageUser.removeUser();
      return { ...state, TTUSER: "" };
    default:
      return state;
  }
}
