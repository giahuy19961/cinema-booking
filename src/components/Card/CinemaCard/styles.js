import styled from "styled-components";

export const CardWrap = styled.div`
  display: block;
  width: 320px;
  height: 100px;
  border: 1px solid #ccc;
  display: flex;
  background-color: #fff;
  justify-content: center;
  margin: 10px auto;
  cursor: pointer;
  @media (max-width: 1200px) {
    width: 280px;
  }
`;
export const CardImg = styled.img`
  padding: 10px;
  display: block;
  width: 30%;
  height: 100%;
  border-color: #fff;
  @media (max-width: 768px) {
    width: 160px;
    height: 100px;
    margin: 5px auto;
  }
`;
export const CardBody = styled.div`
  padding: 15px 0;
  width: 65%;
`;
export const CardTitle = styled.h2`
  text-align: left;
  font-size: 1rem;
  color: #000;
`;
export const CardLink = styled.p`
  font-size: 0.6rem;
`;
