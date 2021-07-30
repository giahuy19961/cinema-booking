import styled from "styled-components";

import { Container } from "react-bootstrap";

export const AccountContainer = styled(Container)`
  padding: 20px;
  background-color: #fff;
  min-height: 300px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #555;
  border: 1px solid grey;
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
  height: 100%;
  color: #000;
`;
