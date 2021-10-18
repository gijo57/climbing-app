/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/auth/';

const login = async (credentials) => {
  const url = `${baseUrl}/login`;
  const res = await axios.post(url, credentials);
  return res.data;
};

const logout = async () => {
  const url = `${baseUrl}/logout`;
  const res = await axios.post(url);
  return res.data;
};

export default { login, logout };
