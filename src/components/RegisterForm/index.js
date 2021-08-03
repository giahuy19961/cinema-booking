import { userRegisterApi } from "app/redux/reducer/userRegister";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Validate } from "utils/Validate";
import "./style.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.userLoginReducer);
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
  let { taiKhoan, matKhau, email, soDt, hoTen, confirmPassword } = registerForm;
  const handleChange = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate({
      username: taiKhoan,
      password: matKhau,
      email,
      hoTen,
      confirmPassword,
      soDT: soDt,
    });
    if (Object.keys(errors).length === 0) {
      dispatch(userRegisterApi(registerForm))
        .then((res) => {
          history.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <>
      <h1 className='form-header'>Đăng ký</h1>
      <Form className='form' onSubmit={handleSubmit}>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='text'
            placeholder='Tên đăng nhập'
            name='taiKhoan'
            onChange={handleChange}
            value={taiKhoan}
          />
        </Form.Group>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='text'
            placeholder='Họ tên'
            name='hoTen'
            onChange={handleChange}
            value={hoTen}
          />
        </Form.Group>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='password'
            placeholder='Mật khẩu'
            name='matKhau'
            onChange={handleChange}
            value={matKhau}
          />
        </Form.Group>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='password'
            placeholder='Nhập lại mật khẩu'
            name='confirmPassword'
            onChange={handleChange}
            value={confirmPassword}
          />
        </Form.Group>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={email}
          />
        </Form.Group>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='text'
            placeholder='Số điện thoại'
            name='soDt'
            onChange={handleChange}
            value={soDt}
          />
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
