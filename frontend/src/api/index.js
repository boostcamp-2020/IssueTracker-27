import Axios from 'axios';

export const BASE_URL =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
    ? 'http://localhost:5000'
    : 'http://118.67.130.104:5000';

export const axios = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true
  }
});
