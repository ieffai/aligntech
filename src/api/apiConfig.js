import axios from 'axios';
import { DEV_URL } from '../utils/constants';

const api = axios.create({
  baseURL: DEV_URL,
});

// api.interceptors.request.use((request) => {
//   console.log('Starting Request', JSON.stringify(request, null, 2));
//   return request;
// });

export { api };
