//movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=22231
//https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe

import axios from "axios";

export default class TicketService {
  layDanhSachPhongVe = async (maLichChieu) => {
    const response = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
    return response.data;
  };
  datVe = async (thongTinVe, accessToken) => {
    const response = await axios.post(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
      thongTinVe,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
  };
  themLichChieu = (formAdd, accessToken) => {
    return axios.post(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu`,
      formAdd,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
}
