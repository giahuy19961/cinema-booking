import styled from "styled-components";
import background from "assets/img/backapp.jpg";

export const AuthWrap = styled.div`
  position: relative;
  background: url("${background}") no-repeat center center/cover;
  height: 100vh;
`;
export const AuthContent = styled.div`
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;