import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomCategories } from "../../actions/categories";
import { CategoryState } from "../../reducers/modules/categoryReducer";
import { AppState } from "../../reducers/rootReducer";
// import ProductItem from "../../components/redundant/ProductItem";
import { useParams } from "react-router";
import Loader from "../../components/Loader";

function CategoryProducts() {
  const { singleCollection } = useSelector<AppState, CategoryState>(
    (state) => state.category
  );

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { category }: any = useParams();

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        await dispatch(fetchCustomCategories(category));
        setIsLoading(false);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchAPIs();
  }, [category, dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            {singleCollection &&
              singleCollection.map((product) => (
                <div key={product._id} className="col-lg-3 col-md-6">
                  <div className="card">
                    {/* <ProductItem product={product} /> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
