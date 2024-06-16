import axios from 'axios';
import { API_URL } from '../constants';

// Fetch all products
export const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// Fetch a single product by ID
export const getProductById = async (itemId) => {
  const response = await axios.get(`${API_URL}/products/${itemId}`);
  return response.data;

};
