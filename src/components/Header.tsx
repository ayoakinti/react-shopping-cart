import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faHeart,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cart from "./Cart";
// import { CartState } from "../reducers/modules/cartReducer";
// import { AppState } from "../reducers/rootReducer";
// import { useSelector } from "react-redux";
// import { IProduct } from "../reducers/modules/productReducer";
import logo from "../assets/images/Fixxo..svg";
import { NavLink } from "react-router-dom";
// import NavBar from "./NavBar";

function Header({ openSideMenuContainer }: any) {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  // const { cart } = useSelector<AppState, CartState>((state) => state.cart);

  // const totalCartAmount = (items: IProduct[]) => {
  //   return items.reduce(
  //     (accumulator: number, item) => accumulator + item.amount,
  //     0
  //   );
  // };

  const [cartOpen, setCartOpen] = useState<boolean>(false);

  // const toggleCart = () => {
  //   setCartOpen(!cartOpen);
  // };

  return (
    <div className="">
      <header className="topbar">
        <div className="w-100 d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              className="mr-2 sidemenu-icon"
              onClick={() => setOpenSideMenu(true)}
            />
            <img src={logo} alt="logo" />
            {/* <NavBar /> */}
            <div
              className={`mobile-sidemenu-mask ${openSideMenu ? "show" : ""}`}
              onClick={() => setOpenSideMenu(false)}
            ></div>
            <nav className={`sidemenu ml-3 ${openSideMenu ? "show" : ""}`}>
              <ul>
                <li onClick={() => setOpenSideMenu(false)}>
                  <NavLink exact={true} to="/">
                    Home
                  </NavLink>
                </li>
                <li onClick={() => setOpenSideMenu(false)}>
                  <NavLink to="/categories">Categories</NavLink>
                </li>
                {/* <li onClick={() => setOpenSideMenu(false)}>
                  <NavLink to="/brands">Brands</NavLink>
                </li> */}
                {/* <li onClick={() => setOpenSideMenu(false)}>
                  <NavLink to="/products/product">Products</NavLink>
                </li> */}
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="d-flex align-items-center">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              {/* <li className="nav-icons">
                <FontAwesomeIcon icon={faSearch} />
              </li>
              <li className="nav-icons">
                <FontAwesomeIcon icon={faHeart} />
              </li> */}
              <li className="nav-icons">
                <NavLink to='/cart'><FontAwesomeIcon icon={faCartArrowDown} /></NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="cart-container-mask"
        ></div>
      )}
      <div className={`cart-container ${cartOpen ? "show" : ""}`}>
        <Cart />
      </div>
    </div>
  );
}

export default Header;
