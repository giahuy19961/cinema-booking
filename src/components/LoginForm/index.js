import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { Validate } from "utils/Validate";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { userLoginApi } from "app/redux/reducer/userLogin";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userLoginReducer);
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
    const errors = Validate({
      username: taiKhoan,
      password: matKhau,
    });
    if (Object.keys(errors).length === 0) {
      dispatch(userLoginApi(loginForm));
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
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
