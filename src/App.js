import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeTemplate from "pages/Home";
import { routeHome } from "routes";
import PageNotFound from "pages/NotFound";

function App() {
  const renderHome = (routes) => {
    return routes?.map(({ exact, path, Component, authRoute }, index) => (
      <HomeTemplate
        key={index}
        exact={exact}
        path={path}
        Component={Component}
        authRoute={authRoute ? authRoute : ""}
      />
    ));
  };

  return (
    <div className='App'>
      <Router>
        <Switch>
          {renderHome(routeHome)}
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
