import { IProduct } from "../reducers/modules/productReducer";

type ProductItemProps = {
  product: IProduct;
};

function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        width="100%"
        height="400px"
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button className="auth-btn">Add to Cart</button>
    </div>
  );
}

export default ProductItem;
