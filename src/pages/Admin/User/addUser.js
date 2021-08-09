import React from "react";
import { AccountTextTitle, ExtraButton } from "pages/Home/AccountPage/style";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Validate } from "utils/Validate";
import { ButtonAdd, FormSelect } from "../style";
import { addUserApi } from "app/redux/reducer/Admin/addUser";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { accessToken } = useSelector((state) => state.userLoginReducer.data);
  const [formAdd, setFormAdd] = useState({
    taiKhoan: "",
    hoTen: "",
    soDt: "",
    email: "",
    matKhau: "",
    maNhom: "GP09",
    maLoaiNguoiDung: "KhachHang",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const { taiKhoan, hoTen, soDt, email, matKhau, maLoaiNguoiDung } = formAdd;
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate({
      taiKhoan,
      hoTen,
      soDt,
      email,
      matKhau,
    });
    if (Object.keys(errors).length === 0) {
      dispatch(addUserApi({ addForm: formAdd, accessToken }))
        .then((res) => {
          if (!res.error) {
            swal({
              title: "Thêm người dùng thành công !",
              icon: "success",
            })
              .then(() => history.push("/user"))
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
  const handleChange = (event) => {
    setFormAdd({ ...formAdd, [event.target.name]: event.target.value });
    setErrorMessage({ ...errorMessage, [event.target.name]: "" });
  };
  return (
    <div>
      <h1 className='heading'>Tạo mới tài khoản</h1>
      <Form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
            <div className='col-8'>
              <Form.Group
                className={
                  errorMessage.taiKhoan ? "color-danger border-danger" : ""
                }
              >
                <AccountTextTitle>Tên tài khoản</AccountTextTitle>
                <Form.Control
                  type='text'
                  placeholder='Tên tài khoản'
                  name='taiKhoan'
                  required
                  onChange={handleChange}
                  value={taiKhoan}
                />
              </Form.Group>
              {errorMessage.taiKhoan ? (
                <Form.Label className='color-danger'>
                  {errorMessage.taiKhoan}
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
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
            <div className='col-8'>
              <Form.Group>
                <AccountTextTitle>Loại tài khoản</AccountTextTitle>
                <FormSelect
                  onChange={handleChange}
                  name='maLoaiNguoiDung'
                  value={maLoaiNguoiDung}
                >
                  <option value='KhachHang'>Khách hàng</option>
                  <option value='QuanTri'>Quản trị</option>
                </FormSelect>
              </Form.Group>
            </div>
            <div className='col-2'></div>
          </div>
          <div className='row mt-2 mb-2'>
            <div className='col-2'></div>
            <div className='col-8 '>
              <ButtonAdd variant='success' type='submit' onClick={handleSubmit}>
                Tạo tài khoản
              </ButtonAdd>
            </div>
            <div className='col-2'></div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddUser;
