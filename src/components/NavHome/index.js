import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./style";

const NavHome = () => {
  return (
    <Nav>
      <NavLink smooth to='/#'>
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink smooth to='/#menu' activeStyle={{ color: "#ff2c1f" }}>
          Menu
        </NavLink>
        <NavLink smooth to='/#movies' activeStyle={{ color: "#ff2c1f" }}>
          Movie
        </NavLink>
        <NavLink smooth to='/#theaters' activeStyle={{ color: "#ff2c1f" }}>
          Theater
        </NavLink>

        <NavBtn>
          <NavBtnLink to='/login'>SignIn</NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  );
};

export default NavHome;
