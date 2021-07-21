import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { userLoginApi } from "app/redux/reducer/userLogin";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  let { username, password } = loginForm;
  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
            name='username'
            required
            onChange={handleChange}
            value={username}
          />
        </Form.Group>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='password'
            placeholder='Mật khẩu'
            name='password'
            value={password}
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
