import styled from "styled-components";
import BackApp from "../../../assets/img/backapp.jpg";
import AuthImgBg from "../../../assets/img/authimg.jpg";

export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  background-image: url(${BackApp});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const Container = styled.div`
  max-width: 1575px;
  margin: 0 auto;
  padding: 20px 50px;
  padding-top: 80px;
  color: #000;
  @media (max-width: 1600px) {
    width: 100%;
    padding-right: 25px;
    padding-left: 25px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export const AuthWrap = styled.div`
  height: calc(100vh - 100px);
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  // align-items: center;
  // flex-direction: column;
  // justify-content: center;
  border-radius: 25px;
`;
export const AuthImgWrap = styled.div`
  width: 500px;
  height: auto;
  background-image: url(${AuthImgBg});
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  flex-shrink: 0;
  @media (max-width: 1199px) {
    display: none;
  }
`;
export const AuthImg = styled.img``;
export const FormWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
