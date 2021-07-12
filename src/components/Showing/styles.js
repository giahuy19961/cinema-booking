import styled from "styled-components";
import { Container } from "react-bootstrap";

export const ShowingContainer = styled(Container)`
  margin: 80px auto;
`;

export const ShowingNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowingNavBtn = styled.button`
  height: 50px;
  width: 170px;
  margin: 10px;
  color: ${(props) => (props.active ? "#fff" : "#000")};
  background-color: ${(props) => (props.active ? " #ff2c1f" : "#fff")};
  padding: 10px;
  border-radius: 5px;
  border: none;
  &:hover {
    color: #fff;
    background-color: #ff2c1f;
  }
`;

export const ShowingCarousel = styled.div`
  margin: 20px auto;
`;
