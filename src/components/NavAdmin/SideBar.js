import React, { useEffect, useState } from "react";
import { SideBarData } from "./SideBarData";
import { SideBarControl, SideBarWrap } from "./style";
import { SubNav } from "./SuvNav";
import { BsTextIndentLeft, BsTextIndentRight } from "react-icons/bs";

const SideBarAdmin = ({ iconChange, handleSetIcon }) => {
  const [changePosition, setChangePosition] = useState(false);
  // const scrollWithOffset = (el) => {
  //   const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  //   const yOffset = -20;
  //   window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  // };
  const setPage = () => {
    if (window.pageYOffset >= 56) {
      setChangePosition(true);
    } else {
      setChangePosition(false);
    }
  };
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setPage);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", setPage);
    };
  });
  return (
    <SideBarWrap slide={iconChange} changePosition={changePosition}>
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
