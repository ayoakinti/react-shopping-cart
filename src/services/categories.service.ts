import { API_URL } from './product.service';
import api from "../api";

const fetchAllCategories = async () => {
  const res = await api.get(`${API_URL}/products/categories`);
  
  return res.data;
};

const fetchCustomCategories = async (category: string) => {
  const res = await api.get(`${API_URL}/products/category/${category}`);
  
  return res.data;
};

const CategoryService = {
  fetchAllCategories,
  fetchCustomCategories
};

export default CategoryService;
