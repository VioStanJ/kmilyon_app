import axios from 'axios';
import { URL } from './const';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = URL;

let token = '';

AsyncStorage.getItem('access_token').then((access)=>{
    token = JSON.parse(access);
});

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    console.warn('TOK',token);
    console.warn('URL',config.baseURL);
    config.headers.Authorization = `Bearer ${token}`;
    
    // Do something before the request is sent (e.g., add headers)
    console.warn('Do something before the request is sent (e.g., add headers)');
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Do something with the response data
    console.warn('Do something with the response data');
    return response;
  },
  (error) => {
    // Handle response errors
    // https://medium.com/@csnvrl/how-to-handle-401-unauthorized-in-react-native-with-axios-interceptors-3f3be8327d6f
    return Promise.reject(error);
  }
);

export default axios;
