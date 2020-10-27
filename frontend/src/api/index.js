import Axios from 'axios';

export const BASE_URL = 'http://localhost:5000/api';

export const axios = Axios.create({
  baseURL: BASE_URL
});
