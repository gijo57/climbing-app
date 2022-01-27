import api from '../utils/axios';
const baseURL = '/authentication';

export const signUp = async (body) => {
  console.log(body);
  try {
    const response = await api.post(`${baseURL}/sign-up`, body);
    return response.data;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }
};

export const signIn = async (body) => {
  try {
    const response = await api.post(`${baseURL}/sign-in`, body);
    return response.data;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }
};

export const signOut = async () => {
  return api.post(`${baseURL}/sign-out`);
};
