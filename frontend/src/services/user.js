import api from '../config/axiosConfig';
const subUrl = '/user';

const fetchUser = async () => {
  const url = `${subUrl}`;
  const res = await api.get(url);
  return res.data;
};

const editUser = async (data) => {
  const url = `${subUrl}/edit`;
  const res = await api.put(url, data);
  return res.data;
};

export { fetchUser, editUser };
