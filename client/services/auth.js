import api from '../utils/api';
const baseURL = '/authentication';

export const signUp = async (body) => {
  const response = await api.post(`${baseURL}/sign-up`, body);
  return response.data;
};

export const signIn = async (body) => {
  const response = await api.post(`${baseURL}/sign-in`, body);
  return response.data;
};

export const signOut = async () => {
  return api.post(`${baseURL}/sign-out`);
};
