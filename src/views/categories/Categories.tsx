import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllBrands,
  fetchAllCategories,
  fetchCustomBrands,
  fetchCustomCategories,
} from "../../actions/categories";
import { CategoryState } from "../../reducers/modules/categoryReducer";
import { AppState } from "../../reducers/rootReducer";
// import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";

function Categories() {
  const { brands, categories, singleCollection } = useSelector<
    AppState,
    CategoryState
  >((state) => state.category);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        await dispatch(fetchAllCategories());
        await dispatch(fetchAllBrands());
        await dispatch(fetchCustomCategories(categories[0]._id));
        setIsLoading(false);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchAPIs();
  }, [dispatch]);

  const sortByCategory = async (categoryId: any) => {
    setIsLoading(true)
    await dispatch(fetchCustomCategories(categoryId))
    setIsLoading(false)
  }

  const sortByBrand = async (brandId: any) => {
    setIsLoading(true)
    await dispatch(fetchCustomBrands(brandId))
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading && <Loader />}
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="container-fixed my-4">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div>
                  <h4
                    className="mb-1 pb-1"
                    style={{ borderBottom: "1px solid #c4cad0" }}
                  >
                    All Categories
                  </h4>
                  <div className="px-1">
                    {categories &&
                      categories.map((category) => (
                        <div
                          key={category._id}
                          className="d-flex align-items-center"
                        >
                          <label onClick={() => sortByCategory(category._id)} htmlFor="categoryType">
                            {category.name}
                          </label>
                        </div>
                      ))}
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
                    All Brands
                  </h4>
                  <div className="px-1">
                    {brands &&
                      brands.map((brand) => (
                        <div
                          key={brand._id}
                          className="d-flex align-items-center"
                        >
                          <label onClick={() => sortByBrand(brand._id)} htmlFor="brandType">
                            {brand.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  {singleCollection ? (
                    singleCollection?.map((product) => (
                      <div key={product._id} className="col-lg-4 col-md-6">
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
    </div>
  );
}

export default Categories;
