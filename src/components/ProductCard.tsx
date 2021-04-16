// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../reducers/modules/productReducer";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../actions/cart";

type ProductCardProps = {
  product: IProduct;
};

function ProductCard({ product }: ProductCardProps) {
  // const dispatch = useDispatch();

  // const handleAddToCart = async () => {
  //   await dispatch(
  //     addToCart({
  //       productId: product._id,
  //       color: product.priceList[0].color,
  //       size: product.priceList[0].sizes[0].size,
  //       quantity: 1,
  //     })
  //   );
  // };
  // const [showProductOptions, setShowProductOptions] = useState<boolean>(false);

  return (
    <div className="product-card">
      <div
        className="product-image-container"
        
      >
        <Link
            to={`/products/${product._id}`}>
        <img
          src={product.image}
          alt="productImage"
          width="100%"
          height="100%"
        />
        </Link>
        {/* <div
          className={`product-image-options ${
            showProductOptions ? "show" : ""
          }`}
        >
          <div className="d-flex justify-content-end" style={{ flex: "2" }}>
            <ul className="d-flex flex-column p-1">
              <li className="nav-icons" onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </li>
            </ul>
          </div>
          <Link
            to={`/products/${product._id}`}
            className="w-100 btn btn-primary"
          >
            Quick view
          </Link>
        </div> */}
      </div>
      <div>
        <h5 className="mt-1 mb-0">{product.name}</h5>
        <p className="mt-1 mb-0">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
