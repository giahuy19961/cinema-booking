import { addShowApi } from "app/redux/reducer/Admin/addShow";
import { listCinemaById } from "app/redux/reducer/listCinema";
import { listTheatersApi } from "app/redux/reducer/listTheaters";
import Loading from "components/Loading";
import { AccountTextTitle } from "pages/Home/AccountPage/style";
import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Validate } from "utils/Validate";
import { ButtonAdd, FormSelect } from "../style";
import swal from "sweetalert";
import { listMovieApi } from "app/redux/reducer/listMovie";

const AddTicket = ({
  computedMatch: {
    params: { id },
  },
}) => {
  //   redux
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector((state) => state.listTheatersReducer);
  const loadingMovie = useSelector((state) => state.listMovieReducer.loading);
  const listMovie = useSelector((state) => state.listMovieReducer.data);
  const theaterList = useSelector((state) => state.listTheatersReducer.data);
  const { accessToken } = useSelector((state) => state.userLoginReducer.data);
  const cinemaList = useSelector((state) => state.listCinemaByIdReducer.data);
  // localState
  const [formAdd, setFormAdd] = useState({
    maPhim: id === "noId" ? "" : id,
    maRap: "",
    maHeThongRap: "",
    maCumRap: "",
    ngayChieuGioChieu: "",
    giaVe: "",
  });
  console.log(formAdd);
  const { maPhim, maRap, ngayChieuGioChieu, maCumRap, maHeThongRap, giaVe } =
    formAdd;
  const [errorMessage, setErrorMessage] = useState({});
  // handleFunc
  const handleChange = (e) => {
    setFormAdd({ ...formAdd, [e.target.name]: e.target.value });
    setErrorMessage({ ...errorMessage, [e.target.name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = Validate({
      maPhim,
      maRap,
      ngayChieuGioChieu,
      maCumRap,
      maHeThongRap,
      giaVe,
    });
    if (Object.keys(errors).length === 0) {
      const formData = {
        maRap: parseInt(formAdd.maRap),
        giaVe: parseInt(formAdd.giaVe),
        maPhim: parseInt(formAdd.maPhim),
        ngayChieuGioChieu: formatDateTime(formAdd.ngayChieuGioChieu),
      };
      dispatch(addShowApi({ formData, accessToken }))
        .then((res) => {
          if (!res.error) {
            swal({
              title: "Tạo lịch chiếu thành công !",
              icon: "success",
            })
              .then(() => history.push(`/admin/movie/show/${maPhim}`))
              .catch((err) => console.log(err));
          } else {
            swal({ title: res.payload, icon: "error" });
          }
        })
        .catch((err) => console.log(err));
    } else {
      setErrorMessage(errors);
    }
  };
  const formatDateTime = (date) => {
    let dd = new Date(date).getDate();
    let MM = new Date(date).getMonth() + 1;
    let yyyy = new Date(date).getFullYear();
    let hh = new Date(date).getHours();
    let mm = new Date(date).getMinutes();

    return `${dd < 10 ? `0${dd}` : dd}/${MM < 10 ? `0${MM}` : MM}/${yyyy} ${
      hh < 10 ? `0${hh}` : hh
    }:${mm < 10 ? `0${mm}` : mm}:00`;
  };
  const listMovieOption = (list) => {
    return list?.map((movie, index) => {
      return (
        <option key={index} value={movie.maPhim}>
          {movie.tenPhim}
        </option>
      );
    });
  };
  const listTheaterOption = (list) => {
    return list?.map((theater, index) => {
      return (
        <option key={index} value={theater.maHeThongRap}>
          {theater.tenHeThongRap}
        </option>
      );
    });
  };
  const listCinemaOption = (list) => {
    return list?.map((cinema, index) => {
      return (
        <option key={index} value={cinema.maCumRap}>
          {cinema.tenCumRap}
        </option>
      );
    });
  };
  const listCineOption = (list) => {
    if (maCumRap !== "") {
      return list?.map((cinema, index) => {
        if (cinema.maCumRap === maCumRap) {
          return cinema.danhSachRap.map((cine, index) => {
            return (
              <option key={index} value={cine.maRap}>
                {cine.tenRap}
              </option>
            );
          });
        }
      });
    }
  };

  //  Effect
  useEffect(() => {
    dispatch(listTheatersApi());
    dispatch(listMovieApi());
  }, []);
  useEffect(() => {
    if (maHeThongRap !== "") {
      dispatch(listCinemaById(maHeThongRap));
    }
  }, [maHeThongRap]);
  if (loading && loadingMovie) return <Loading />;
  return (
    <div className='container'>
      <h1 className='heading'>Tạo lịch chiếu {id === "noId" ? "" : id}</h1>
      <Form className='container' submit={handleSubmit}>
        <div className='row mt-2 mb-2'>
          <div className='col-2'></div>
          <div className='col-8'>
            <Form.Group
              className={
                errorMessage.maPhim ? "color-danger border-danger" : ""
              }
            >
              <AccountTextTitle>
                {id === "noId" ? "Chọn phim " : "Mã phim"}
              </AccountTextTitle>
              {id === "noId" ? (
                <FormSelect
                  onChange={handleChange}
                  name='maPhim'
                  value={maPhim}
                >
                  <option value='' disabled>
                    Chọn phim
                  </option>
                  {listMovieOption(listMovie)}
                </FormSelect>
              ) : (
                <Form.Control
                  type='number'
                  placeholder='Mã phim'
                  name='maPhim'
                  required
                  disabled
                  value={maPhim}
                />
              )}
            </Form.Group>
            {errorMessage.maPhim ? (
              <Form.Label className='color-danger'>
                {errorMessage.maPhim}
              </Form.Label>
            ) : (
              ""
            )}
          </div>
          <div className='col-2'></div>
        </div>
        <div className='row mt-2 mb-2'>
          <div className='col-2'></div>
          <div className='col-8'>
            <Form.Group
              className={
                errorMessage.maHeThongRap ? "color-danger border-danger" : ""
              }
            >
              <AccountTextTitle>Chọn hệ thống rạp</AccountTextTitle>
              <FormSelect
                onChange={handleChange}
                name='maHeThongRap'
                value={maHeThongRap}
              >
                <option value='' disabled>
                  Chọn hệ thống rạp
                </option>
                {listTheaterOption(theaterList)}
              </FormSelect>
            </Form.Group>
            {errorMessage.maHeThongRap ? (
              <Form.Label className='color-danger'>
                {errorMessage.maHeThongRap}
              </Form.Label>
            ) : (
              ""
            )}
          </div>
          <div className='col-2'></div>
        </div>
        <div className='row mt-2 mb-2'>
          <div className='col-2'></div>
          <div className='col-8'>
            <Form.Group
              className={
                errorMessage.maCumRap ? "color-danger border-danger" : ""
              }
            >
              <AccountTextTitle>Chọn cụm rạp</AccountTextTitle>
              <FormSelect
                onChange={handleChange}
                name='maCumRap'
                value={maCumRap}
              >
                <option value='' disabled>
                  Chọn cụm rạp
                </option>
                {listCinemaOption(cinemaList)}
              </FormSelect>
            </Form.Group>
            {errorMessage.maCumRap ? (
              <Form.Label className='color-danger'>
                {errorMessage.maCumRap}
              </Form.Label>
            ) : (
              ""
            )}
          </div>
          <div className='col-2'></div>
        </div>
        <div className='row mt-2 mb-2'>
          <div className='col-2'></div>
          <div className='col-8'>
            <Form.Group
              className={errorMessage.maRap ? "color-danger border-danger" : ""}
            >
              <AccountTextTitle>Chọn rạp</AccountTextTitle>
              <FormSelect onChange={handleChange} name='maRap' value={maRap}>
                <option value='' disabled>
                  Chọn mã rạp
                </option>
                {listCineOption(cinemaList)}
              </FormSelect>
            </Form.Group>
            {errorMessage.maRap ? (
              <Form.Label className='color-danger'>
                {errorMessage.maRap}
              </Form.Label>
            ) : (
              ""
            )}
          </div>
          <div className='col-2'></div>
        </div>
        <div className='row mt-2 mb-2'>
          <div className='col-2'></div>
          <div className='col-8'>
            <Form.Group
              className={
                errorMessage.ngayKhoiChieu ? "color-danger border-danger" : ""
              }
            >
              <AccountTextTitle>Ngày khởi chiếu</AccountTextTitle>
              <Form.Control
                type='datetime-local'
                placeholder='Ngày khởi chiếu dd/MM/yyyy'
                name='ngayChieuGioChieu'
                required
                onChange={handleChange}
                value={ngayChieuGioChieu}
              />
            </Form.Group>
            {errorMessage.ngayChieuGioChieu ? (
              <Form.Label className='color-danger'>
                {errorMessage.ngayChieuGioChieu}
              </Form.Label>
            ) : (
              ""
            )}
          </div>
          <div className='col-2'></div>
        </div>
        <div className='row mt-2 mb-2'>
          <div className='col-2'></div>
          <div className='col-8'>
            <Form.Group
              className={
                errorMessage.maPhim ? "color-danger border-danger" : ""
              }
            >
              <AccountTextTitle>Giá vé</AccountTextTitle>
              <Form.Control
                type='number'
                placeholder='Giá vé'
                name='giaVe'
                required
                value={giaVe}
                onChange={handleChange}
              />
            </Form.Group>
            {errorMessage.giaVe ? (
              <Form.Label className='color-danger'>
                {errorMessage.giaVe}
              </Form.Label>
            ) : (
              ""
            )}
          </div>
          <div className='col-2'></div>
        </div>
        <div className='row mt-2 mb-2'>
          <div className='col-2'></div>
          <div className='col-8 '>
            <ButtonAdd variant='success' type='submit' onClick={handleSubmit}>
              Thêm lịch chiếu
            </ButtonAdd>
          </div>
          <div className='col-2'></div>
        </div>
      </Form>
    </div>
  );
};

export default AddTicket;
