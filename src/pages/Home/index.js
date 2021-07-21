import NavHome from "components/NavHome";
import React from "react";
import { Route } from "react-router-dom";

function HomeLayout({ children }) {
  return (
    <div>
      <NavHome />
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
