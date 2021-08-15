import axios from "axios";

export default class CinemaService {
  layThongTinHeThongRap = async () => {
    const response = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`
    );
    return response.data;
  };
  layThongTinCumRapTheoHeThong = async (maHeThongRap) => {
    const response = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
    return response.data;
  };
  layThongTinLichChieuPhim = async (maPhim) => {
    const response = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
    return response.data;
  };
}
