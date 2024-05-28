import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://bistro-boss-rastaurent-serverr-main.vercel.app',
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
