import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { ExtraButton } from "pages/Home/AccountPage/style";
import { Button } from "react-bootstrap";

export const AdminContent = styled.div`
  margin-left: ${(props) => (props.slide ? "270px" : "0")};
  transition: ease 0.5s;
  @media (max-width: 1200px) {
    margin-left: ${(props) => (props.slide ? "270px" : "60px")};
  }
`;

export const AdminSearch = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: row;
  }
`;
export const SearchWrap = styled.form`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #ff0000;
  justify-content: space-between;
  border-radius: 5px;
`;
export const Search = styled.input`
  width: 250px;
  height: 38px;
  outline: none;
  padding-left: 15px;
  border: none;
  border-right: 1px solid #ff0000;
`;
export const SearchButton = styled(BsSearch)`
  width: 40px;
  height: 40px;
  color: #ff0000;
  margin-right: 4px;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #ff0000;
  }
`;
export const FormSelect = styled.select`
  border-radius: 5px;
  border: 1px solid grey;
  padding: 7px;
  color: grey;
`;
export const ButtonAdd = styled(ExtraButton)`
  margin: auto;
  background-color: #e5606b;
  outline: none;
  border: none;
  &:hover {
    background-color: #ff0000;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const TitlePc = styled.span`
  display: inline-block;
  @media (max-width: 1400px) {
    display: none;
  }
`;
export const ButtonUser = styled(Button)`
  background-color: #e5606b;
  border-radius: 5px;
  height: 45px;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ff0000;
    color: #fff;
  }
  @media (max-width: 1400px) {
    width: 45px;
  }
`;
export const CustomTd = styled.td`
  @media (max-width: 768px) {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
