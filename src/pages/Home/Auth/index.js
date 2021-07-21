import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import React from "react";
import { AuthContent, AuthWrap } from "./style";

const AuthHome = ({ authRoute }) => {
  let body;
  body = (
    <>
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </>
  );
  return (
    <AuthWrap>
      <AuthContent>{body}</AuthContent>
    </AuthWrap>
  );
};

export default AuthHome;
