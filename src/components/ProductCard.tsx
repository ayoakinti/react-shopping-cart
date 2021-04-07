import bag from "../assets/images/bag.png";

function ProductCard() {
  return (
    <div className="text-center">
      <div className="product-image-container">
        <img src={bag} alt="bag" width="100%" height="100%" />
      </div>
      <p className="mt-1 mb-0">Category</p>
      <h5 className="mt-1 mb-0">Modern Black House</h5>
      <p className="mt-1 mb-0">Ratings</p>
      <h5 className="mt-1 mb-0">$35.00</h5>
    </div>
  );
}

export default ProductCard;
