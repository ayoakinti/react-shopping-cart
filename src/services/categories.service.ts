import api from "../api";

const fetchAllCategories = async () => {
  const res = await api.get('/category');
  
  return res.data;
};

const fetchAllBrands = async () => {
  const res = await api.get('/brand');
  
  return res.data;
};

const fetchCustomCategories = async (categoryId: string) => {
  const res = await api.get(`/category/${categoryId}`);
  
  return res.data;
};

const fetchCustomBrands = async (brandId: string) => {
  const res = await api.get(`/brand/${brandId}`);
  
  return res.data;
};

const CategoryService = {
  fetchAllCategories,
  fetchCustomCategories,
  fetchAllBrands,
  fetchCustomBrands
};

export default CategoryService;
