import axios from "axios";

export default class UserService {
  userLoginApi = (userForm) => {
    return axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/DangNhap`,
      userForm
    );
  };
  userRegisterApi = (registerForm) => {
    return axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/DangKy`,
      registerForm
    );
  };
  getAccountInfoApi = async (taiKhoan) => {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      taiKhoan
    );
    return response.data;
  };
  editUserInfoApi = (editForm, accessToken) => {
    return axios.put(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      editForm,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
  getListUserPaginationsApi = (page, totalItem) => {
    return axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09&soTrang=${page}&soPhanTuTrenTrang=${totalItem}`
    );
  };
}
