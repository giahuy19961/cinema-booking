import { Button, FormLabel } from "react-bootstrap";
import styled from "styled-components";

export const AccountContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  min-height: 680px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #555;
  border: 1px solid grey;
  max-width: 1200px;
  min-width: 900px;
  margin: auto;
  @media (max-width: 1200px) {
    min-width: 700px;
  }
  @media (max-width: 768px) {
    min-width: 500px;
  }
`;
export const AccountTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1400px) {
    flex-direction: row;
  }
`;
export const AccountTab = styled.div`
  color: ${(props) => (props.active ? "#ff2c1f" : "#000")};
  padding: 10px;
  border-right: ${(props) => (props.active ? "4px solid #ff2c1f" : "none")};
  width: 100%;
  font-size: ${(props) => (props.active ? "1.1rem" : "normal")};
  cursor: pointer;
  &:hover {
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  @media (max-width: 1400px) {
    border-right: none;
    border-bottom: ${(props) => (props.active ? "4px solid #ff2c1f" : "none")};

    &:hover {
      font-size: 1rem;
      transition: all 0.3s ease;
    }
  }
  @media (max-width: 768px) {
    font-size: ${(props) => (props.active ? "0.8rem" : "0.7rem")};
    &:hover {
      font-size: 0.8rem;
      transition: all 0.3s ease;
    }
  }
`;
export const AccountContent = styled.div`
  color: #000;
  min-height: 650px;
  background-color: #fff;
`;
export const HistoryContent = styled.div`
  width: 100%;
  height: 610px;
  overflow-y: scroll;
`;
export const AccountTextTitle = styled.div`
  font-size: 1.2rem;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const AccountText = styled.div`
  font-size: 1.1rem;
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
export const ButtonSubmit = styled(Button)`
  margin: 20px 5px;
  width: 250px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: ${(props) => (props.large ? "200px" : "150px")};
  }
`;
export const ExtraButton = styled(Button)`
  margin: 20px 5px;
  width: 300px;
  @media (max-width: 1200px) {
    font-size: 0.6rem;
  }
`;
