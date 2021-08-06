import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeTemplate from "pages/Home";
import { routeHome, routeAdmin } from "routes";
import PageNotFound from "pages/NotFound";
import ProtectedRoute from "routes/ProtectedRoute";
import AdminTemplate from "pages/Admin";

function App() {
  const renderHome = (routes) => {
    return routes?.map(
      ({ exact, path, Component, authRoute, isLogin }, index) => {
        if (isLogin) {
          return (
            <ProtectedRoute
              key={index}
              exact={exact}
              path={path}
              authRoute={authRoute ? authRoute : ""}
              Component={Component}
            />
          );
        } else {
          return (
            <HomeTemplate
              key={index}
              exact={exact}
              path={path}
              Component={Component}
              authRoute={authRoute ? authRoute : ""}
            />
          );
        }
      }
    );
  };
  const renderAdmin = (routes) => {
    return routes?.map(
      ({ exact, path, Component, authRoute, isLogin, isAdmin }, index) => {
        if (isLogin) {
          return (
            <ProtectedRoute
              key={index}
              exact={exact}
              path={path}
              authRoute={authRoute ? authRoute : ""}
              Component={Component}
              isAdmin={isAdmin}
            />
          );
        } else {
          return (
            <AdminTemplate
              key={index}
              exact={exact}
              path={path}
              Component={Component}
              authRoute={authRoute ? authRoute : ""}
            />
          );
        }
      }
    );
  };

  return (
    <div className='App'>
      <Router>
        <Switch>
          {renderHome(routeHome)}
          {renderAdmin(routeAdmin)}
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
