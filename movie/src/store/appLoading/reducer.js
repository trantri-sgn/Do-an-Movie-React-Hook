import { SHOW_LOADING, HIDDEN_LOADING } from "./action";

const initState = {
  isLoading: false,
};

export default function LoadingReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case HIDDEN_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
