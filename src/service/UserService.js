import axios from "axios";

export default class UserService {
  userLoginApi = async (userForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/DangNhap`,
      userForm
    );

    return response.data;
  };
  userRegisterApi = async (registerForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/DangKy`,
      registerForm
    );
    return response.data;
  };
  getAccountInfoApi = async (taiKhoan) => {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      taiKhoan
    );
    return response.data;
  };
  editUserInfoApi = async (editForm, accessToken) => {
    const response = await axios.put(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      editForm,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
  };
}
