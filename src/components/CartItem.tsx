import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  addToCart,
  addToTokenlessCart,
  removeFromCart,
  removeFromTokenlessCart,
} from "../actions/cart";
import { ICart } from "../reducers/modules/cartReducer";
import { useState } from "react";
import { AppState } from "../reducers/rootReducer";
import { AuthState } from "../reducers/modules/authReducer";

export type ICartItemProps = {
  item: ICart;
};

function CartItem({ item }: ICartItemProps) {
  const { token } = useSelector<AppState, AuthState>((state) => state.auth);

  const [message, setMessage] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveFromCart = async (quantity: number) => {
    setMessage("");
    if (token) {
      await dispatch(
        removeFromCart({
          cartId: item._id,
          quantity,
        })
      );
    } else {
      let cartInput: any = localStorage.getItem("cartInput");
      cartInput = JSON.parse(cartInput);
      const inputIndex = cartInput.findIndex(
        (cartItem: any) =>
          cartItem.productId === item.productId &&
          cartItem.color === item.color &&
          cartItem.size === item.size
      );
      if (cartInput[inputIndex].quantity - quantity === 0) {
        if(inputIndex === 0){
          cartInput.shift()
        } else {
          cartInput.splice(1, inputIndex);
        }
      } else {
        cartInput[inputIndex].quantity = cartInput[inputIndex].quantity - quantity;
      }

      let cartOutput: any = localStorage.getItem("cartOutput");
      cartOutput = JSON.parse(cartOutput);

      const index = cartOutput.findIndex(
        (cartItem: any) =>
          cartItem.productId === item.productId &&
          cartItem.color === item.color &&
          cartItem.size === item.size
      );
      if (cartOutput[index].quantity - quantity === 0) {
        if(index === 0){
          cartOutput.shift()
        } else {
        cartOutput.splice(1, index);
        }
      } else {
        cartOutput[index].quantity = cartOutput[index].quantity - quantity;
      }
      dispatch(removeFromTokenlessCart(cartOutput));
      localStorage.setItem("cartInput", JSON.stringify(cartInput));
      localStorage.setItem("cartOutput", JSON.stringify(cartOutput));
    }
    setMessage("Item removed from Cart successfully");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleAddToCart = async () => {
    setMessage("");
    if (token) {
      await dispatch(
        addToCart({
          productId: item.productId,
          color: item.color,
          size: item.size,
          quantity: 1,
        })
      );
    } else {
      let cartInput: any = localStorage.getItem("cartInput");
      cartInput = JSON.parse(cartInput);
      const inputIndex = cartInput.findIndex(
        (inputItem: any) =>
          inputItem.productId === item.productId &&
          inputItem.color === item.color &&
          inputItem.size === item.size
      );
      if (inputIndex !== -1) {
        cartInput[inputIndex].quantity = cartInput[inputIndex].quantity + 1;
      } else {
        cartInput.push({
          productId: item.productId,
          color: item.color,
          size: item.size,
          quantity: 1,
        });
      }

      let cartOutput: any = localStorage.getItem("cartOutput");
      cartOutput = JSON.parse(cartOutput);

      const index = cartOutput.findIndex(
        (cartItem: any) =>
          cartItem.productId === item.productId &&
          cartItem.color === item.color &&
          cartItem.size === item.size
      );
      cartOutput[index].quantity = cartOutput[index].quantity + 1;
      dispatch(addToTokenlessCart(cartOutput));

      localStorage.setItem("cartInput", JSON.stringify(cartInput));
      localStorage.setItem("cartOutput", JSON.stringify(cartOutput));
    }
    setMessage("Item added to Cart successfully");
    setTimeout(() => {
      setMessage("");
    }, 2000);
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
                  className='cursor-pointer'
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
              <div className="col-2 col-xs-4">${item.sizeObject.price}</div>
              <div className="col-6 col-xs-8 d-flex justify-content-center">
                <button
                  className="cart-btn"
                  onClick={() => handleRemoveFromCart(1)}
                >
                  -
                </button>
                <div className="cart-div">{item.quantity}</div>
                <button className="cart-btn" onClick={handleAddToCart}>
                  +
                </button>
              </div>
              <div className="col-2 col-xs-3">
                ${(item.quantity * item.sizeObject.price).toFixed(2)}
              </div>
              <div className="col-2 col-xs-3 text-center">
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
