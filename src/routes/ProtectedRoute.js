import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {HomeLayout} from 'pages/Home'

const ProtectedRoute = ({ Component, ...props }) => {
  const { isAuthenticated,data } = useSelector(
    (state) => state.userLoginReducer
  );
  if (!isAuthenticated) return <Redirect to={`/login`} />;
  return (
    <Route
      render={(...propsComponent) => {
        return (
          <HomeLayout {...props}>
              <Component {...props} {...propsComponent}/>
          </HomeLayout>
        );
      }}
    />
  );
};

export default ProtectedRoute;
