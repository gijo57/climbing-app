import api from '../utils/axios';
const baseURL = '/gradingsystems';

export const getGradingSystems = async (type) => {
  try {
    const response = await api.get(`${baseURL}/${type}`);
    return response.data;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }
};
