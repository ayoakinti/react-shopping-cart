import api from "../api";

const addToCart = async () => {
  const res = await api.get('/cart');
  
  return res.data;
};

const CartService = {
  addToCart
};

export default CartService;
