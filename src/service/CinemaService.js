import axios from "axios";

export default class CinemaService {
  layThongTinHeThongRap = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyRap/LayThongTinHeThongRap`
    );
    return response.data;
  };
  layThongTinCumRapTheoHeThong = async (maHeThongRap) => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
    return response.data;
  };
}
