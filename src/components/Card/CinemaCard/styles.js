import styled from "styled-components";

export const CardWrap = styled.div`
  display: block;
  width: 300px;
  min-height: 110px;
  border: 1px solid #ccc;
  display: flex;
  background-color: #fff;
  justify-content: center;
  box-shadow: 2px 2px 2px 1px grey;
  margin: 10px 20px;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 280px;
  }
  @media (max-width: 1000px) {
    width: 210px;
    margin: 10px 5px;
  }
`;
export const CardImg = styled.img`
  padding: 10px;
  display: block;
  width: 120px;
  height: 100%;
  border-color: #fff;
  @media (max-width: 1400px) {
    height: inherit;
  }
  @media (max-width: 768px) {
    width: 160px;
    height: 100px;
    margin: 5px auto;
  }
`;
export const CardBody = styled.div`
  padding: 10px 0;
  width: 160px;
`;
export const CardTitle = styled.h2`
  text-align: left;
  font-size: 1rem;
  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }
  color: #000;
`;
export const CardLink = styled.p`
  font-size: 0.6rem;
`;
