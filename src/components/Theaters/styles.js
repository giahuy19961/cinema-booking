import { Container } from "react-bootstrap";
import styled from "styled-components";

export const TheaterWrap = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Header = styled.h1`
  color: #ff2c1f;
  padding-top: 50px;

  text-align: center;
  margin: 20px auto;
  font-size: 2rem;
`;
export const TheatersContainer = styled(Container)`
  background-color: #fff;
  border: 1px solid #000;
  padding: 15px 5px;
  max-height: 700px;
  min-height: 550px;
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
export const ListMovies = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 95%;
  padding-left: 0;
`;

export const TheaterTimeNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const TheaterTime = styled.li`
  margin: 5px;
  display: block;
  width: 50px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff2c1f;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#ff2c1f" : "white")};
  color: ${(props) => (props.active ? "white" : "#ff2c1f")};
`;
