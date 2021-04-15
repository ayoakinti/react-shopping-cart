import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../reducers/modules/productReducer";

type ProductCardProps = {
  product: IProduct;
};

function ProductCardColumn({ product }: ProductCardProps) {
  const [showProductOptions, setShowProductOptions] = useState<boolean>(false);
  return (
    <div className="d-flex align-items-center mb-1">
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
              {/* <li className="nav-icons">
                <FontAwesomeIcon icon={faHeart} />
              </li> */}
              <li className="nav-icons">
                <FontAwesomeIcon icon={faCartArrowDown} />
              </li>
            </ul>
          </div>
          <Link to='/products/product' className="w-100 btn btn-primary">Quick view</Link>
        </div>
      </div>
      <div className="px-1 w-50">
        {/* <p className="m-0">Category</p> */}
        <h5 className="mt-1 mb-0">{product.name}</h5>
        {/* <p className="mt-1 mb-0">Ratings</p> */}
        <h5 className="mt-1 mb-0">${product.price}</h5>
      </div>
    </div>
  );
}

export default ProductCardColumn;
