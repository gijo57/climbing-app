import axios from 'axios';
import Constants from 'expo-constants';

console.log(Constants.extra.apiURL);

const api = axios.create({
  baseURL: Constants.extra.apiURL,
  withCredentials: true
});

export default api;
