import { useState } from "react";
import { ISingleProduct } from "../reducers/modules/productReducer";

type ISingleProductProps = {
    singleProduct: ISingleProduct | null
}

function ProductAdditionalInfo({ singleProduct }: ISingleProductProps) {
    const Additional = () => (
        <div>
          {singleProduct &&
            singleProduct.product.extras.map((extra) => <p key={extra}>{extra}</p>)}
        </div>
      );
    
      const Shipping = () => (
        <div>{singleProduct && <div>{singleProduct?.product.shipping}</div>}</div>
      );
    
      const Reviews = () => (
        <div>
          {singleProduct &&
            singleProduct.reviews.map((review: any) => (
              <div key={review._id}>
                <h4>
                  {review.user.name.firstName} {review.user.name.lastName}
                </h4>
                <p>{review.createdAt}</p>
                <p>{review.rating}</p>
                <p>{review.remark}</p>
                <p>{review.note}</p>
              </div>
            ))}
        </div>
      );
    
      const [currentTab, setCurrentTab] = useState<string>("additional");
    
      const showAdditionalInfo = () => {
        switch (currentTab) {
          case "additional":
            return <Additional />;
          case "shipping":
            return <Shipping />;
          case "reviews":
            return <Reviews />;
        }
      };
  return (
    <div className="mb-8">
      <div className="row">
        <div className="col-md-6">
          <ul
            className="py-1 view-product-nav"
            style={{ borderBottom: "1px solid #c4cad0" }}
          >
            <li
              className={`${currentTab === "additional" ? "active" : ""}`}
              onClick={() => setCurrentTab("additional")}
            >
              Additional
            </li>
            <li
              className={`${currentTab === "shipping" ? "active" : ""}`}
              onClick={() => setCurrentTab("shipping")}
            >
              Shipping & returns
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
      <div style={{ height: "140px" }} className="overflow-y-auto">
        {showAdditionalInfo()}
      </div>
    </div>
  );
}

export default ProductAdditionalInfo;
