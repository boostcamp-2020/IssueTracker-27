import Axios from 'axios';

export const BASE_URL = 'http://localhost:5000';

export const axios = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true
  }
});
