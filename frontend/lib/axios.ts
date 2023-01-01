import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'http://syusseki.com:807',
  withCredentials: true,
});
