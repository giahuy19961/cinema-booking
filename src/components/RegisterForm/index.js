import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const RegisterForm = () => {
  return (
    <>
      <h1 className='form-header'>Đăng nhập</h1>
      <Form className='form'>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='text'
            placeholder='Tên đăng nhập'
            name='username'
            required
          />
        </Form.Group>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='password'
            placeholder='Mật khẩu'
            name='password'
            required
          />
        </Form.Group>
        <Form.Group className='mt-3 mb-3'>
          <Form.Control
            type='password'
            placeholder='Nhập lại mật khẩu'
            name='confirmPassword'
            required
          />
        </Form.Group>
        <Button variant='success' type='submit' className='form-submit'>
          Login
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
