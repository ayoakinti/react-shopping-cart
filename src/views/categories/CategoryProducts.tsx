import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomCategories } from "../../actions/categories";
import { CategoryState } from "../../reducers/modules/categoryReducer";
import { AppState } from "../../reducers/rootReducer";
import { useParams } from "react-router";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";

function CategoryProducts() {
  const { singleCollection } = useSelector<AppState, CategoryState>(
    (state) => state.category
  );

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { categoryId }: any = useParams();

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        await dispatch(fetchCustomCategories(categoryId));
        setIsLoading(false);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchAPIs();
  }, [categoryId, dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            {singleCollection &&
              singleCollection.map((product) => (
                <div key={product._id} className="col-md-4 col-lg-2 col-sm-6 d-flex-center">
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
