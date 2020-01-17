import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.18.27.70:3333'
});

export default api;
