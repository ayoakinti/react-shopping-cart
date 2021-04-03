import api from "../api";

const API_URL = "https://fakestoreapi.com"; // Put your login api here

const fetchAllProducts = async () => {
  const res = await api.get(`${API_URL}/products`);
  
  return res.data;
};

const ProductService = {
  fetchAllProducts,
};

export default ProductService;
