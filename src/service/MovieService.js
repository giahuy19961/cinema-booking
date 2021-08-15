import axios from "axios";

export default class MovieService {
  layDanhSachPhimApi = async () => {
    const response = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`
    );
    return response.data;
  };
  layThongTinLichChieuPhimApi = async (maPhim) => {
    const response = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
    return response.data;
  };
  layThongTinLichChieuHeThongRapApi = async (maHeThongRap) => {
    const response = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`
    );
    return response.data;
  };
  getListMoviePaginationsApi = (page, perPage, tenPhim) => {
    if (tenPhim !== "") {
      return axios.get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=GP09&tenPhim=${tenPhim}&soTrang=${page}&soPhanTuTrenTrang=${perPage}`
      );
    }
    return axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=GP09&soTrang=${page}&soPhanTuTrenTrang=${perPage}`
    );
  };
  createNewMovieApi = (addForm, accessToken) => {
    return axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyPhim/ThemPhim`,
      addForm,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
  deleteMovieApi = (maPhim, accessToken) => {
    return axios.delete(
      `${process.env.REACT_APP_URL_LINK}/QuanLyPhim/XoaPhim?maPhim=${maPhim}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
  updateMovieApi = (updateForm, accessToken) => {
    return axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyPhim/CapNhatPhimUpload`,
      updateForm,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  };
  uploadFileApi = (fileUpload) => {
    return axios.post(
      `${process.env.REACT_APP_URL_LINK}/QuanLyPhim/ThemPhimUploadHinh`,
      fileUpload
    );
  };
  layThongTinPhimApi = async (maPhim) => {
    return await axios.get(
      `${process.env.REACT_APP_URL_LINK}/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    );
  };
}
