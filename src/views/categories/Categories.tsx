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

  const [categoryView, setCategoryView] = useState<boolean>(true);

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        const res: any = await dispatch(fetchAllCategories());
        await dispatch(fetchAllBrands());
        await dispatch(fetchCustomCategories(res.categories[0]._id));
      } catch (error) {
        console.error(error.response.data.message);
      }
      setIsLoading(false);
    };
    fetchAPIs();
  }, [dispatch]);

  const sortByCategory = async (categoryId: any) => {
    setCategoryView(true);
    setIsLoading(true);
    await dispatch(fetchCustomCategories(categoryId));
    setIsLoading(false);
  };

  const sortByBrand = async (brandId: any) => {
    setCategoryView(false);
    setIsLoading(true);
    await dispatch(fetchCustomBrands(brandId));
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="container-fixed my-4">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div>
                  <h4
                    className="mb-1 pb-1"
                    style={{ borderBottom: "1px solid #c4cad0" }}
                  >
                    All Categories
                  </h4>
                  <div className="px-1 text-capitalize">
                    {categories &&
                      categories.map((category) => (
                        <ul
                          key={category._id}
                          className="d-flex align-items-center"
                        >
                          {singleCollection && (
                            <li
                              className={`item-link ${
                                category._id ===
                                  singleCollection[0].categoryId && categoryView
                                  ? "active"
                                  : ""
                              }`}
                              onClick={() => sortByCategory(category._id)}
                            >
                              {category.name}
                            </li>
                          )}
                        </ul>
                      ))}
                  </div>
                </div>
                {/* <div>
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
                </div> */}
                <div>
                  <h4
                    className="mb-1 pb-1"
                    style={{ borderBottom: "1px solid #c4cad0" }}
                  >
                    All Brands
                  </h4>
                  <div className="px-1 text-capitalize">
                    {brands &&
                      brands.map((brand) => (
                        <ul
                          key={brand._id}
                          className="d-flex align-items-center"
                        >
                          {singleCollection && (
                            <li
                              className={`item-link ${
                                brand._id ===
                                  singleCollection[0].brandId && !categoryView
                                  ? "active"
                                  : ""
                              }`}
                              onClick={() => sortByBrand(brand._id)}
                            >
                              {brand.name}
                            </li>
                          )}
                        </ul>
                      ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-6">
                <div className="row">
                  {singleCollection ? (
                    singleCollection?.map((product) => (
                      <div
                        key={product._id}
                        className="col-lg-3 col-md-6 d-flex-center"
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
    </div>
  );
}

export default Categories;
