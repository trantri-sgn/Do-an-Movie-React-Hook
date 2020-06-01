import { api } from "./index";

const DatVEService = {
  getData(objectDatVe) {
    console.log("aa", objectDatVe);
    return api.callWithAuth().post(`"/api/QuanLyDatVe/DatVe"${objectDatVe}`);
  },
};

export default DatVEService;
