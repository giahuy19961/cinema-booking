import styled from "styled-components";

export const ChartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin: 10px;
`;
export const WrapCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 5px grey;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
  width: 100%;
`;
export const TextTitle = styled.div`
  font-size: 14px;
`;
export const TextValue = styled.div`
  color: #ff0000;
  font-size: 25px;
`;
export const ChartContent = styled.div`
  box-shadow: 5px 5px 5px grey;
  width: 100%;
  border: 1px solid #ccc;
  padding: 25px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;
export const WrapButton = styled.button`
  width: 140px;
  height: 40px;
  margin: 5px;
  background-color: #f26d6d;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 2px;
  font-size: 16px;
  &:hover {
    background-color: #ff0000;
    color: #fff;
    font-size: 17px;
    transition: ease 0.5s;
  }
`;
export const BtnWrap = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  width: 90%;
  justify-content: flex-end;
`;
