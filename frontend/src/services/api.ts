import axios from 'axios';
import { Product, ProductCategory } from '../types/Product';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productApi = {
  getAllProducts: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data;
  },

  getProductById: async (id: number): Promise<Product> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  getProductsByCategory: async (category: ProductCategory): Promise<Product[]> => {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  },

  searchProducts: async (query: string): Promise<Product[]> => {
    const response = await api.get(`/products/search?query=${encodeURIComponent(query)}`);
    return response.data;
  },

  getAvailableProducts: async (): Promise<Product[]> => {
    const response = await api.get('/products/available');
    return response.data;
  },
};

export default api; 