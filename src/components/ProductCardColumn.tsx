import bag from "../assets/images/bag.png";

function ProductCardColumn() {
  return (
    <div className="d-flex align-items-center mb-1">
      <div className="product-image-column-container w-50">
        <img src={bag} alt="bag" width="100%" height="100%" />
      </div>
      <div className='px-1'>
        <p className="m-0">Category</p>
        <h5 className="mt-1 mb-0">Modern Black House</h5>
        <p className="mt-1 mb-0">Ratings</p>
        <h5 className="mt-1 mb-0">$35.00</h5>
      </div>
    </div>
  );
}

export default ProductCardColumn;
