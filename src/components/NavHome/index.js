import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./style";

const NavHome = () => {
  return (
    <Nav>
      <NavLink to='/'>
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='/movie/:id' activeStyle>
          Detail
        </NavLink>
        <NavLink to='/service' activeStyle>
          Home
        </NavLink>
        <NavLink to='/service' activeStyle>
          Home
        </NavLink>
        <NavLink to='/carousel' activeStyle>
          Home
        </NavLink>
        <NavBtn>
          <NavBtnLink to='/login'>SignIn</NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  );
};

export default NavHome;
