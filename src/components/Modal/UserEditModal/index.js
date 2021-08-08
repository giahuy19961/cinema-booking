import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ModalContainer from "components/Modal";
import { AccountTextTitle, ExtraButton } from "pages/Home/AccountPage/style";
import { Validate } from "utils/Validate";
import { useDispatch, useSelector } from "react-redux";
import { editUserApi } from "app/redux/reducer/editUserInfo";
import swal from "sweetalert";

import { useHistory } from "react-router";

const UserEditModal = ({ show, onHide, detailUser }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { accessToken } = useSelector((state) => state.userLoginReducer.data);
  const [editForm, setEditForm] = useState({
    taiKhoan: detailUser.taiKhoan,
    matKhau: detailUser.matKhau,
    email: detailUser.email,
    soDt: detailUser.soDt,
    maNhom: "GP09",
    maLoaiNguoiDung: detailUser.maLoaiNguoiDung,
    hoTen: detailUser.hoTen,
  });
  let { matKhau, email, soDt, maLoaiNguoiDung, hoTen } = editForm;
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
    setErrorMessage({ ...errorMessage, [event.target.name]: "" });
  };
  const [errorMessage, setErrorMessage] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate({
      hoTen,
      soDt,
      email,
      matKhau,
    });
    if (Object.keys(errors).length === 0) {
      dispatch(editUserApi({ editForm, accessToken }))
        .then((res) => {
          if (!res.error) {
            swal({
              title: "Cập nhật thông tin thành công !",
              icon: "success",
            })
              .then(() => {
                history.push("/user");
              })
              .catch((err) => console.log(err));
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
      taiKhoan: detailUser.taiKhoan,
      matKhau: detailUser.matKhau,
      email: detailUser.email,
      soDt: detailUser.soDt,
      maNhom: "GP09",
      maLoaiNguoiDung: detailUser.maLoaiNguoiDung,
      hoTen: detailUser.hoTen,
    });
  }, [detailUser]);
  const body = (
    <>
      <h1 className='heading'>
        Chỉnh sửa thông tin tài khoản {detailUser.taiKhoan}
      </h1>
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
            <div className='col-8'>
              <Form.Group
                className={
                  errorMessage.hoTen ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Họ tên</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Họ Tên'
                  name='hoTen'
                  required
                  onChange={handleChange}
                  value={hoTen}
                />
              </Form.Group>
              {errorMessage.hoTen ? (
                <Form.Label className='color-danger'>
                  {errorMessage.hoTen}
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
                  errorMessage.matKhau ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Mật khẩu</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Mật khẩu'
                  name='matKhau'
                  required
                  onChange={handleChange}
                  value={matKhau}
                />
              </Form.Group>
              {errorMessage.matKhau ? (
                <Form.Label className='color-danger'>
                  {errorMessage.matKhau}
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
                  errorMessage.email ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Email</AccountTextTitle>
                <Form.Control
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              {errorMessage.email ? (
                <Form.Label className='color-danger'>
                  {errorMessage.email}
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
                  errorMessage.soDt ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Số điện thoại</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Số điện thoại'
                  name='soDt'
                  required
                  onChange={handleChange}
                  value={soDt}
                />
              </Form.Group>
              {errorMessage.soDt ? (
                <Form.Label className='color-danger'>
                  {errorMessage.soDt}
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
      <hr />
      <div className='row'>
        <div className='col-xl-6 col-md-6'></div>
        <div className='col-xl-6 col-md-6'>
          <div className='d-flex justify-content-start'>
            <ExtraButton variant='success' type='submit' onClick={handleSubmit}>
              Cập nhật tài khoản
            </ExtraButton>
            <ExtraButton large={true} variant='danger' onClick={() => onHide()}>
              Hủy bỏ
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

export default UserEditModal;
