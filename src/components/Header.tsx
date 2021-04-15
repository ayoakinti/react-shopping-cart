import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../assets/images/Fixxo..svg";
import { NavLink } from "react-router-dom";

function Header({ openSideMenuContainer }: any) {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

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
    </div>
  );
}

export default Header;
