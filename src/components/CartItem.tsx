import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cart";
import { IProduct } from "../reducers/modules/productReducer";

type CartItemProps = {
  product: IProduct;
};

function CartItem({ product }: CartItemProps) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = async (product: IProduct) => {
    try {
      await dispatch(removeFromCart(product));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = async (product: IProduct) => {
    try {
      await dispatch(addToCart(product));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="row cart-item">
      <div className="col-9">
        <h4>{product.title}</h4>
        <div className="row">
          <div className="col-3">
            <button
              onClick={() => handleRemoveFromCart(product)}
              className="cart-button"
            >
              -
            </button>
          </div>
          <div className="col-6 text-center">{product.amount}</div>
          <div className="col-3">
            <button
              onClick={() => handleAddToCart(product)}
              className="cart-button"
            >
              +
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p className="m-0">
              <b>Price: </b>₦{Math.round(product.price * 485).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="m-0">
              <b>Total: </b>₦{Math.round(product.price * 485 * product.amount).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <img
          src={product.image}
          alt={product.title}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default CartItem;
