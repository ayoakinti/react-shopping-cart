import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../actions/cart";
import CartItem from "../../components/CartItem";
import { CartState } from "../../reducers/modules/cartReducer";
import { AppState } from "../../reducers/rootReducer";

function Cart() {
  const { cart } = useSelector<AppState, CartState>((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        await dispatch(fetchCart());
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchAPIs();
  }, [dispatch]);

  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="container-fixed my-4">
          {
            cart.length > 0 ? cart.map(item => (
              <CartItem key={item._id} item={item} />
            )) : <div>
              You have no item in your cart
            </div>
          }
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
                  <div className="col-10">$30.00</div>
                </div>
                <div className="row">
                  <div className="col-2">Shipping Cost</div>
                  <div className="col-10">$10.00</div>
                </div>
                <div className="row">
                  <div className="col-2">Total</div>
                  <div className="col-10">$40.00</div>
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
  );
}

export default Cart;
