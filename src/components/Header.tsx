import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../assets/images/Fixxo..svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../reducers/rootReducer";
import { CartState, ICart } from "../reducers/modules/cartReducer";

function Header() {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const { cart } = useSelector<AppState, CartState>(state => state.cart);

  const totalCartAmount = (items: ICart[]) => {
    return items.reduce(
      (accumulator: number, item) => accumulator + item.quantity,
      0
    );
  };

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
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="d-flex align-items-center">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="nav-icons">
                <NavLink to='/cart'><FontAwesomeIcon icon={faCartArrowDown} /></NavLink>
                <div className="cart-notification">{totalCartAmount(cart)}</div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
