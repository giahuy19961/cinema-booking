import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const NavContainer = styled.nav`
  background: ${(props) =>
    props.isChangeBg
      ? "rgba(33, 33, 33, 0.882)"
      : "linear-gradient(to bottom,rgba(0,0,0,.7) ,rgba(0,0,0,0))"};
  box-shadow: none;
  height: 80px;
  display: flex;
  top: 0;
  justify-content: space-between;
  padding: 0.5rem 20px;
  z-index: 999;
  position: fixed;
  width: 100%;
  @media screen and (max-width: 768px) {
    background: ${(props) =>
      props.open
        ? "#000"
        : props.isChangeBg
        ? "rgba(33, 33, 33, 0.882)"
        : "linear-gradient(to bottom,rgba(0,0,0,.7) ,rgba(0,0,0,0))"};
    transition: background 0.05s;
  } ;
`;
export const Logo = styled(NavHashLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  &:hover {
    color: #ff2c1f;
  }
`;

export const NavLink = styled(Logo)`
  color: #fff;
  display: flex ;
  align-items: center;
  text-align: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  &:hover {
    color: #ff2c1f;
  }
  @media screen and (max-width: 768px) {
    margin: ${(props) => (props.showinfo ? "0 auto" : "40px auto")};
    max-height:${(props) => (props.showinfo ? "50px" : "100px")}
    width: 100%;
    text-align: center;
    display: block;
    
    font-size:${(props) => (props.showinfo ? "1.4rem" : "1.5rem")};
  }
`;
export const NavInfoLink = styled(NavLink)`
  @media screen and (max-width: 768px) {
    margin: 20px auto;
    font-size: 1.2rem;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    justify-content: flex-start;
    align-items: center;
    height: 92vh;
    background-color: #000;
    width: 100%;
    left: ${(props) => (props.open ? "0" : "100%")};
    transition: all 0.2s ease-in-out;
    z-index: 999;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  display: block;
  @media screen and (max-width: 768px) {
    margin: 20px auto;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ff2c1f;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #ff2c1f;
  }
`;
export const InfoWrap = styled(NavContainer)`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: transparent;
`;
export const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  top: 70px;
  right: 20px;
  padding: 10px 5px;
  min-width: 230px;
  min-height: 130px;
  display: none;
  border-radius: 5px;
`;
export const DropDownItem = styled(Link)`
  height: 50px;
  width: 100%;
  padding: 10px;
  display: block;
  &:hover {
    font-size: 1.1rem;
    background-color: #ff2c1f;
    transition: all 0.2s ease-in-out;
    color: #fff;
    border-radius: 5px;
  }
`;
export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  margin: auto;
  color: #ff2c1f;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  &:hover {
    font-size: 1.2rem;
    background-color: #ff2c1f;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`;

export const NavInfor = styled.div`
  display: flex;
  align-items: center;

  position: absolute;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    top: ${(props) => (props.open ? "40px" : "1000px")};

    justify-content: center;
    align-items: center;
    background-color: #000;
    width: 100%;
    left: 0;

    transition: all 0.2s ease-in-out;
  }
`;
