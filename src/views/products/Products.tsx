import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../actions/products";
import { AppState } from "../../reducers/rootReducer";
import { ProductState } from "../../reducers/modules/productReducer";
import ProductItem from "../../components/ProductItem";
import Loader from "../../components/Loader";

function Products() {
  const dispatch = useDispatch();

  const { products } = useSelector<AppState, ProductState>(
    (state) => state.product
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        await dispatch(fetchAllProducts());
        setIsLoading(false);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchAPIs();
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            {products &&
              products.map((product) => (
                <div key={product.id} className="col-lg-3 col-xl-2 col-md-4">
                  <ProductItem product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
