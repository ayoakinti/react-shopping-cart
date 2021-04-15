import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../actions/cart";
import CartItem from "../../components/CartItem";
import Loader from "../../components/Loader";
import { CartState, ICart } from "../../reducers/modules/cartReducer";
import { AppState } from "../../reducers/rootReducer";

function Cart() {
  const { cart } = useSelector<AppState, CartState>((state) => state.cart);

  const shippingCost = 10;

  const totalCartCost = (items: ICart[]) => {
    return items.reduce(
      (accumulator: number, item) =>
        accumulator + item.quantity * item.sizeObject.price,
      0
    );
  };

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        await dispatch(fetchCart());
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchAPIs();
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="container-fixed my-4">
            <div className="row justify-content-end">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-2">Price</div>
                  <div className="col-6 text-center">Quantity</div>
                  <div className="col-2">Total</div>
                  <div className="col-2 text-center">Delete</div>
                </div>
              </div>
            </div>
            {cart.length > 0 ? (
              cart.map((item) => <CartItem key={item._id} item={item} />)
            ) : (
              <div>You have no item in your cart</div>
            )}
            <div className="form-group">
              <input
                type="text"
                name="promoCode"
                placeholder="PROMO CODE"
                id="promoCode"
                className="form-control"
                style={{ width: "250px" }}
              />
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="bg-white p-2">
                  <h3>Order Summary</h3>
                  <div className="row">
                    <div className="col-2">Subtotal</div>
                    <div className="col-10">${totalCartCost(cart)}</div>
                  </div>
                  <div className="row">
                    <div className="col-2">Shipping Cost</div>
                    <div className="col-10">${shippingCost}</div>
                  </div>
                  <div className="row">
                    <div className="col-2">Total</div>
                    <div className="col-10">${totalCartCost(cart) + shippingCost}</div>
                  </div>
                  <button className="btn btn-primary w-100">
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
