// thang nay de xac thuc
import { LOGIN_SUCCESS } from "./actions";

import { Storage } from "../../helpers";
const intState = {
  ACCESS_TOKEN: Storage.getToken() || "",
};

export default function AuthReducer(state = intState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS", action);

      return { ...state, ACCESS_TOKEN: action.payload };

    default:
      return state;
  }
}
