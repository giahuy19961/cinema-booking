import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  min-height: 300px;
  border: 1px solid #ccc;
  display: flex;
  background-color: #fff;
  justify-content: center;
  margin: 10px auto;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px #ff2c1f;
`;
export const CardImg = styled.img`
  display: block;
  width: 30%;
  height: 100%;
  margin: 0 10px;
  border-color: #fff;
  @media (max-width: 768px) {
    width: 160px;
    height: 100px;
    margin: 5px auto;
  }
`;
export const CardBody = styled.div`
  display: flex;
  padding: 15px 0;
  width: 100%;
  max-height: 50%;
`;
export const CardTitle = styled.h2`
  text-align: left;
  color: #ff2c1f;
  font-size: ${(props) => (props.fontSize === "normal" ? "1rem" : "1.5rem")};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;
export const CardShowBody = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const CardShow = styled(Link)`
  width: 100px;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ff2c1f;
  text-align: center;
  color: #ff2c1f;
  border-radius: 5px;
  background-color: #fff;
  text-decoration: none;
  &:hover {
    background-color: #ff2c1f;
    width: 105px;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
`;
