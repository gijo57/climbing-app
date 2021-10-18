import axiosConfig from '../config/axiosConfig';
const subUrl = '/auth';

const isAuth = async () => {
  const url = `${subUrl}`;
  const res = await axiosConfig.get(url, { withCredentials: true });
  return res.data;
};

const login = async (credentials) => {
  const url = `${subUrl}/login`;
  const res = await axiosConfig.post(url, credentials, {
    withCredentials: true
  });
  return res.data;
};

const logout = async () => {
  const url = `${subUrl}/logout`;
  const res = await axiosConfig.post(url, { withCredentials: true });
  return res.data;
};

export { login, logout, isAuth };
