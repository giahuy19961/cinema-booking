import { Container } from "react-bootstrap";
import styled from "styled-components";

export const MovieInfoWrap = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  // @media (max-width: 768px) {
  //   height: 100vh;
  // }
`;
export const MovieBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.background};
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #cccccc;
  background-position: center;
  filter: blur(50px);
`;
export const MovieInfoContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px 20px;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0;
    font-size: 0.7rem;
  }
`;
export const MovieInfoContent = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fff;
`;
export const MovieInfoImg = styled.img`
  width: 200px;
  height: 300px;
  margin-right: 30px;
  border: 0.5px solid #fff;
  box-shadow: 5px 5px 5px grey;
  @media (max-width: 768px) {
    width: 150px;
    height: 250px;
    margin-right: 5px;
  }
`;
export const MovieInfoTitle = styled.div``;
export const MovieShowTime = styled.p`
  margin: 10px 0;
`;
export const MovieShowName = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;
export const BuyTicketBtn = styled.button`
  color: #ff2c1f;
  width: 60%;
  border: none;
  text-align: center;
  border-color: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
    background-color: #ff2c1f;
    transform: scale(1.05);
    transition: ease-in-out 0.3s;
  }
`;
export const MovieRating = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #ff2c1f;
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const MovieInfoContentRating = styled(MovieInfoContent)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MovieInfoImgWrap = styled.div`
  position: relative;
`;
export const MoviePlayTrailer = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &:hover {
    border-color: #ff2c1f;
    transition: all 0.2s ease-in-out;
  }
`;
