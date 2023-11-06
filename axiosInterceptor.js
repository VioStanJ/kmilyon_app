import axios from 'axios';
import { URL } from './const';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = URL;

let token = '';

export function init(token){
  // AsyncStorage.getItem('access_token').then((access)=>{
  //     token = JSON.parse(access);
  console.warn("INIT",token);
      request(token);
  // });
}

function request(token) {
  // Request interceptor
  axios.interceptors.request.use(
    (config) => {
      // Do something before the request is sent (e.g., add headers)
      console.warn('TOK INTERCEPTOR',token);
      config.headers.Authorization = `Bearer ${token}`;    
      return config;
    },
    (error) => {
      // Handle request errors
      return Promise.reject(error);
    }
  );
}

function response(){
  // Response interceptor
  axios.interceptors.response.use(
    (response) => {
      // Do something with the response data
      // console.warn('Do something with the response data');
      return response;
    },
    (error) => {
      // Handle response errors
      // https://medium.com/@csnvrl/how-to-handle-401-unauthorized-in-react-native-with-axios-interceptors-3f3be8327d6f
      return Promise.reject(error);
    }
  );
}

export default axios;
