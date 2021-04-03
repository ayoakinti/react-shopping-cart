import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Products from "../views/Products";
import Settings from "../views/settings/Settings";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState } from "react";

function Container() {
  const [mobileSideMenu, setMobileSideMenu] = useState<boolean>(false);

  const openSideMenuContainer = () => {
    setMobileSideMenu(true);
  };

  const closeSideMenuContainer = () => {
    setMobileSideMenu(false);
  };

  return (
    <div className="main-wrapper">
      <Router>
        <SideMenu mobileSideMenu={mobileSideMenu} closeSideMenuContainer={closeSideMenuContainer} />
        <Header openSideMenuContainer={openSideMenuContainer} />
        <Switch>
          <Redirect exact from="/" to="/products" />
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Container;
