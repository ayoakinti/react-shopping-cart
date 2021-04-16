import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./views/products/Products";
import ViewProduct from "./views/products/ViewProduct";
import Categories from "./views/categories/Categories";
import CategoryProducts from "./views/categories/CategoryProducts";
import Cart from "./views/cart/Cart";
import Home from "./views/Home";

import Login from "./views/auth/Login";
import ForgotPassword from "./views/auth/ForgotPassword";
import Register from "./views/auth/Register";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
        <Header />
        <ScrollToTop>
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

            <Route path="/category/:categoryId">
              <CategoryProducts />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            {/* <Route path="/settings">
          <Settings />
        </Route> */}
          </Switch>
        </ScrollToTop>
        <Footer />
    </Router>
  );
}

export default App;
