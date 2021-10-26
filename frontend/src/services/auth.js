import api from '../config/axiosConfig';
const subUrl = '/auth';

const signUp = async (credentials) => {
  const url = `${subUrl}/signup`;
  const res = await api.post(url, credentials);
  return res.data.user;
};

const logIn = async (credentials) => {
  const url = `${subUrl}/login`;
  const res = await api.post(url, credentials);
  return res.data.user;
};

const logOut = () => {
  const url = `${subUrl}/logout`;
  api.post(url);
};

export { signUp, logIn, logOut };
