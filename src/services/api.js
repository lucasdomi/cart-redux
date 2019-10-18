import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/lucasdomi/cart-redux-fake-api',
});

export default api;
