import React from "react";
import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Button } from "react-bootstrap";

const Wrap = styled.ul`
  display: flex;
  list-style: none;
`;
const Item = styled.li`
  width: 25px;
  height: 25px;
  border: 1px solid ${(props) => (props.active ? "grey" : "#000")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  display: flex;
  background-color: ${(props) => (props.active ? "#ff0000" : "#fff")};
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
    color: #fff;
    font-size: 1.2rem;
    transition: ease-in-out 0.4s;
  }
`;
const ButtonControl = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  border: none;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  padding: 1px;
  cursor: pointer;
`;
const PrevIcon = styled(GrPrevious)`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  & > * {
    stroke: ${(props) => (props.disabled ? "grey" : "black")};
  }
  &:hover > * {
    stroke: ${(props) => (props.disabled ? "grey" : "#ff0000")};
    stroke-width: ${(props) => (props.disabled ? "2" : "4")};
  }
  &:hover {
    transform: ${(props) => (props.disabled ? "" : "translateX(-12px)")};
    transition: ease-in-out 0.4s;
  }
`;
const NextIcon = styled(GrNext)`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  & > * {
    stroke: ${(props) => (props.disabled ? "grey" : "black")};
  }
  &:hover > * {
    stroke: ${(props) => (props.disabled ? "grey" : "#ff0000")};
    stroke-width: ${(props) => (props.disabled ? "2" : "4")};
  }
  &:hover {
    transform: ${(props) => (props.disabled ? "" : "translateX(12px)")};
    transition: ease-in-out 0.4s;
  }
`;

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const renderItem = () => {
    let content = [];
    for (let i = 0; i < totalPages; i++) {
      content.push(i);
    }
    return content.map((pageNum, index) => {
      return (
        <Item
          onClick={() => {
            setCurrentPage(pageNum + 1);
          }}
          active={currentPage === pageNum + 1}
        >
          {pageNum + 1}
        </Item>
      );
    });
  };
  return (
    <>
      <Wrap>
        <ButtonControl
          disabled={currentPage < 2 ? true : false}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PrevIcon disabled={currentPage < 2 ? true : false} />
        </ButtonControl>
        {renderItem()}
        <ButtonControl
          disabled={currentPage > totalPages - 1 ? true : false}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <NextIcon disabled={currentPage > totalPages - 1 ? true : false} />
        </ButtonControl>
      </Wrap>
    </>
  );
};

export default Pagination;
