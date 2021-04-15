// import featured2 from "../assets/images/featured2.png";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCart, removeFromCart } from "../actions/cart";
import { ICart } from "../reducers/modules/cartReducer";

export type ICartItemProps = {
  item: ICart;
};

function CartItem({ item }: ICartItemProps) {
  const dispatch = useDispatch();
  const history = useHistory()

  const handleRemoveFromCart = async (quantity: number) => {
    await dispatch(
      removeFromCart({
        cartId: item._id,
        quantity
      })
    );
  };

  const handleAddToCart = async () => {
    await dispatch(
      addToCart({
        productId: item.productId,
        color: item.color,
        size: item.size,
        quantity: 1,
      })
    );
  };

  const ViewProduct = (id: string) => {
    history.push(`/products/${id}`)
  }

  return (
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
              <button onClick={() => handleRemoveFromCart(1)}>-</button>
              <div>{item.quantity}</div>
              <button onClick={handleAddToCart}>+</button>
            </div>
            <div className="col-2">
              ${item.quantity * item.sizeObject.price}
            </div>
            <div className="col-2 text-end" onClick={() => handleRemoveFromCart(item.quantity)}>$30.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
