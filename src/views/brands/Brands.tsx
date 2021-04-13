// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllProducts } from "../../actions/products";
// import { AppState } from "../../reducers/rootReducer";
// import { ProductState } from "../../reducers/modules/productReducer";
// import ProductItem from "../../components/ProductItem";
// import Loader from "../../components/Loader";

// import ProductCard from "../../components/ProductCard";

function Brands() {
  //   const dispatch = useDispatch();

  //   const { products } = useSelector<AppState, ProductState>(
  //     (state) => state.product
  //   );

  //   const [isLoading, setIsLoading] = useState<boolean>(true);

  //   useEffect(() => {
  //     const fetchAPIs = async () => {
  //       try {
  //         await dispatch(fetchAllProducts());
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.error(error.response.data.message);
  //       }
  //     };
  //     fetchAPIs();
  //   }, [dispatch]);

  return (
    <div>
      {/* {isLoading && <Loader />} */}
      <div className="page-wrapper">
        <div className="container-fluid">
          {/* <div className="row">
            {products &&
              products.map((product) => (
                <div key={product.id} className="col-lg-3 col-xl-2 col-md-4">
                  <ProductItem product={product} />
                </div>
              ))}
          </div> */}
          <div className="container-fixed my-4">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div>
                  <h4
                    className="mb-1 pb-1"
                    style={{ borderBottom: "1px solid #c4cad0" }}
                  >
                    All Brands
                  </h4>
                  <div className="px-1">
                    <div className="d-flex align-items-center">
                      <input type="checkbox" name="brandType" id="brandType" />
                      <label className="ml-1" htmlFor="brandType">
                        Nike
                      </label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" name="brandType" id="brandType" />
                      <label className="ml-1" htmlFor="brandType">
                        Nike
                      </label>
                    </div>
                    <div className="d-flex align-items-center">
                      <input type="checkbox" name="brandType" id="brandType" />
                      <label className="ml-1" htmlFor="brandType">
                        Nike
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <h4
                    className="mb-1 pb-1"
                    style={{ borderBottom: "1px solid #c4cad0" }}
                  >
                    Price
                  </h4>
                  <ul className="px-1">
                    <li>Under $25</li>
                    <li>$25 to $50</li>
                    <li>$50 to $100</li>
                    <li>$100 to $200</li>
                    <li>$200 & above</li>
                  </ul>
                </div>
                <div>
                  <h4
                    className="mb-1 pb-1"
                    style={{ borderBottom: "1px solid #c4cad0" }}
                  >
                    Color
                  </h4>
                  <div className="px-1">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <input type="checkbox" name="color" id="color" />
                        <label className="ml-1" htmlFor="color">
                          Black
                        </label>
                      </div>
                      <div>3</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <input type="checkbox" name="color" id="color" />
                        <label className="ml-1" htmlFor="color">
                          Blue
                        </label>
                      </div>
                      <div>3</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <input type="checkbox" name="color" id="color" />
                        <label className="ml-1" htmlFor="color">
                          Yellow
                        </label>
                      </div>
                      <div>3</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-9 col-md-8">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <ProductCard />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <ProductCard />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
