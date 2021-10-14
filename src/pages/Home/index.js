import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import SidebarMobile from "components/MobileSideBar";
// import NavHome from "components/NavHome";
import NavHomeRmk from "components/NavHomeRmk";

export function HomeLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const setBody = (isOpen) => {
    if (isOpen) {
      document.body.classList.add("sidebar--open");
    } else {
      document.body.classList.remove("sidebar--open");
    }
  };

  useEffect(() => {
    setBody(isOpen);
  }, [isOpen]);
  return (
    <div>
      <NavHomeRmk setIsOpen={setIsOpen} isOpen={isOpen} />
      <SidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
    </div>
  );
}

function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} {...props} />
        </HomeLayout>
      )}
    />
  );
}

export default HomeTemplate;
