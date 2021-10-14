import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Validate } from "utils/Validate";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { userLoginApi } from "app/redux/reducer/userLogin";
import { ButtonSubmit } from "pages/Home/AccountPage/style";
import { FormContainer, FormLink } from "./style";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.userLoginReducer);
  const [loginForm, setLoginForm] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  let { taiKhoan, matKhau } = loginForm;
  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    setErrorMessage({ ...errorMessage, [event.target.name]: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validate({
      taiKhoan: taiKhoan,
      matKhau: matKhau,
    });
    if (Object.keys(errors).length === 0) {
      dispatch(userLoginApi(loginForm));
    } else {
      setErrorMessage(errors);
    }
  };
  if (isAuthenticated) {
    // return <Redirect to='back' />;
    history.goBack();
  }
  return (
    <FormContainer>
      <h1 className='form-header'>Đăng nhập</h1>
      <Form className='form ' onSubmit={handleSubmit}>
        <Form.Group
          className={`mt-3 mb-3 form-input ${
            errorMessage.taiKhoan ? "border-danger-no-title color-danger" : ""
          }`}
        >
          <Form.Control
            type='text'
            placeholder='Tên đăng nhập'
            name='taiKhoan'
            required
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
          className={` form-input ${
            errorMessage.matKhau ? "border-danger-no-title color-danger" : ""
          }`}
        >
          <Form.Control
            type='password'
            placeholder='Mật khẩu'
            name='matKhau'
            value={matKhau}
            onChange={handleChange}
            required
          />
          {errorMessage.matKhau ? (
            <Form.Label>{errorMessage.matKhau}</Form.Label>
          ) : (
            ""
          )}
        </Form.Group>
      </Form>
      <ButtonSubmit
        variant='success'
        type='submit'
        onClick={handleSubmit}
        className='form-submit'
      >
        Login
      </ButtonSubmit>
      <FormLink>
        Bạn chưa có tài khoản ?
        <Link className='form-link' to='/register'>
          Đăng ký
        </Link>
      </FormLink>
    </FormContainer>
  );
};

export default LoginForm;
