import axios from 'axios';
import host from './config';

let baseURL;
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8800/api/'
} else {
  baseURL = host + '/api/';
}
const customAxios = axios.create({ baseURL })


export { customAxios };