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

export const editUser = async (body) => {
  try {
    const response = await api.put(`${baseURL}/edit`, body);
    return response.data;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }
};
