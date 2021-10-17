import { Button, FormLabel } from "react-bootstrap";
import styled from "styled-components";
import BackApp from "../../../assets/img/backapp.jpg";

export const Container = styled.div`
  max-width: 1575px;
  margin: 0 auto;
  padding: 20px 50px;
  padding-top: 80px;
  color: #fff;
  @media (max-width: 1600px) {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export const AccountWrap = styled.div`
  height: calc(100vh - 100px);
  // background-color: #fff;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  gap: 20px;
  border-radius: 25px;
  @media (max-width: 1199px) {
    flex-direction: column;
  }
`;

export const AccountMenu = styled.ul`
  width: 310px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding-top: 10px;
  padding: 25px;
  gap: 10px;
  @media (max-width: 1199px) {
    flex-direction: row;
    width: 100%;
  }
  @media (max-width: 310px) {
    overflow-x: auto;
  }
`;
export const AccountTab = styled.li`
  color: ${(props) => (props.active ? "#ff2c1f" : "#fff")};
  padding: 10px;
  border-right: ${(props) => (props.active ? "4px solid #ff2c1f" : "none")};
  width: 100%;
  font-size: ${(props) => (props.active ? "1.1rem" : "1rem")};
  cursor: pointer;
  &:hover {
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  @media (max-width: 1199px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-bottom: ${(props) => (props.active ? "4px solid #ff2c1f" : "none")};
    border-right: none;
    font-size: 0.9rem;
    &:hover {
      font-size: 1rem;
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 310px) {
    font-size: 0.8rem;
    &:hover {
      font-size: 0.8rem;
      transition: all 0.3s ease;
    }
  }
`;
export const AccountContent = styled.div`
  flex: 1;
  padding: 10px 15px;
  overflow-y: auto;
  postion: relative;
  scroll-snap-type: y mandatory;
  scroll-padding-top: 15px;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
  }
  // &::-webkit-scrollbar-thumb:hover {
  //   background: var(--primary-color);
  // }
`;
export const HistoryContent = styled.div`
  width: 100%;
  overflow-y: auto;
`;
export const AccountTextTitle = styled.div`
  font-size: 1.2rem;
  text-align: left;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const AccountText = styled.div`
  font-size: 1.1rem;
  color: #fff;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const FormTitle = styled(FormLabel)`
  font-size: 1rem;

  text-align: left;
  font-weight: bold;
  color: #ff2c1f;
  width: 100%;
  margin-top: 15px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export const ButtonSubmit = styled.button`
  margin: 20px 5px;
  padding: 10px 25px;
  outline: none;
  color: #fff;
  border: none;
  border-radius: 25px;
  background-color: var(--primary-color);
  &:hover {
    background-color: #ff1c2f;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: ${(props) => (props.large ? "200px" : "150px")};
  }
`;

export const ExtraButton = styled(ButtonSubmit)`
  margin: 20px 5px;
  width: 300px;
  @media (max-width: 1200px) {
    font-size: 0.6rem;
  }
`;
export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  background-image: url(${BackApp});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const ButtonDetail = styled(ButtonSubmit)`
  margin: 0;
`;
export const TicketDetail = styled.div`
  ${AccountTextTitle} {
    color: #000;
  }
  ${AccountText} {
    color: #000;
  }
`;
export const EditProfileWrap = styled.div`
  ${AccountTextTitle} {
    color: #000;
  }
  ${AccountText} {
    color: #000;
  }
`;
export const EditPasswordWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  // height: 100%;
  & > form {
    width: 60%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
