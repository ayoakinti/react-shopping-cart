import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cart";
import { IProduct } from "../reducers/modules/productReducer";

type ProductItemProps = {
  product: IProduct;
};

function ProductItem({ product }: ProductItemProps) {
  const handleAddToCart = async (product: IProduct) => {
    try {
      await dispatch(addToCart(product));
    } catch (error) {
      console.error(error);
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className='h-85'>
        <img
          src={product.image}
          alt={product.name}
          width="100%"
          height="240px"
        />
        <h4 className='product-title'>{product.name}</h4>
        <p><b>Price:</b> ₦{Math.round(product.price * 485).toLocaleString()}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="auth-btn">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
