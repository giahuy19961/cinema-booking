import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ModalContainer from "components/Modal";
import { AccountTextTitle, ExtraButton } from "pages/Home/AccountPage/style";
import { Validate } from "utils/Validate";
import { useDispatch, useSelector } from "react-redux";
import { updateMovieApi } from "app/redux/reducer/Admin/updateMovie";
import swal from "sweetalert";

import { useHistory } from "react-router";

const MovieEditModal = ({ show, onHide, phim, onEdit }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { accessToken } = useSelector((state) => state.userLoginReducer.data);
  const [editForm, setEditForm] = useState({
    maPhim: phim.maPhim,
    tenPhim: phim.tenPhim,
    biDanh: phim.biDanh,
    trailer: phim.trailer,
    hinhAnh: phim.hinhAnh,
    maNhom: "GP09",
    moTa: phim.moTa,
    ngayKhoiChieu: phim.ngayKhoiChieu,
    danhGia: 0,
  });
  let { tenPhim, biDanh, trailer, hinhAnh, moTa, ngayKhoiChieu } = editForm;
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
    setErrorMessage({ ...errorMessage, [event.target.name]: "" });
  };
  const handleChangeFile = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.files[0] });
    setErrorMessage({ ...errorMessage, [event.target.name]: "" });
  };
  const [errorMessage, setErrorMessage] = useState({});
  const formatDate = (date) => {
    let dd = new Date(date).getDate();
    let MM = new Date(date).getMonth() + 1;
    let yyyy = new Date(date).getFullYear();

    return `${dd < 10 ? `0${dd}` : dd}/${MM < 10 ? `0${MM}` : MM}/${yyyy}`;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate({
      tenPhim,
      biDanh,
      trailer,
      moTa,
      ngayKhoiChieu,
    });
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      for (let key of Object.keys(editForm)) {
        if (key === "ngayKhoiChieu") {
          formData.append(key, formatDate(editForm[key]));
        } else {
          formData.append(key, editForm[key]);
        }
      }
      dispatch(updateMovieApi({ editForm: formData, accessToken }))
        .then((res) => {
          if (!res.error) {
            onEdit();
            swal({
              title: "C???p nh???t th??nh c??ng !",
              icon: "success",
            });
          } else {
            swal({ title: res.payload, icon: "error" });
          }
          onHide();
        })
        .catch((err) => console.log(err));
    } else {
      setErrorMessage(errors);
    }
  };
  useEffect(() => {
    setEditForm({
      maPhim: phim.maPhim,
      tenPhim: phim.tenPhim,
      biDanh: phim.biDanh,
      trailer: phim.trailer,
      hinhAnh: phim.hinhAnh,
      maNhom: "GP09",
      moTa: phim.moTa,
      ngayKhoiChieu: phim.ngayKhoiChieu,
      danhGia: 0,
    });
  }, [phim]);
  const body = (
    <>
      <h1 className='heading'>Ch???nh s???a chi ti???t phim {phim.tenPhim}</h1>
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
            <div className='col-8'>
              <Form.Group
                className={
                  errorMessage.tenPhim ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>t??n phim</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='H??? T??n'
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
                <AccountTextTitle>B?? danh</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='B?? danh'
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
                <AccountTextTitle>Trailer </AccountTextTitle>
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
                <AccountTextTitle>H??nh ???nh</AccountTextTitle>
                <Form.Control
                  type='file'
                  placeholder='H??nh ???nh url'
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
                  errorMessage.moTa ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>M?? t???</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='M?? t??? '
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
            <div className='col-8'>
              <Form.Group
                className={
                  errorMessage.ngayKhoiChieu ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Ng??y kh???i chi???u</AccountTextTitle>
                <Form.Control
                  type='date'
                  placeholder='Ng??y kh???i chi???u '
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
        </div>
      </Form>
    </>
  );
  const footer = (
    <Container>
      <div className='row'>
        <div className='col-xl-6 col-md-6'></div>
        <div className='col-xl-6 col-md-6'>
          <div className='d-flex justify-content-start'>
            <ExtraButton variant='success' type='submit' onClick={handleSubmit}>
              C???p nh???t phim
            </ExtraButton>
            <ExtraButton large={true} variant='danger' onClick={() => onHide()}>
              H???y b???
            </ExtraButton>
          </div>
        </div>
      </div>
    </Container>
  );
  return (
    <ModalContainer
      show={show}
      onHide={() => onHide()}
      body={body}
      footer={footer}
    />
  );
};

export default MovieEditModal;
