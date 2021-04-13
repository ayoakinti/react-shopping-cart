import CartItem from "../../components/CartItem";

function Cart() {
  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="container-fixed my-4">
          <CartItem />
          <CartItem />
          <CartItem />
          <div className="form-group">
              <input type="text" name="promoCode" placeholder='PROMO CODE' id="promoCode" className='form-control' style={{width: '250px'}} />
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
                <button className='btn btn-primary w-100'>Proceed to checkout</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
