import styled, { keyframes } from "styled-components";
import { Account, Item, Menu } from "components/NavHomeRmk/style";
import { AiOutlineClose } from "react-icons/ai";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const scale = keyframes`
  0{
      font-size:18px;
  }
  50%{
     font-size:20px;
  }
  100%{
    font-size:18px;
  }
`;

export const Content = styled.div``;
export const Overlay = styled.div``;
export const SideUserInfo = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
  align-items: center;
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  & > span {
    color: var(--primary-color);
    font-weight: bold;
    text-transform: capitalize;
  }
`;
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  left: ${(props) => (props.isOpen ? 0 : "-100%")};
  right: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: all 0.5s linear;
  --content-width: 70%;
  @media (max-width: 768px) {
    --content-width: 100%;
  }
  ${Content} {
    width: var(--content-width);
    height: 100%;
    background-color: #fff;
    padding: 30px;
    padding-top: 50px;
  }
  ${Overlay} {
    width: calc(100% - var(--content-width));
    height: 100%;
    background-color: ${(props) => (props.isOpen ? "#000" : "transparent")};
    opacity: ${(props) => (props.isOpen ? ".5" : "0")};
    transition: opacity 1s ease-in-out;
    transition: background-color 1.5s ease-in-out;
  }
`;

export const SideMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SideItem = styled(Item)`
  position: relative;
  &:hover {
    animation: ${scale} 0.5s;
    transition: all 0.5s linear;
    &:after {
      content: "";
      width: 150px;
      height: 2px;
      background-color: var(--primary-color);
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
export const SideAccount = styled(Account)`
  display: flex;
  flex-direction: column;
  & > a {
    background: none;
    color: var(--primary-color);
    text-transform: uppercase;
    font-weight: bold;
  }
`;
export const SideBar = styled.div``;
export const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
  color: var(--primary-color);
  font-size: 40px;
  font-weight: bold;
`;

export const CloseWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  &:hover ${CloseIcon} {
    color: var(--hover-primary-color);
    animation: ${rotateAnimation} 2s;
  }
`;
