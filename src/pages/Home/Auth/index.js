import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import React from "react";
import {
  AuthImg,
  AuthImgWrap,
  AuthWrap,
  Container,
  FormWrap,
  Wrapper,
} from "./style";

const AuthHome = ({ authRoute }) => {
  let body;
  body = (
    <>
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </>
  );
  return (
    <Wrapper>
      <Container>
        <AuthWrap>
          <AuthImgWrap></AuthImgWrap>
          <FormWrap>{body}</FormWrap>
        </AuthWrap>
      </Container>
    </Wrapper>
  );
};

export default AuthHome;
