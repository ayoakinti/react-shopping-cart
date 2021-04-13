import api from "../api";

const fetchAllProducts = async () => {
  const res = await api.get('/product');
  
  return res.data;
};

const fetchSingleProduct = async (productId: string) => {
  const res = await api.get(`/product/single/${productId}`);
  
  return res.data;
};

const ProductService = {
  fetchAllProducts,
  fetchSingleProduct
};

export default ProductService;
