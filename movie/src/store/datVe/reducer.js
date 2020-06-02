import { SET_Ghe_Dc_Chon } from "./action";

const intState = {
  listDSGhe: [],
};

export default function DCReducer(state = intState, action) {
  switch (action.type) {
    case SET_Ghe_Dc_Chon:
      const ax = action.payload.dangDat;
      const ds = action.payload;
      if (ax) {
        state.listDSGhe = [...state.listDSGhe, ds];
      } else {
        state.listDSGhe = [
          ...state.listDSGhe.filter((ghe) => ghe.maGhe !== ds.maGhe),
        ];
      }

      return {
        ...state,
      };

    default:
      return state;
  }
}
