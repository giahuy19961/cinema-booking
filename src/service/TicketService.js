//movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=22231

import axios from "axios";

export default class TicketService {
  layDanhSachPhongVe = async (maLichChieu) => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
    return response.data;
  };
}
