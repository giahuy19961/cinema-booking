import { userRegisterApi } from "app/redux/reducer/userRegister";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Validate } from "utils/Validate";
import swal from "sweetalert";
import "./style.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();
  const [registerForm, setRegisterForm] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP09",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  let { taiKhoan, matKhau, email, soDt, hoTen, confirmPassword } = registerForm;

  const handleChange = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
    setErrorMessage({
      ...errorMessage,
      [event.target.name]: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate(
      {
        taiKhoan,
        matKhau,
        email,
        hoTen,
        confirmPassword,
        soDt,
      },
      matKhau
    );
    if (Object.keys(errors).length === 0) {
      dispatch(userRegisterApi(registerForm)).then((response) => {
        if (!response.error) {
          swal({
            title: "Đăng ký thành công ! Vui lòng đăng nhập",
            icon: "success",
          }).then(() => history.push("/login"));
        } else {
          swal({ title: response.payload, icon: "error" });
        }
      });
    } else {
      setErrorMessage(errors);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <>
      <h1 className='form-header'>Đăng ký</h1>
      <Form className='form' onSubmit={handleSubmit}>
        <Form.Group
          className={`mt-3 mb-3 ${
            errorMessage.taiKhoan ? "border-danger-no-title color-danger" : ""
          }`}
        >
          <Form.Control
            type='text'
            placeholder='Tên đăng nhập'
            name='taiKhoan'
            onChange={handleChange}
            value={taiKhoan}
          />
          {errorMessage.taiKhoan ? (
            <Form.Label className='color-danger'>
              {errorMessage.taiKhoan}
            </Form.Label>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group
          className={`mt-3 mb-3 ${
            errorMessage.hoTen ? "border-danger-no-title color-danger" : ""
          }`}
        >
          <Form.Control
            type='text'
            placeholder='Họ tên'
            name='hoTen'
            onChange={handleChange}
            value={hoTen}
          />
          {errorMessage.hoTen ? (
            <Form.Label className='color-danger'>
              {errorMessage.hoTen}
            </Form.Label>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group
          className={`mt-3 mb-3 ${
            errorMessage.matKhau ? "border-danger-no-title color-danger" : ""
          }`}
        >
          <Form.Control
            type='password'
            placeholder='Mật khẩu'
            name='matKhau'
            onChange={handleChange}
            value={matKhau}
          />
          {errorMessage.matKhau ? (
            <Form.Label className='color-danger'>
              {errorMessage.matKhau}
            </Form.Label>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group
          className={`mt-3 mb-3 ${
            errorMessage.confirmPassword
              ? "border-danger-no-title color-danger"
              : ""
          }`}
        >
          <Form.Control
            type='password'
            placeholder='Nhập lại mật khẩu'
            name='confirmPassword'
            onChange={handleChange}
            value={confirmPassword}
          />
          {errorMessage.confirmPassword ? (
            <Form.Label className='color-danger'>
              {errorMessage.confirmPassword}
            </Form.Label>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group
          className={`mt-3 mb-3 ${
            errorMessage.email ? "border-danger-no-title color-danger" : ""
          }`}
        >
          <Form.Control
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={email}
          />
          {errorMessage.email ? (
            <Form.Label className='color-danger'>
              {errorMessage.email}
            </Form.Label>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group
          className={`mt-3 mb-3 ${
            errorMessage.soDt ? "border-danger-no-title color-danger" : ""
          }`}
        >
          <Form.Control
            type='text'
            placeholder='Số điện thoại'
            name='soDt'
            onChange={handleChange}
            value={soDt}
          />
          {errorMessage.soDt ? (
            <Form.Label className='color-danger'>
              {errorMessage.soDt}
            </Form.Label>
          ) : (
            ""
          )}
        </Form.Group>

        <Button variant='success' type='submit' className='form-submit'>
          Đăng ký
        </Button>
      </Form>
      <p>
        Bạn đã có tài khoản ?
        <Link className='form-link' to='/login'>
          Đăng nhập ngay
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
