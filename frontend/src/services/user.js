import api from '../config/axiosConfig';
const subUrl = '/user';

const fetchUser = async () => {
  const url = `${subUrl}`;
  const res = await api.get(url);
  return res.data;
};

const editUser = async () => {
  const url = `${subUrl}`;
  const res = await api.get(url);
  return res.data;
};

export { fetchUser, editUser };
