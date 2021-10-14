import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
// "rgba(33, 33, 33, 0.882)"
export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  background: ${(props) =>
    props.isChangeBg
      ? "linear-gradient(to bottom,rgba(33, 33, 33, 0.882) ,rgba(0,0,0,0))"
      : "linear-gradient(to bottom,rgba(0,0,0,.7) ,rgba(0,0,0,0))"};
  position: fixed;
  width: 100%;
  top: 0;
  height: 80px;
  z-index: 999;
`;
export const Container = styled.div`
  max-width: 1575px;
  margin: 0 auto;
  padding: 0 50px;
  @media (max-width: 1600px) {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export const LogoWrap = styled(Link)`
  height: 80px;
  display: flex;
  align-items: center;
`;
export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  display: block;
  object-fit: contain;
  flex-shrink: 0;
  width: 100%;
  height: 80%;
  background-color: inherit;
  @media (max-width: 350px) {
    height: 50px;
  }
`;
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  @media (max-width: 1199px) {
    display: none;
  }
`;
export const Item = styled.li`
  padding: 10px 20px;

  & > a {
    color: #ff2c1f;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
export const UserMenu = styled.ul`
  position: absolute;
  bottom: -160px;
  list-style: none;
  padding: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;
  display: none;
  width: 200px;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  & > li {
    padding: 10px 0;
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
  }
`;
export const Account = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  &:hover {
    ${UserMenu} {
      display: block;
    }
  }
  gap: 5px;
  @media (max-width: 1199px) {
    display: none;
  }
`;
export const SignIn = styled(Link)`
  display: block;
  padding: 10px 20px;
  background-color: #ff2c1f;
  color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: #f0653a;
    color: #fff;
  }
`;

export const Register = styled(SignIn)``;
export const UserInfo = styled.div`
  padding: 10px 5px;
  height: 60px;
  cursor: pointer;
  display: flex;
  position: relative;
  gap: 5px;
  justify-content: center;
  @media (max-width: 1199px) {
    display: block;
  }

  & > img {
    object-fit: cover;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50%;
  }
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 1;
    color: var(--primary-color);
  }
  &:after {
    content: "";
    position: absolute;
    width: 200px;
    height: 20px;
    bottom: -20px;
    left: 0;
    background-color: transparent;
    z-index: 1000;
  }
`;

export const MobileIcon = styled(GiHamburgerMenu)`
  height: 40px;
  width: 40px;
  padding: 5px;
  display: none;
  color: #ff2c1f;
  font-size: 26px;
  border: 1px solid #ff2c1f;
  @media (max-width: 1199px) {
    display: block;
  }
`;
