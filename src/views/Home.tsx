import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDashboard } from "../actions/dashboard";
// import featured1 from "../assets/images/featured1.png";
// import landing from "../assets/images/landing.svg";
// import featured2 from "../assets/images/featured2.png";
// import featured3 from "../assets/images/featured3.png";
// import featured4 from "../assets/images/featured4.png";
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

  console.log(
    imageUrls,
    featuredCategories,
    featuredProducts,
    latestProducts,
    cheapestProducts,
    bestSellingProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPIs = async () => {
      await dispatch(fetchDashboard());
    };
    fetchAPIs();
  }, [dispatch]);

  return (
    <div className="page-wrapper">
      <div className="landing-page mb-8">
        <div className="container h-100">
          <div className="d-flex flex-column-sm justify-content-center-sm h-100">
            <img src={imageUrls?.landingLeft} alt="landingLeft" height="100%" />
            <div className="landing-content d-flex align-items-center">
              <div className="px-1 text-center">
                <h3 className="text-uppercase">
                  Sale up <br /> to 50% off
                </h3>
                <p>Online Shopping free home delivery over $100</p>
                <Link to="/categories" className="w-33 btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
            <img
              src={imageUrls?.landingRight}
              alt="landingRight"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-0 mb-8">
          <div className="col-lg-7 p-0 bg-primary-100">
            <div className="d-flex justify-content-between align-items-center px-3 flex-column-sm">
              <div>
                <h3>Winter Clearance up to 70% off!</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem eveniet vitae commodi officia nemo ipsam,
                  quaerat voluptatem delectus! Dolorum pariatur voluptatum
                  soluta at dignissimos quidem, ad consectetur nihil in
                  sapiente?
                </p>
                <button className="btn btn-secondary">Shop now</button>
              </div>
              <img
                src={imageUrls?.clearanceSales}
                alt="clearanceImage"
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div className="col-lg-5 p-0 bg-text-100">
            <div className="d-flex justify-content-between align-items-center px-3 flex-column-sm">
              <div>
                <h3>New Arrivals</h3>
                <button className="btn btn-secondary">Shop now</button>
              </div>
              <img
                src={imageUrls?.newArrivals}
                alt="newArrivals"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-center">Featured Product</h3>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row">
                {featuredProducts.map((product) => (
                  <div key={product._id} className="col-md-3">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-0 mb-8">
          <div className="col-lg-6 p-0 bg-primary-100">
            <div className="d-flex justify-content-between align-items-center px-3 flex-column-sm">
              <div>
                <h3>Pamela Reif's Top Picks</h3>
                <button className="btn btn-secondary">Shop now</button>
              </div>
              <img
                src={imageUrls?.clearanceSales}
                alt="featured3"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="col-lg-6 p-0 bg-text-100">
            <div className="d-flex justify-content-between align-items-center px-3 flex-column-sm">
              <div>
                <h3>Let's be conscious</h3>
                <button className="btn btn-secondary">Shop now</button>
              </div>
              <img
                src={imageUrls?.newArrivals}
                alt="featured4"
                width="100%"
                height="100%"
              />
            </div>
          </div>
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
                  {/* <ProductCardColumn />
                  <ProductCardColumn />
                  <ProductCardColumn /> */}
                </div>
                <div className="col-md-4">
                  <h5>Best Selling Product</h5>
                  {bestSellingProducts.map((product) => (
                    <div key={product._id}>
                      <ProductCardColumn product={product} />
                    </div>
                  ))}
                  {/* <ProductCardColumn />
                  <ProductCardColumn />
                  <ProductCardColumn /> */}
                </div>
                <div className="col-md-4">
                  <h5>Cheapest Product</h5>
                  {cheapestProducts.map((product) => (
                    <div key={product._id}>
                      <ProductCardColumn product={product} />
                    </div>
                  ))}
                  {/* <ProductCardColumn />
                  <ProductCardColumn />
                  <ProductCardColumn /> */}
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
  );
}

export default Home;
