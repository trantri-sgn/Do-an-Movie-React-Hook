import Axios from 'axios';
import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    taiKhoan: yup.string().required("Vui lòng không để trống").min(5, 'Tối thiểu 5 ký tự')
        .max(12, 'Tối đa 12 ký tự'),
    matKhau: yup.string().required("Vui lòng không để trống").min(5, 'Tối thiểu 5 ký tự')
        .max(12, 'Tối đa 12 ký tự'),
    hoTen: yup.string().required("Vui lòng không để trống"),
    email: yup.string().required("Vui lòng không để trống").email("email không hợp lệ"),
    soDT: yup.string().required("Vui lòng không để trống").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "số điện thoại không hợp lệ"),
    maNhom: yup.string().required("Vui lòng không để trống")
});

class UserServices {
    Register(data) {
        return Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data
        });
    };
}
export default UserServices;