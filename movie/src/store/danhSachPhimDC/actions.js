import { DCService } from "../../serrvices";
const nameSpace = "DC";

export const SET_LIST_DC = `${nameSpace}SET_LIST_DC`;

export const actSetListDC = ({ items }) => ({
  type: SET_LIST_DC,
  payload: { items },
});
export const asyncGetDanhSachDC = ({
  soTrang = 1,
  soPhanTuTrenTrang = 10,
} = {}) => {
  return async (dispatch) => {
    try {
      //    dispatch(actShowLoading());
      const response = await DCService.getPhimDC({
        soTrang,
        soPhanTuTrenTrang,
      });
      const items = response.data.items;
      dispatch(actSetListDC({ items }));
      return {
        ok: true,
        data: response.data.items,
      };
    } catch (err) {
      return {
        ok: false,
        error: err,
      };
    }
  };
};
