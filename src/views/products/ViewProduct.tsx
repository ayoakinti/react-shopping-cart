import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchCustomCategories } from "../../actions/categories";
import { fetchSingleProduct } from "../../actions/products";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";
import { CategoryState } from "../../reducers/modules/categoryReducer";
import { ProductState } from "../../reducers/modules/productReducer";
import { AppState } from "../../reducers/rootReducer";
// import ProductCard from "../../components/ProductCard";

function ViewProduct() {
  const { productId }: any = useParams();

  const { singleCollection } = useSelector<AppState, CategoryState>(
    (state) => state.category
  );

  const { singleProduct } = useSelector<AppState, ProductState>(
    (state) => state.product
  );

  console.log(singleProduct);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPIs = async () => {
      const res: any = await dispatch(fetchSingleProduct(productId));
      await dispatch(fetchCustomCategories(res.product.categoryId));
      setIsLoading(false);
    };
    fetchAPIs();
  }, [dispatch]);

  const Additional = () => (
    <div>
      {singleProduct &&
        singleProduct.product.extras.map((extra) => <p key={extra}>{extra}</p>)}
    </div>
  );

  const Shipping = () => (
    <div>{singleProduct && <div>{singleProduct?.product.shipping}</div>}</div>
  );

  const Reviews = () => (
    <div>
      {singleProduct &&
        singleProduct.reviews.map((review: any) => (
          <div>
            <h4>
              {review.user.name.firstName} {review.user.name.lastName}
            </h4>
            <p>{review.createdAt}</p>
            <p>{review.rating}</p>
            <p>{review.remark}</p>
            <p>{review.note}</p>
          </div>
        ))}
    </div>
  );

  const [currentTab, setCurrentTab] = useState<string>("additional");

  const showAdditionalInfo = () => {
    switch (currentTab) {
      case "additional":
        return <Additional />;
      case "shipping":
        return <Shipping />;
      case "reviews":
        return <Reviews />;
    }
  };
  return (
    <div>
      {isLoading && <Loader />}
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
                <p>*******</p>
                <h4>${singleProduct?.product.price}</h4>
                <p>{singleProduct?.product.description}</p>
                <p>Category: {singleProduct?.category}</p>
                <p>Brand: {singleProduct?.brand}</p>
                <p>Seller: {singleProduct?.seller}</p>
                <div className="row align-items-center">
                  <div className="col-2">
                    <h4>Size</h4>
                  </div>
                  <div className="col-10">
                    <select name="size" id="size">
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
                    <select name="color" id="color">
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
                  <div className="col-10 d-flex align-items-center">
                    <div>
                      <button>-</button>
                      <input type="number" />
                      <button>+</button>
                    </div>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="row">
                <div className="col-md-6">
                  <ul
                    className="py-1 view-product-nav"
                    style={{ borderBottom: "1px solid #c4cad0" }}
                  >
                    <li
                      className={`${
                        currentTab === "additional" ? "active" : ""
                      }`}
                      onClick={() => setCurrentTab("additional")}
                    >
                      Additional
                    </li>
                    <li
                      className={`${currentTab === "shipping" ? "active" : ""}`}
                      onClick={() => setCurrentTab("shipping")}
                    >
                      Shipping & returns
                    </li>
                    <li
                      className={`${currentTab === "reviews" ? "active" : ""}`}
                      onClick={() => setCurrentTab("reviews")}
                    >
                      Reviews
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ height: "140px" }} className="overflow-y-auto">
                {showAdditionalInfo()}
              </div>
            </div>
            <div className="div">
              <h4>Related Products</h4>
              <div className="row mt-3">
                {singleCollection ? (
                  singleCollection?.map((product) => (
                    <div key={product._id} className="col-md-3">
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
