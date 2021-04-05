import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../actions/categories";
import { CategoryState } from "../../reducers/modules/categoryReducer";
import { AppState } from "../../reducers/rootReducer";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

function Categories() {
  const { categories } = useSelector<AppState, CategoryState>(
    (state) => state.category
  );

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        await dispatch(fetchAllCategories());
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
            {categories &&
              categories.map((category) => (
                <div key={category} className="col-lg-3 col-md-6">
                  <Link to={`/categories/${category}`}>
                    <div className="card text-capitalize font-20">{category}</div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
