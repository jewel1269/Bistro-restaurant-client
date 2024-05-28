import { useContext } from 'react';
import { AuthContext } from '../Componants/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import img from '../assets/reservation/panda-removebg-preview.png';

const AdminRoute = ({ childern }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center">
          <img
            src={img}
            alt="Ice Cream Icon"
            className="w-56 h-56 animate__animated animate__shakeX animation-duration: 10s; mb-4"
          />
          <h1 className="text-2xl font-bold text-center">
            Welcome to Bistro Boss <br />
            ......Restaurant..........
          </h1>
        </div>
      </div>
    );
  }
  if (user && isAdmin) {
    return childern;
  }
  return <Navigate to={'/'} state={{ from: location }} replace></Navigate>;

  return <div></div>;
};

export default AdminRoute;
