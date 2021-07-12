import axios from "axios";

export default class MovieService {
  layDanhSachPhimApi = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyPhim/LayDanhSachPhim?maNhom=GP08`
    );
    return response.data;
  };
  layThongTinLichChieuPhimApi = async (maPhim) => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
    return response.data;
  };
  layThongTinLichChieuHeThongRap = async (maHeThongRap) => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
    );
    return response.data;
  };
}
