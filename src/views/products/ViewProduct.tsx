import { useState } from "react";
import featured1 from "../../assets/images/featured1.png";
import ProductCard from "../../components/ProductCard";

function ViewProduct() {
  const Description = () => (
    <div>
      Description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Aliquam quidem repellendus hic, eum alias ullam amet consequatur in at
      harum nisi fugit blanditiis illum sunt? Quisquam quibusdam eius nemo
      consequatur.
    </div>
  );

  const Additional = () => (
    <div>
      Additional Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
      laudantium repellendus molestias minus, odit hic pariatur iure eius
      suscipit voluptatem dicta recusandae minima officiis labore excepturi ipsa
      nemo necessitatibus dolor?
    </div>
  );

  const Shopping = () => (
    <div>
      Shopping Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
      deserunt nemo, cumque voluptatum perspiciatis dolor? Commodi ipsam,
      officia quam vitae libero dignissimos, exercitationem id cumque porro hic,
      quos fugiat eveniet?
    </div>
  );

  const Reviews = () => (
    <div>
      <div>
        <h4>Akinti</h4>
        <p>26th Jan 2021</p>
        <p>******</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ex consectetur distinctio ad quaerat, consequatur quibusdam cumque
          eligendi autem commodi!Î
        </p>
      </div>
      <div>
        <h4>Akinti</h4>
        <p>26th Jan 2021</p>
        <p>******</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ex consectetur distinctio ad quaerat, consequatur quibusdam cumque
          eligendi autem commodi!Î
        </p>
      </div>
    </div>
  );

  const [currentTab, setCurrentTab] = useState<string>("description");

  const showAdditionalInfo = () => {
    switch (currentTab) {
      case "description":
        return <Description />;
      case "additional":
        return <Additional />;
      case "shopping":
        return <Shopping />;
      case "reviews":
        return <Reviews />;
    }
  };
  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="container-fixed my-4">
          <div className="row">
            <div className="col-md-6">
              <div className="single-product-container">
                <img src={featured1} alt="featured1" height="100%" />
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="mt-0">Modern Black Blouse</h4>
              <p>SKU: 12345670 BRAND: The Northland</p>
              <p>*******</p>
              <h4>$35.00</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores eos inventore quasi delectus autem distinctio minus
                facere facilis temporibus repudiandae ab eius, obcaecati
                perferendis praesentium magni dolor placeat, non repellendus.
              </p>
              <div className="row align-items-center">
                <div className="col-2">
                  <h4>Size</h4>
                </div>
                <div className="col-10">S M L X</div>
              </div>
              <div className="row align-items-center">
                <div className="col-2">
                  <h4>Color</h4>
                </div>
                <div className="col-10">S M L X</div>
              </div>
              <div className="row align-items-center">
                <div className="col-2">
                  <h4>Qty</h4>
                </div>
                <div className="col-10">S M L X</div>
              </div>
              <div className="row align-items-center">
                <div className="col-2">
                  <h4>Share</h4>
                </div>
                <div className="col-10">S M L X</div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="row">
              <div className="col-md-6">
                <ul
                  className="py-1 view-product-nav"
                  style={{ borderBottom: "1px solid #c4cad0" }}
                >
                  <li
                    className={`${
                      currentTab === "description" ? "active" : ""
                    }`}
                    onClick={() => setCurrentTab("description")}
                  >
                    Description
                  </li>
                  <li
                    className={`${currentTab === "additional" ? "active" : ""}`}
                    onClick={() => setCurrentTab("additional")}
                  >
                    Additional
                  </li>
                  <li
                    className={`${currentTab === "shopping" ? "active" : ""}`}
                    onClick={() => setCurrentTab("shopping")}
                  >
                    Shopping & returns
                  </li>
                  <li
                    className={`${currentTab === "reviews" ? "active" : ""}`}
                    onClick={() => setCurrentTab("reviews")}
                  >
                    Reviews
                  </li>
                </ul>
              </div>
            </div>
            {showAdditionalInfo()}
          </div>
          <div className="div">
            <h4>Related Products</h4>
            <div className="row mt-3">
              <div className="col-md-3">
                <ProductCard />
              </div>
              <div className="col-md-3">
                <ProductCard />
              </div>
              <div className="col-md-3">
                <ProductCard />
              </div>
              <div className="col-md-3">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
