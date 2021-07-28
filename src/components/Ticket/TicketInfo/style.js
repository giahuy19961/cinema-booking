import { CardBody } from "components/Card/MovieShowCard/styles";
import styled from "styled-components";

export const TicketBtn = styled.button`
  width: 90%;
  color: #fff;
  height: 50px;
  border-radius: 5px;
  background-color: green;
  margin: 10px auto;
  border: none;
  font-size: 1.2rem;
  outline: none;
  &:hover {
    color: #fff;
    background-color: #ff2c1f;
    font-size: 1.3rem;
    transition: all 0.2s ease-in-out;
  }
`;

export const TicketCardBody = styled(CardBody)`
  min-height: 150px;
`;
