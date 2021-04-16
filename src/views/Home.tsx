import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDashboard } from "../actions/dashboard";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import ProductCardColumn from "../components/ProductCardColumn";
import ServicesCard from "../components/ServicesCard";
import { DashboardState } from "../reducers/modules/dashboardReducer";
import { AppState } from "../reducers/rootReducer";

function Home() {
  const {
    imageUrls,
    featuredCategories,
    featuredProducts,
    latestProducts,
    cheapestProducts,
    bestSellingProducts,
  } = useSelector<AppState, DashboardState>((state) => state.dashboard);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAPIs = async () => {
      await dispatch(fetchDashboard());
    };
    try {
      fetchAPIs();
    } catch (error) {
      console.log(error.response.data.message)
    }
    setIsLoading(false);
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="page-wrapper">
        <div className="landing-page mb-8">
          <div className="container h-100">
            <div className="row flex-column-sm justify-content-center-sm h-100">
              <div className="d-none col-md-6 col-lg-4 d-md-flex align-items-center">
                <img src={imageUrls?.landingLeft} alt="landingLeft" />
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="landing-content d-flex align-items-center justify-content-center">
                  <div className="px-1 text-center">
                    <h3 className="text-uppercase">
                      Sale up <br /> to 50% off
                    </h3>
                    <p>Online Shopping free home delivery over $100</p>
                    <Link to="/categories" className="btn btn-primary">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-none col-lg-4 d-lg-flex align-items-center">
                <img src={imageUrls?.landingRight} alt="landingRight" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mx-0 mb-8">
            <div className="col-lg-7 p-0 bg-primary-100">
              <div className="row align-items-center px-3 flex-column-sm">
                <div className="col-sm-6">
                  <h3>Winter Clearance up to 70% off!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non accusamus saepe dolorum doloremque quia temporibus
                    laudantium totam impedit neque deserunt.
                  </p>
                  <Link to="/products" className="btn btn-secondary">
                    Shop now
                  </Link>
                </div>
                <div
                  className="col-sm-6 d-flex-center"
                  style={{ height: "400px" }}
                >
                  <img src={imageUrls?.clearanceSales} alt="clearanceImage" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 p-0 bg-text-100">
              <div className="row align-items-center px-3 flex-column-sm">
                <div className="col-sm-6">
                  <h3 className="py-2">New Arrivals</h3>
                  <Link to="/products" className="btn btn-secondary">
                    Shop now
                  </Link>
                </div>
                <div
                  className="col-sm-6 d-flex-center"
                  style={{ height: "400px" }}
                >
                  <img src={imageUrls?.newArrivals} alt="newArrivals" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-center">Featured Product</h3>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="row">
                  {featuredProducts.map((product) => (
                    <div
                      key={product._id}
                      className="col-md-3 col-sm-6 d-flex-center"
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0 mb-8">
            {featuredCategories.length > 0 && featuredCategories[0] && (
              <div className="col-lg-6">
                <div className="row align-items-center px-3 flex-column-sm bg-primary-100">
                  <div className="col-sm-6">
                    <h3 className="py-2 text-capitalize">
                      {featuredCategories.length > 0 &&
                        featuredCategories[0].name}
                    </h3>
                    <Link
                      to={`/category/${featuredCategories[0]._id}`}
                      className="btn btn-secondary"
                    >
                      Shop now
                    </Link>
                  </div>
                  <div
                    className="col-sm-6 d-flex-center"
                    style={{ height: "400px" }}
                  >
                    <img src={featuredCategories[0].image} alt="category1" />
                  </div>
                </div>
              </div>
            )}
            {featuredCategories.length > 0 && featuredCategories[1] && (
              <div className="col-lg-6">
                <div className="row align-items-center px-3 flex-column-sm bg-text-100">
                  <div className="col-sm-6">
                    <h3 className="py-2 text-capitalize">
                      {featuredCategories[1].name}
                    </h3>
                    <Link
                      to={`/category/${featuredCategories[1]._id}`}
                      className="btn btn-secondary"
                    >
                      Shop now
                    </Link>
                  </div>
                  <div
                    className="col-sm-6 d-flex-center"
                    style={{ height: "400px" }}
                  >
                    <img src={featuredCategories[1].image} alt="category2" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div className="row justify-content-center">
              <div
                className="col-lg-8 px-0 pb-3"
                style={{ borderBottom: "1px solid #c4cad0" }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <h5>Latest Product</h5>
                    {latestProducts.map((product) => (
                      <div key={product._id}>
                        <ProductCardColumn product={product} />
                      </div>
                    ))}
                  </div>
                  <div className="col-md-4">
                    <h5>Best Selling Product</h5>
                    {bestSellingProducts.map((product) => (
                      <div key={product._id}>
                        <ProductCardColumn product={product} />
                      </div>
                    ))}
                  </div>
                  <div className="col-md-4">
                    <h5>Cheapest Product</h5>
                    {cheapestProducts.map((product) => (
                      <div key={product._id}>
                        <ProductCardColumn product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="row justify-content-center">
              <div className="col-lg-8 px-0">
                <div className="row">
                  <div className="col-md-3">
                    <ServicesCard />
                  </div>
                  <div className="col-md-3">
                    <ServicesCard />
                  </div>
                  <div className="col-md-3">
                    <ServicesCard />
                  </div>
                  <div className="col-md-3">
                    <ServicesCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
