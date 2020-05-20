import { SET_LIST_DC } from "./actions";
const intState = {
  listNewsItem: [],
};

export default function DCReducer(state = intState, action) {
  switch (action.type) {
    case SET_LIST_DC:
      const newItem = action.payload.items;
      return {
        ...state,
        listNewsItem: [...state.listNewsItem, ...newItem],
      };
    default:
      return state;
  }
}
