import styled from "styled-components";

export const SideBarWrap = styled.div`
  background-color: #212529;
  width: 270px;
  height: 100%;
  position: fixed;
  top: ${(props) => (props.changePosition ? "0px" : "56px")};
  left: ${(props) => (props.slide ? "0" : "-230px")};
  transition: ease 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SideBarMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px;
`;
export const SideBarTitle = styled.div`
  width: 100%;
  background-color: #212529;
  outline: none;
  display: flex;
  color: #fff;
  align-items: center;
  cursor: pointer;
  height: 50px;
  &:hover {
    color: #ff1e2c;
    padding-left: 5px;
    font-size: 1.1rem;
    transition: ease 0.5s;
  }
`;
export const SideBarBody = styled.ul`
  display: flex;
  flex-direction: column;
  jutify-content: center;
  list-style: none;
`;

export const SideBarItem = styled.li`
  color: #fff;
  padding: 10px 20px;
  font-size: 0.9rem;
  width: 100%;
  height: 40px;
  cursor: pointer;
  &:hover {
    color: #ff1c2e;
    font-size: 15px;
    padding-left: 22px;
    transition: ease 0.5s;
  }
`;
export const SideBarControl = styled.div`
  color: #fff;
  text-align: right;
  width: 100%;
  margin-right: 15px;
`;
