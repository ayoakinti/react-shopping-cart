import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../reducers/modules/productReducer";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cart";

type ProductCardProps = {
  product: IProduct;
};

function ProductCardColumn({ product }: ProductCardProps) {
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    await dispatch(
      addToCart({
        productId: product._id,
        color: product.priceList[0].color,
        size: product.priceList[0].sizes[0].size,
        quantity: 1,
      })
    );
    setMessage("Item added to Cart successfully");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const closeToast = () => {
    setMessage("");
  };

  const [showProductOptions, setShowProductOptions] = useState<boolean>(false);
  return (
    <div>
      {message && (
        <div className="toast">
          <div className="row align-items-center">
            <div className="col-10">{message}</div>
            <div className="col-2 text-end">
              <FontAwesomeIcon
                onClick={closeToast}
                className="cursor-pointer"
                icon={faTimes}
              />
            </div>
          </div>
        </div>
      )}
      <div className="product-column-card">
        <div
          className="product-image-column-container w-50"
          onMouseEnter={() => setShowProductOptions(true)}
          onMouseLeave={() => setShowProductOptions(false)}
        >
          <img
            src={product.image}
            alt="productImage"
            width="100%"
            height="100%"
          />
          <div
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
          </div>
        </div>
        <div className="px-1 w-50">
          <h5 className="mt-1 mb-0">{product.name}</h5>
          <p className="mt-1 mb-0">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCardColumn;
