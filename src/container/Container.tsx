import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Products from "../views/products/Products";
import Categories from "../views/categories/Categories";
import CategoryProducts from "../views/categories/CategoryProducts";
import Settings from "../views/settings/Settings";
import Home from "../views/Home"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
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
          {/* <Redirect exact from="/" to="/" /> */}
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/categories/:category">
            <CategoryProducts />
          </Route>
          <Route path="/categories">
            <Categories />
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
