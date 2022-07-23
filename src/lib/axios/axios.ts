import axios from 'axios';

const API_ORIGIN = 'https://api.github.com';

export const Axios = axios.create({
  baseURL: API_ORIGIN,
  timeout: 3000,
});
