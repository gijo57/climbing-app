import axios from 'axios';
import Constants from 'expo-constants';

const baseURL = Constants.manifest.extra.apiURL;

const api = axios.create({
  baseURL,
  withCredentials: true
});

export default api;
