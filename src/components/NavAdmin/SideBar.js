import React from "react";
import { SideBarData } from "./SideBarData";
import { SideBarControl, SideBarWrap } from "./style";
import { SubNav } from "./SuvNav";
import { BsTextIndentLeft, BsTextIndentRight } from "react-icons/bs";

const SideBarAdmin = ({ iconChange, handleSetIcon }) => {
  return (
    <SideBarWrap slide={iconChange}>
      <SideBarControl onClick={() => handleSetIcon()}>
        {iconChange ? (
          <BsTextIndentRight size={30} />
        ) : (
          <BsTextIndentLeft size={30} />
        )}
      </SideBarControl>
      {SideBarData?.map((item, index) => (
        <SubNav item={item} key={index} />
      ))}
    </SideBarWrap>
  );
};

export default SideBarAdmin;
