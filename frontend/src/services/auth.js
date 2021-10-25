import axiosConfig from '../config/axiosConfig';
const subUrl = '/auth';

const login = async (credentials) => {
  const url = `${subUrl}/login`;
  const res = await axiosConfig.post(url, credentials, {
    withCredentials: true
  });
  return res.data.user;
};

const logout = () => {
  const url = `${subUrl}/logout`;
  axiosConfig.post(url, { withCredentials: true });
};

export { login, logout };
