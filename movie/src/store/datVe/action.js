import axios from "axios";
import { Storage } from "../../helpers";
import swal from "sweetalert2";

const nameSpace = "DATVE";

export const SET_Ghe_Dc_Chon = `${nameSpace}SET_Ghe_Dc_Chon`;

export const actSetGheDcChon = (gheDuocChon) => ({
  type: SET_Ghe_Dc_Chon,
  payload: gheDuocChon,
});

export const asyncPostDatVe = (objectDatVe) => {
  console.log("objectDatVe");

  return (dispatch) => {
    axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data: objectDatVe,
      headers: {
        Authorization: "Bearer " + Storage.getToken(),
      },
    })
      .then((result) => {
        swal.fire("Thông báo", result.data, "success").then((resultdata) => {
          window.location.href = "/";
        });
      })
      .catch((errors) => {
        console.log(errors.response.data);
      });
  };
};
