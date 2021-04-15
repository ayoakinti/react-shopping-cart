import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCart, removeFromCart } from "../actions/cart";
import { ICart } from "../reducers/modules/cartReducer";
import { useState } from "react";

export type ICartItemProps = {
  item: ICart;
};

function CartItem({ item }: ICartItemProps) {
  const [message, setMessage] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveFromCart = async (quantity: number) => {
    setMessage('')
    await dispatch(
      removeFromCart({
        cartId: item._id,
        quantity,
      })
    );
    setMessage("Item removed from Cart successfully")
    setTimeout(() => {
      setMessage('')
    }, 2000)
  };

  const handleAddToCart = async () => {
    setMessage('')
    await dispatch(
      addToCart({
        productId: item.productId,
        color: item.color,
        size: item.size,
        quantity: 1,
      })
    );
    setMessage("Item added to Cart successfully")
    setTimeout(() => {
      setMessage('')
    }, 2000)
  };

  const closeToast = () => {
    setMessage("");
  };

  const ViewProduct = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <div>
      {message && (
        <div className="toast">
          <div className="row align-items-center">
            <div className="col-10">{message}</div>
            <div className="col-2 text-end">
              <FontAwesomeIcon
                onClick={closeToast}
                className="cursor-pointer"
                icon={faTimes}
              />
            </div>
          </div>
        </div>
      )}
      <div className="cart-item">
        <div className="row">
          <div className="col-md-6">
            <div className="row align-items-center">
              <div className="col-3">
                <img
                  onClick={() => ViewProduct(item.productId)}
                  src={item.image}
                  alt="cartImage"
                  width="100%"
                  height="80px"
                />
              </div>
              <div className="col-9">
                <div>{item.name}</div>
                <div>
                  color: <b>{item.color}</b> size: <b>{item.size}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row align-items-center h-100">
              <div className="col-2">${item.sizeObject.price}</div>
              <div className="col-6 d-flex justify-content-center">
                <button
                  className="cart-btn"
                  onClick={() => handleRemoveFromCart(1)}
                >
                  -
                </button>
                <div className="cart-input">{item.quantity}</div>
                <button className="cart-btn" onClick={handleAddToCart}>
                  +
                </button>
              </div>
              <div className="col-2">
                ${item.quantity * item.sizeObject.price}
              </div>
              <div className="col-2 text-center">
                <FontAwesomeIcon
                  icon={faTimes}
                  size="lg"
                  className="cursor-pointer"
                  onClick={() => handleRemoveFromCart(item.quantity)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
