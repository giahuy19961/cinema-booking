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
  getListUserPaginationsApi = (page, perPage, searchValue) => {
    if (searchValue !== "") {
      return axios.get(
        `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09&tuKhoa=${searchValue}&soTrang=${page}&soPhanTuTrenTrang=${perPage}`
      );
    }
    return axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09&soTrang=${page}&soPhanTuTrenTrang=${perPage}`
    );
  };
  deleteUserApi = (taiKhoan, accessToken) => {
    return axios.delete(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
  createNewUserApi = (addForm, accessToken) => {
    return axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/ThemNguoiDung`,
      addForm,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
}
