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

const logOut = async () => {
  const url = `${subUrl}/logout`;
  await api.post(url);
};

export { signUp, logIn, logOut };
