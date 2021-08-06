import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeLayout } from "pages/Home";
import { AdminLayout } from "pages/Admin";

const ProtectedRoute = ({ Component, ...props }) => {
  const { isAuthenticated, data } = useSelector(
    (state) => state.userLoginReducer
  );
  if (!isAuthenticated) return <Redirect to={`/login`} />;
  if (isAuthenticated && props.isAdmin) {
    if (data.maLoaiNguoiDung !== "QuanTri") return <Redirect to='*' />;
    return (
      <Route
        render={(...propsComponent) => {
          return (
            <AdminLayout {...props}>
              <Component {...props} {...propsComponent} />
            </AdminLayout>
          );
        }}
      />
    );
  } else {
    return (
      <Route
        render={(...propsComponent) => {
          return (
            <HomeLayout {...props}>
              <Component {...props} {...propsComponent} />
            </HomeLayout>
          );
        }}
      />
    );
  }
};

export default ProtectedRoute;
