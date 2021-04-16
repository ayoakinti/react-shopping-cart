import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../actions/cart";
import CartItem from "../../components/CartItem";
import Loader from "../../components/Loader";
import PaystackGateway from "../../components/PayStackGateway";
import { AuthState } from "../../reducers/modules/authReducer";
import { CartState, ICart } from "../../reducers/modules/cartReducer";
import { AppState } from "../../reducers/rootReducer";

function Cart() {
  const { cart } = useSelector<AppState, CartState>((state) => state.cart);
  const { token } = useSelector<AppState, AuthState>((state) => state.auth);

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
    if (token) {
      fetchAPIs();
    }
    setIsLoading(false);
  }, [dispatch, token]);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="container-fixed my-4">
            {cart.length > 0 && (
              <div className="row justify-content-end">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-2 col-xs-4">Price</div>
                    <div className="col-6 col-xs-8 text-center">Quantity</div>
                    <div className="col-2 col-xs-3">Total</div>
                    <div className="col-2 col-xs-3 text-center">Delete</div>
                  </div>
                </div>
              </div>
            )}
            {cart.length > 0 ? (
              cart.map((item) => <CartItem key={item._id} item={item} />)
            ) : (
              <div>You have no item in your cart</div>
            )}
            {cart.length > 0 && (
              <div>
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
                        <div className="col-md-2 col-sm-4">Subtotal</div>
                        <div className="col-md-10 col-sm-8">
                          ${totalCartCost(cart).toFixed(2)}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 col-sm-4">Shipping Cost</div>
                        <div className="col-md-10 col-sm-8">${shippingCost.toFixed(2)}</div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 col-sm-4">Total</div>
                        <div className="col-md-10 col-sm-8">
                          ${(totalCartCost(cart) + shippingCost).toFixed(2)}
                        </div>
                      </div>
                      
                      <PaystackGateway
                        amount={parseInt(
                          ((totalCartCost(cart) + shippingCost) * 460).toFixed(
                            2
                          )
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
