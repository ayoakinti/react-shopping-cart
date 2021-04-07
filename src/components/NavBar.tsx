import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className='sidemenu ml-3'>
      <ul>
        <li>
          <NavLink exact={true} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/brands">Brands</NavLink>
        </li>
        <li>
          <NavLink to="/products/product">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
