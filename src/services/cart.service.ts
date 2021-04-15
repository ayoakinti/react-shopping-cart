import api from "../api";

export type IAddToCart = {
  productId: string,
  color: string,
  size: string,
  quantity: number,
}

export type IRemoveFromCart = {
  cartId: string,
  quantity: number,
}

const fetchCart = async () => {
  const res = await api.get('/cart/user');
  
  return res.data;
};

const addToCart = async (product: IAddToCart) => {
  const res = await api.post('/cart/add', product);

  return res.data
}

const removeFromCart = async (product: IRemoveFromCart) => {
  const res = await api.post('/cart/remove', product);

  return res.data
}


const CartService = {
  fetchCart,
  addToCart,
  removeFromCart
};

export default CartService;
