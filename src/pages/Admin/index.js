import NavAdmin from "components/NavAdmin";
import React from "react";
import { Route } from "react-router-dom";

export function AdminLayout({ children }) {
  return (
    <>
      <NavAdmin />
      {children}
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
