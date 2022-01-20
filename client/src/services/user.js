import api from '../utils/axios';
const baseURL = '/user';

export const getUser = async () => {
  try {
    const response = await api.get(`${baseURL}/`);
    return response.data;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }
};
