import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../actions/cart";
import { fetchCustomCategories } from "../../actions/categories";
import { fetchSingleProduct } from "../../actions/products";
import Loader from "../../components/Loader";
import ProductAdditionalInfo from "../../components/ProductAdditionalInfo";
import ProductCard from "../../components/ProductCard";
import { CategoryState } from "../../reducers/modules/categoryReducer";
import { ProductState } from "../../reducers/modules/productReducer";
import { AppState } from "../../reducers/rootReducer";
// import ProductCard from "../../components/ProductCard";

function ViewProduct() {
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const handleAddToCart = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    await dispatch(addToCart({
      productId: singleProduct?.product._id as string,
      color,
      size,
      quantity
    }))
  };

  const { productId }: any = useParams();

  const { singleCollection } = useSelector<AppState, CategoryState>(
    (state) => state.category
  );

  const { singleProduct } = useSelector<AppState, ProductState>(
    (state) => state.product
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPIs = async () => {
      const res: any = await dispatch(fetchSingleProduct(productId));
      setColor(res.product.priceList[0].color);
      setSize(res.product.priceList[0].sizes[0].size);
      await dispatch(fetchCustomCategories(res.product.categoryId));
      setIsLoading(false);
    };
    fetchAPIs();
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="container-fixed my-4">
            <div className="row">
              <div className="col-md-6">
                <div className="single-product-container">
                  <img
                    src={singleProduct?.product.image}
                    alt="featured1"
                    height="100%"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="mt-0">{singleProduct?.product.name}</h4>
                <p>*******</p>
                <h4>${singleProduct?.product.price}</h4>
                <p>{singleProduct?.product.description}</p>
                <p>Category: {singleProduct?.category}</p>
                <p>Brand: {singleProduct?.brand}</p>
                <p>Seller: {singleProduct?.seller}</p>
                <div className="row align-items-center">
                  <div className="col-2">
                    <h4>Size</h4>
                  </div>
                  <div className="col-10">
                    <select
                      name="size"
                      id="size"
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {singleProduct &&
                        singleProduct.product.priceList[0].sizes.map(
                          (size: any) => (
                            <option key={size._id} value={size.size}>
                              {size.size}
                            </option>
                          )
                        )}
                    </select>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-2">
                    <h4>Color</h4>
                  </div>
                  <div className="col-10">
                    <select
                      name="color"
                      id="color"
                      onChange={(e) => setColor(e.target.value)}
                    >
                      {singleProduct &&
                        singleProduct.product.priceList.map((colorList) => (
                          <option key={colorList.color} value={colorList.color}>
                            {colorList.color}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-2">
                    <h4>Qty</h4>
                  </div>
                  <div className="col-10 d-flex align-items-center">
                    <form onSubmit={handleAddToCart}>
                      <div>
                        <button
                          type="button"
                          disabled={quantity <= 1}
                          onClick={() => setQuantity(quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value))
                          }
                        />
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <ProductAdditionalInfo singleProduct={singleProduct} />

            <div className="div">
              <h4>Related Products</h4>
              <div className="row mt-3">
                {singleCollection ? (
                  singleCollection?.map((product) => (
                    <div key={product._id} className="col-md-3">
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
  );
}

export default ViewProduct;
