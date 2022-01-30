import api from '../utils/axios';
const baseURL = '/climbs';

export const getClimbs = async () => {
  try {
    const response = await api.get(`${baseURL}/`);
    return response.data;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }
};

export const saveClimb = async (body) => {
  try {
    const response = await api.push(`${baseURL}/`, body);
    return response.data;
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }
};
