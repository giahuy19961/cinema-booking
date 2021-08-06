import { ListMoviesDetail } from "components/ShowTime/styles";
import { TheatersContainer, TheaterWrap } from "components/Theaters/styles";
import styled from "styled-components";

export const TheaterMobileCinema = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  width: 100%;
  border: none;
  max-height: 160px;
  overflow-x: auto;
  justify-content: space-between;
  overflow-y: hidden;
`;
export const TheaterMobileWrap = styled(TheaterWrap)`
  @media (max-width: 768px) {
    display: block;
  }
`;
export const TheatersMobileContainer = styled(TheatersContainer)`
  min-height: 700px;
  width: 100%;
  padding: 20px;
  overflow: hidden;
  max-height: none;
`;
export const ListMovieDetailMobile = styled(ListMoviesDetail)`
  height: 960px;
  overflow-y: auto;
`;
