import { SET_USER_INFOR } from "./actions";

const initState = {
  currentUser: "",
};

export default function UserReducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_INFOR:
      console.log("SET_USER_INFOR", action);

      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
}