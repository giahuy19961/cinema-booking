import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { userLoginApi } from "app/redux/reducer/userLogin";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  let { taiKhoan, matKhau } = loginForm;
  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(taiKhoan === ""){
      alert("Tai Khoan khong duoc de trong")
      return
    }
    if(matKhau === ""){
      alert("Mat Khau khong duoc de trong")
      return

    }
    dispatch(userLoginApi(loginForm));
  };
  return (
    <>
      <h1 className='form-header'>Đăng nhập</h1>
      <Form className='form' onSubmit={handleSubmit}>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='text'
            placeholder='Tên đăng nhập'
            name='taiKhoan'
            required
            onChange={handleChange}
            value={taiKhoan}
          />
        </Form.Group>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='password'
            placeholder='Mật khẩu'
            name='matKhau'
            value={matKhau}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button
          variant='success'
          type='submit'
          onClick={handleSubmit}
          className='form-submit'
        >
          Login
        </Button>
      </Form>
      <p>
        Bạn chưa có tài khoản ?
        <Link className='form-link' to='/register'>
          Đăng ký
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
