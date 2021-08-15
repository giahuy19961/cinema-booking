import React from "react";
import { AccountTextTitle } from "pages/Home/AccountPage/style";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Validate } from "utils/Validate";
import { ButtonAdd } from "../style";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { addMovieApi } from "app/redux/reducer/Admin/addMovie";
import { uploadFileApi } from "app/redux/reducer/Admin/uploadFile";

const AddMovie = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { accessToken } = useSelector((state) => state.userLoginReducer.data);
  const [formAdd, setFormAdd] = useState({
    maPhim: 0,
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: null,
    moTa: "",
    ngayKhoiChieu: "",
    danhGia: 0,
    maNhom: "GP09",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const { maPhim, tenPhim, biDanh, trailer, moTa, ngayKhoiChieu } = formAdd;

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate({
      maPhim,
      tenPhim,
      biDanh,
      trailer,
      moTa,
      ngayKhoiChieu,
    });

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      for (let key of Object.keys(formAdd)) {
        if (key === "ngayKhoiChieu") {
          formData.append(key, formatDate(formAdd[key]));
        } else {
          formData.append(key, formAdd[key]);
        }
      }
      dispatch(uploadFileApi(formData))
        .then((res) => {
          if (!res.error) {
            swal({
              title: "Thêm phim thành công !",
              icon: "success",
            })
              .then(() => history.push("/admin/movie"))
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
  const handleChangeFile = (event) => {
    // setFormAdd({ ...formAdd, hinhAnh: event.target.files[0] });
    setFormAdd({ ...formAdd, hinhAnh: event.target.files[0] });
    // dispatch(uploadFileApi);
    // setErrorMessage({ ...errorMessage, [event.target.name]: "" });
  };
  const handleChange = (event) => {
    setFormAdd({ ...formAdd, [event.target.name]: event.target.value });
    setErrorMessage({ ...errorMessage, [event.target.name]: "" });
  };
  const formatDate = (date) => {
    let dd = new Date(date).getDate();
    let MM = new Date(date).getMonth() + 1;
    let yyyy = new Date(date).getFullYear();

    return `${dd < 10 ? `0${dd}` : dd}/${MM < 10 ? `0${MM}` : MM}/${yyyy}`;
  };
  return (
    <div>
      <h1 className='heading'>Thêm mới phim</h1>
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
            <div className='col-8'>
              <Form.Group
                className={
                  errorMessage.maPhim ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Mã phim</AccountTextTitle>
                <Form.Control
                  type='number'
                  placeholder='Mã phim'
                  name='maPhim'
                  required
                  onChange={handleChange}
                  value={maPhim}
                />
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
                  errorMessage.tenPhim ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Tên phim</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Tên phim'
                  name='tenPhim'
                  required
                  onChange={handleChange}
                  value={tenPhim}
                />
              </Form.Group>
              {errorMessage.tenPhim ? (
                <Form.Label className='color-danger'>
                  {errorMessage.tenPhim}
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
                  errorMessage.biDanh ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Bí danh</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Bí danh'
                  name='biDanh'
                  required
                  onChange={handleChange}
                  value={biDanh}
                />
              </Form.Group>
              {errorMessage.biDanh ? (
                <Form.Label className='color-danger'>
                  {errorMessage.biDanh}
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
                  errorMessage.trailer ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Trailer url</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Trailer url'
                  name='trailer'
                  value={trailer}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              {errorMessage.trailer ? (
                <Form.Label className='color-danger'>
                  {errorMessage.trailer}
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
                  errorMessage.hinhAnh ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Link hình ảnh</AccountTextTitle>
                <Form.Control
                  type='file'
                  placeholder='Nhập link hình ảnh'
                  name='hinhAnh'
                  required
                  onChange={handleChangeFile}
                />
              </Form.Group>
              {errorMessage.hinhAnh ? (
                <Form.Label className='color-danger'>
                  {errorMessage.hinhAnh}
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
                  type='date'
                  placeholder='Ngày khởi chiếu dd/MM/yyyy'
                  name='ngayKhoiChieu'
                  required
                  onChange={handleChange}
                  value={ngayKhoiChieu}
                />
              </Form.Group>
              {errorMessage.ngayKhoiChieu ? (
                <Form.Label className='color-danger'>
                  {errorMessage.ngayKhoiChieu}
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
                  errorMessage.moTa ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Mô tả</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Mô tả'
                  name='moTa'
                  required
                  onChange={handleChange}
                  value={moTa}
                />
              </Form.Group>
              {errorMessage.moTa ? (
                <Form.Label className='color-danger'>
                  {errorMessage.moTa}
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
                Thêm phim
              </ButtonAdd>
            </div>
            <div className='col-2'></div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddMovie;
