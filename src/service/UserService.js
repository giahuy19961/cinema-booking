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
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      editForm,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
  getListUserPaginationApi = (page, perPage, searchValue) => {
    if (searchValue !== "") {
      return axios.get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09&tuKhoa=${searchValue}&soTrang=${page}&soPhanTuTrenTrang=${perPage}`
      );
    }
    return axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09&soTrang=${page}&soPhanTuTrenTrang=${perPage}`
    );
  };
  getListUserApi = () => {
    return axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09`
    );
  };
  deleteUserApi = (taiKhoan, accessToken) => {
    return axios.delete(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
  createNewUserApi = (addForm, accessToken) => {
    return axios.post(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
      addForm,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
}
