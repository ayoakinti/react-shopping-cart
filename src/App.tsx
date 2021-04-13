import "./assets/scss/style.scss";
// import { AppState } from "./reducers/rootReducer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import SideMenu from "./components/SideMenu";
import Products from "./views/products/Products";
import ViewProduct from "./views/products/ViewProduct";
import Categories from "./views/categories/Categories";
import Brands from "./views/brands/Brands";
import CategoryProducts from "./views/categories/CategoryProducts";
import Settings from "./views/settings/Settings";
import Cart from "./views/cart/Cart";
import Home from "./views/Home";

import Login from "./views/auth/Login";
import ForgotPassword from "./views/auth/ForgotPassword";
import Register from "./views/auth/Register";
// import { useSelector } from "react-redux";
// import { useState } from "react";

function App() {
  // interface IAuth {
  //   token: IToken;
  // }

  // interface IToken {
  //   token: string;
  // }

  // const [mobileSideMenu, setMobileSideMenu] = useState<boolean>(false);

  // const openSideMenuContainer = () => {
  //   setMobileSideMenu(true);
  // };

  // const closeSideMenuContainer = () => {
  //   setMobileSideMenu(false);
  // };

  return (
    <Router>
      {/* <SideMenu
        mobileSideMenu={mobileSideMenu}
        closeSideMenuContainer={closeSideMenuContainer}
      /> */}
      <Header />
      {/* <Header openSideMenuContainer={openSideMenuContainer} /> */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>

        <Route path="/products/:productId">
          <ViewProduct />
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
        <Route path="/cart">
          <Cart />
        </Route>
        {/* <Route path="/brands">
          <Brands />
        </Route> */}
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
