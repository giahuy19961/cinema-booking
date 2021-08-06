import styled from "styled-components";

import {
  ListCinema,
  ListMovies,
  MenuTheater,
  TheatersContainer,
  TheaterWrap,
} from "components/Theaters/styles";

export const ListMoviesDetail = styled(ListMovies)`
  overflow-y: hidden;
`;
export const ListDetailCinema = styled(ListCinema)`
  height: 600px;
  overflow-y: scroll;
  @media (max-width: 1400px) {
    height: 160px;
    display: flex;
    flex-direction: row;
    border: none;
    overflow-x: atuo;
    overflow-y: hidden;
    width: 100%;
  }
`;
export const ListDetailTheater = styled(MenuTheater)`
  flex-direction: row;
  justify-content: flex-start;
  // align-items: center;
  border: none;
  width: 100%;
  flex-wrap: nowrap;
  height: 100px;
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
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
