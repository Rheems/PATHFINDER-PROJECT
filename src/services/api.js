import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";

export const authAPI = {
  login: (credentials) => axios.post(`${API_BASE_URL}/login`, credentials),
  register: (userData) => axios.post(`${API_BASE_URL}/register`, userData),
};

export const fakeStoreAPI = {
  getProducts: () => axios.get("https://fakestoreapi.com/products"),
};

export const jsonPlaceholderAPI = {
  getTodos: () => axios.get("https://jsonplaceholder.typicode.com/todos"),
};
