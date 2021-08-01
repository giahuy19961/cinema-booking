import { FormLabel } from "react-bootstrap";
import styled from "styled-components";

export const AccountContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  min-height: 600px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #555;
  border: 1px solid grey;
  width: 1200px;
`;
export const AccountTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
export const AccountContent = styled.div`
  color: #000;
`;
export const HistoryContent = styled.div`
  width: 100%;
  height: 650px;
  overflow-y: scroll;
`;
export const AccountTextTitle = styled.div`
  font-size: 1.2rem;
  text-align: left;
`;
export const AccountText = styled.div`
  font-size: 1.1rem;
  text-align: left;
`;
export const FormTitle = styled(FormLabel)`
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
  color: #ff2c1f;
  width: 100%;
  margin-top: 15px;
`;
