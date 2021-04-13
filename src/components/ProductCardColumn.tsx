import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import bag from "../assets/images/bag.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCardColumn() {
  const [showProductOptions, setShowProductOptions] = useState<boolean>(false);
  return (
    <div className="d-flex align-items-center mb-1">
      <div
        className="product-image-column-container w-50"
        onMouseEnter={() => setShowProductOptions(true)}
        onMouseLeave={() => setShowProductOptions(false)}
      >
        <img src={bag} alt="bag" width="100%" height="100%" />
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
      <div className="px-1">
        <p className="m-0">Category</p>
        <h5 className="mt-1 mb-0">Modern Black House</h5>
        <p className="mt-1 mb-0">Ratings</p>
        <h5 className="mt-1 mb-0">$35.00</h5>
      </div>
    </div>
  );
}

export default ProductCardColumn;
