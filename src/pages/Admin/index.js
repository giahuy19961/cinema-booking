import NavAdmin from "components/NavAdmin";
import SideBarAdmin from "components/NavAdmin/SideBar";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import { AdminContent } from "./style";

export function AdminLayout({ children }) {
  const [iconChange, setIconChange] = useState(false);
  const handleSetIcon = () => {
    setIconChange(!iconChange);
  };
  return (
    <>
      <NavAdmin handleSetIcon={handleSetIcon} iconChange={iconChange} />
      <SideBarAdmin iconChange={iconChange} handleSetIcon={handleSetIcon} />
      <AdminContent slide={iconChange}>{children}</AdminContent>
    </>
  );
}

function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <AdminLayout>
          <Component {...propsComponent} {...props} />
        </AdminLayout>
      )}
    />
  );
}

export default AdminTemplate;
