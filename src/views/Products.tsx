import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../actions/products";
import { AppState } from "../reducers/rootReducer";
import { ProductState } from "../reducers/modules/productReducer";
import ProductItem from "../components/ProductItem";

function Products() {
  const dispatch = useDispatch();

  const { singleProduct, products } = useSelector<AppState, ProductState>(
    (state) => state.product
  );

  useEffect(() => {
    try {
      dispatch(fetchAllProducts());
    } catch (error) {
      console.error(error.response.data.message);
    }
  }, []);

  console.log(singleProduct, products, "products");
  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          {products &&
            products.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-6">
                <ProductItem product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
