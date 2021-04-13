import featured2 from "../assets/images/featured2.png";

function CartItem() {
  return (
    <div className="cart-item">
      <div className="row">
        <div className="col-md-6">
          <div className="row align-items-center">
            <div className="col-3">
              <img src={featured2} alt="featured1" width="100%" height="80px" />
            </div>
            <div className="col-9">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              minima?
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row align-items-center h-100">
            <div className="col-2">$30.00</div>
            <div className="col-6 d-flex justify-content-center">
              <button>-</button>
              <div>2</div>
              <button>+</button>
            </div>
            <div className="col-2">$30.00</div>
            <div className="col-2 text-end">$30.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
