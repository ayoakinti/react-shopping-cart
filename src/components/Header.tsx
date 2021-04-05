import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Cart from "./Cart";
import { CartState } from "../reducers/modules/cartReducer";
import { AppState } from "../reducers/rootReducer";
import { useSelector } from "react-redux";
import { IProduct } from "../reducers/modules/productReducer";

function Header({ openSideMenuContainer }: any) {
  const openSideMenu = () => {
    openSideMenuContainer();
  };

  const { cart } = useSelector<AppState, CartState>((state) => state.cart);

  const totalCartAmount = (items: IProduct[]) => {
    return items.reduce(
      (accumulator: number, item) => accumulator + item.amount,
      0
    );
  };

  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="">
      <header className="topbar">
        <div className="w-100 d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon
              onClick={openSideMenu}
              className="menu-icon mr-2"
              icon={faBars}
              size="2x"
            />
            <span className="font-20">E-commerce Site</span>
          </div>
          <div
            className="position-relative cursor-pointer"
            onClick={toggleCart}
          >
            <FontAwesomeIcon icon={faCartPlus} size="2x" />
            <div className="cart-notification">{totalCartAmount(cart)}</div>
          </div>
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
