import axios from "axios";

export default class UserService {
  userLoginApi(userForm){
    return  axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyNguoiDung/DangNhap`,
      userForm
    );
  };
}
