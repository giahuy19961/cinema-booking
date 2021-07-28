import axios from "axios";

export default class MovieService {
  layDanhSachPhimApi = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`
    );
    return response.data;
  };
  layThongTinLichChieuPhimApi = async (maPhim) => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
    return response.data;
  };
  layThongTinLichChieuHeThongRapApi = async (maHeThongRap) => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`
    );
    return response.data;
  };
}
