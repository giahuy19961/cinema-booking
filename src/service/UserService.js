import axios from "axios";

export default class UserService {
  userLoginApi = async (userForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/DangNhap`,
      userForm
    );

    return response.data;
  };
}
