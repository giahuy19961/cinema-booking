import { Container } from "react-bootstrap";
import styled from "styled-components";

export const TheaterWrap = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Header = styled.h2`
  color: #ff2c1f;
  text-align: center;
  margin: 20px auto;
`;
export const TheatersContainer = styled(Container)`
  background-color: #fff;
  border: 1px solid #000;
  padding: 15px 5px;
  max-height: 700px;
  margin: 20px auto;
`;

export const MenuTheater = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  border-right: 1px solid grey;
  align-items: center;
  height: 95%;
  padding-left: 0;
  justify-content: space-between;
`;

export const Logo = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${(props) => props.logo});
  background-position: center;
  background-repeat: no-repeat;
  border: 0.5px solid #bdc3c2;
  background-size: cover;
  margin: 15px 10px;
`;

export const ListCinema = styled(MenuTheater)`
  align-items: center;
  height: 680px;
  overflow-y: scroll;
  justify-content: flex-start;
`;
export const ListMovies = styled(ListCinema)``;
