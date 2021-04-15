import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../actions/cart";
import { fetchCustomCategories } from "../../actions/categories";
import { fetchSingleProduct } from "../../actions/products";
import Loader from "../../components/Loader";
import ProductAdditionalInfo from "../../components/ProductAdditionalInfo";
import ProductCard from "../../components/ProductCard";
import { CategoryState } from "../../reducers/modules/categoryReducer";
import { ProductState } from "../../reducers/modules/productReducer";
import { AppState } from "../../reducers/rootReducer";
// import ProductCard from "../../components/ProductCard";

function ViewProduct() {
  const [message, setMessage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const { singleCollection } = useSelector<AppState, CategoryState>(
    (state) => state.category
  );

  const { singleProduct } = useSelector<AppState, ProductState>(
    (state) => state.product
  );

  const handleAddToCart = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    await dispatch(
      addToCart({
        productId: singleProduct?.product._id as string,
        color,
        size,
        quantity,
      })
    );
    setMessage("Item added to Cart successfully");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const getCurrentPrice = () => {
    const singleProductColorArray = singleProduct?.product.priceList.filter(
      (item) => item.color === color
    );

    const singleProductSizeObject =
      singleProductColorArray &&
      singleProductColorArray[0].sizes.filter(
        (item: { size: string }) => item.size === size
      );

    const currentPrice = singleProductSizeObject[0].price;
    return currentPrice;
  };

  const handleSizeChange = (e: any) => {
    setSize(e.target.value);
    // setCurrentPrice(getCurrentPrice());
  };

  const handleColorChange = (e: any) => {
    setColor(e.target.value);
    // setCurrentPrice(getCurrentPrice());
  };

  const { productId }: any = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPIs = async () => {
      const res: any = await dispatch(fetchSingleProduct(productId));
      setColor(res.product.priceList[0].color);
      setSize(res.product.priceList[0].sizes[0].size);
      await dispatch(fetchCustomCategories(res.product.categoryId));
      setIsLoading(false);
    };
    fetchAPIs();
  }, [dispatch, productId]);

  const closeToast = () => {
    setMessage("");
  };

  return (
    <div>
      {isLoading && <Loader />}
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
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="container-fixed my-4">
            <div className="row">
              <div className="col-md-6">
                <div className="single-product-container">
                  <img
                    src={singleProduct?.product.image}
                    alt="featured1"
                    height="100%"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="mt-0">{singleProduct?.product.name}</h4>
                {/* <p>*******</p> */}
                {color !== "" && size !== "" && (
                  <h4>Price: ${getCurrentPrice()}</h4>
                )}
                <p>{singleProduct?.product.description}</p>
                <div className="text-capitalize row">
                  <div className="col-2">Category: </div>
                  <div className="col-10">
                    <p>
                      <b>{singleProduct?.category}</b>
                    </p>
                  </div>
                  <div className="col-2">Brand: </div>
                  <div className="col-10">
                    <p>
                      <b>{singleProduct?.brand}</b>
                    </p>
                  </div>
                  <div className="col-2">Seller: </div>
                  <div className="col-10">
                    <p>
                      <b>{singleProduct?.seller}</b>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-2">
                    <h4>Size</h4>
                  </div>
                  <div className="col-10">
                    <select
                      name="size"
                      id="size"
                      onChange={handleSizeChange}
                      value={size}
                    >
                      {singleProduct &&
                        singleProduct.product.priceList[0].sizes.map(
                          (size: any) => (
                            <option key={size._id} value={size.size}>
                              {size.size}
                            </option>
                          )
                        )}
                    </select>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-2">
                    <h4>Color</h4>
                  </div>
                  <div className="col-10">
                    <select
                      name="color"
                      id="color"
                      onChange={handleColorChange}
                      value={color}
                    >
                      {singleProduct &&
                        singleProduct.product.priceList.map((colorList) => (
                          <option key={colorList.color} value={colorList.color}>
                            {colorList.color}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-2">
                    <h4>Qty</h4>
                  </div>
                  <div className="col-10">
                    <form
                      className="row mx-0 align-items-center"
                      onSubmit={handleAddToCart}
                    >
                      <div className="mr-2 mb-1">
                        <button
                          type="button"
                          disabled={quantity <= 1}
                          className="cart-btn"
                          onClick={() => setQuantity(quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          className="cart-input"
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value))
                          }
                        />
                        <button
                          type="button"
                          className="cart-btn"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="mb-1">
                        <button type="submit" className="btn btn-primary">
                          Add to Cart
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <ProductAdditionalInfo singleProduct={singleProduct} />

            <div className="div">
              <h4 className="text-center">Related Products</h4>
              <div className="row mt-3">
                {singleCollection ? (
                  singleCollection?.map((product) => (
                    <div
                      key={product._id}
                      className="col-lg-2 col-md-3 col-sm-6 d-flex-center"
                    >
                      <ProductCard product={product} />
                    </div>
                  ))
                ) : (
                  <div>No products for this collection</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
