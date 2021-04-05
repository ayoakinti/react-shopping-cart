import { API_URL } from './product.service';
import api from "../api";

const addToCart = async () => {
  const res = await api.get(`${API_URL}/products/categories`);
  
  return res.data;
};

const CartService = {
  addToCart
};

export default CartService;
