import axiosConfig from '../config/axiosConfig';
const subUrl = '/user';

const fetchUser = async () => {
  const url = `${subUrl}`;
  const res = await axiosConfig.get(url, { withCredentials: true });
  return res.data;
};

export { fetchUser };
