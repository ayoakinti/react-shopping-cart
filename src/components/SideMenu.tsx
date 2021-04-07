import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { logout } from "../actions/auth";
import { useDispatch } from "react-redux";

type IProps = {
  mobileSideMenu: boolean;
  closeSideMenuContainer: any;
};

function SideMenu({ mobileSideMenu, closeSideMenuContainer }: IProps) {
  const dispatch = useDispatch();

  const closeSideMenu = () => {
    closeSideMenuContainer();
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div
        className={`mobile-sidemenu-mask ${mobileSideMenu ? "show" : ""}`}
        onClick={closeSideMenu}
      ></div>
      <aside className={`left-sidebar ${mobileSideMenu ? "mobile-show" : ""}`}>
        <div className="brand-logo mt-2 mb-0">
          <img src={logo} alt="brandlogo"></img>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="sidebar-item" onClick={closeSideMenu}>
              <NavLink className="sidebar-link" to="/" exact={true}>
                <span className="">Home</span>
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={closeSideMenu}>
              <NavLink className="sidebar-link" to="/products">
                <span className="">Products</span>
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={closeSideMenu}>
              <NavLink className="sidebar-link" to="/categories">
                <span className="">Categories</span>
              </NavLink>
            </li>
            <li className="sidebar-item" onClick={closeSideMenu}>
              <NavLink className="sidebar-link" to="/settings">
                <span className="">Settings</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <div className="sidebar-link cursor-pointer" onClick={logoutUser}>
                <span className="">Logout</span>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default SideMenu;
