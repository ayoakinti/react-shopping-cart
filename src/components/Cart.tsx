import { useSelector } from "react-redux";
import { CartState } from "../reducers/modules/cartReducer";
import { IProduct } from "../reducers/modules/productReducer";
import { AppState } from "../reducers/rootReducer";
import CartItem from "./CartItem";
import PaystackGateway from "./PayStackGateway";

function Cart() {
  const { cart } = useSelector<AppState, CartState>((state) => state.cart);

  const totalCartPrice = (items: IProduct[]) => {
   return items.reduce((accumulator: number, item) => accumulator + Math.round(item.amount * item.price * 485), 0)
  }

  return (
    <div>
      <h4 className="p-2 mb-0">Your Shopping Cart</h4>
      {cart.length === 0 && <p>You have no item in your cart.</p>}
      {cart.length > 0 && (
        <div>
          <div className="cart-items overflow-y-auto">
            {cart.map((product) => (
              <div key={product.id}>
                <CartItem product={product} />
              </div>
            ))}
          </div>
          <h4 className='px-2 pt-2'>
            Total: ₦{totalCartPrice(cart).toLocaleString()}
          </h4>
          <PaystackGateway amount={totalCartPrice(cart)} />
        </div>
      )}
    </div>
  );
}

export default Cart;
