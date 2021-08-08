import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarBody, SideBarMenu, SideBarItem, SideBarTitle } from "./style";

export const SubNav = ({ item }) => {
  const [open, setOpen] = useState(false);
  const renderSideBody = (navbody) => {
    return navbody.map((navItem, index) => (
      <SideBarItem key={index} as={Link} to={navItem.path}>
        {navItem.icon} {navItem.title}
      </SideBarItem>
    ));
  };
  return (
    <SideBarMenu>
      {item.path ? (
        <SideBarTitle as={Link} to={item.path}>
          {item.icon}
          {item.title}
        </SideBarTitle>
      ) : (
        <SideBarTitle
          onClick={() => {
            setOpen(!open);
          }}
        >
          {item.icon}
          {item.title}
          {item.subNav ? (open ? item.iconClose : item.iconOpen) : null}
        </SideBarTitle>
      )}

      {item.subNav && open ? (
        <SideBarBody>{renderSideBody(item.subNav)}</SideBarBody>
      ) : null}
    </SideBarMenu>
  );
};
