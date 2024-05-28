import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaTrashAlt, FaUserTag } from 'react-icons/fa';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../Componants/Provider/AuthProvider';
import useCart from '../Hooks/useCart';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  // const [cart, refetch] = useCart();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const handleDeleteBtn = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your item has been deleted.',
              icon: 'success',
            });
          }
          refetch();
        });
      }
    });
  };

  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div className="lg:w-[1100px] lg:ml-10 lg:mt-10 mx-auto p-4">
      <div className="text-center mb-4">
        <h2 className="text-yellow-600 text-2xl mb-2">---How many??---</h2>
        <h1 className="text-3xl font-bold">MANAGE ALL USERS</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">
          Total users: {users.length}
        </h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-yellow-100 text-left">
              <th className="py-2 px-4 border-b border-gray-200">NAME</th>
              <th className="py-2 px-4 border-b border-gray-200">EMAIL</th>
              <th className="py-2 px-4 border-b border-gray-200">ROLE</th>
              <th className="py-2 px-4 border-b border-gray-200">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user.email}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {user.role === 'admin' ? (
                    'Admin'
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded"
                    >
                      <FaUserTag />
                    </button>
                  )}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={() => handleDeleteBtn(user._id)}
                    className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
