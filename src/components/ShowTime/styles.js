import styled from "styled-components";

import {
  ListCinema,
  ListMovies,
  MenuTheater,
  TheatersContainer,
  TheaterWrap,
} from "components/Theaters/styles";

export const ListMoviesDetail = styled(ListMovies)``;
export const ListDetailCinema = styled(ListCinema)`
  height: 600px;
  @media (max-width: 1400px) {
    height: 160px;
    display: flex;
    flex-direction: row;
    border: none;
    width: 100%;
  }
`;
export const ListDetailTheater = styled(MenuTheater)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;

  width: 100%;
  flex-wrap: nowrap;
  height: 80px;
`;
export const TheaterDetailWrap = styled(TheaterWrap)`
  @media (max-width: 768px) {
    display: block;
  }
`;
export const TheatersDetailContainer = styled(TheatersContainer)`
  @media (max-width: 1400px) {
    height: 100%;
    overflow: hidden;
    padding: 10px;
  }
`;
