import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Componants/Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
export const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});
const useAxiosSecure = () => {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token');
      // console.log('hi jewel i am here', token);
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async error => {
      const status = error.response.ststus;
      if (status === 401 || status === 403) {
        await signOut();
        navigate('/LogIn');
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};
export default useAxiosSecure;
