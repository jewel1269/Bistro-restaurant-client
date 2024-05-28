import React from 'react';
import useMenu from '../../Hooks/useMenu';
import Swal from 'sweetalert2';
import { axiosSecure } from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import { NavLink } from 'react-router-dom';

const ManageItems = () => {
  const [menu] = useMenu();
  const [refetch] = useCart();

  const handleDeleteBtn = item => {
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
        axiosSecure.delete(`/menu/${item._id}`).then(res => {
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

  return (
    <div className="flex lg:w-[1100px]    flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
      <h1 className="mb-2 text-xl text-center text-yellow-500">
        ---Hurry Up!---
      </h1>
      <h2 className="mb-4 text-3xl font-bold text-center">MANAGE ALL ITEMS</h2>
      <div className="w-full max-w-4xl px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Total Items: {menu.length}</h3>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-yellow-500 text-white">
              <th className="px-4 py-2">Item Image</th>
              <th className="px-4 py-2">Item Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map(item => (
              <tr
                key={menu._id}
                className="text-center border-t border-gray-200"
              >
                <td className="px-4 py-2">
                  <div className="w-12 h-12 bg-gray-200">
                    <img src={item?.image} alt="" />
                  </div>
                </td>
                <td className="px-4 py-2">{item?.name}</td>
                <td className="px-4 py-2">${item?.price}</td>
                <td className="px-4 py-2">
                  <NavLink to={`/dasboard/UpdateItem/${item._id}`}>
                    <button className="p-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.7,5.3c-0.4-0.4-1-0.4-1.4,0l-8,8C6.1,13.5,6,13.7,6,14v3.3C6,17.7,6.3,18,6.7,18H10c0.3,0,0.5-0.1,0.7-0.3l8-8 c0.4-0.4,0.4-1,0-1.4L15.7,5.3z M7.3,15v-1.6l7-7L14.3,8l-7,7H7.3z M13.3,7.3l1.4,1.4L15,9l-1.4-1.4L13.3,7.3z M8,16h1.6l-1.6,1.6 V16z" />
                      </svg>
                    </button>
                  </NavLink>
                </td>

                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDeleteBtn(item)}
                    className="p-2 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9,3V4H4v2h16V4h-5V3H9z M5,8v12c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8H5z M11,18c0,0.6-0.4,1-1,1s-1-0.4-1-1v-6 c0-0.6,0.4-1,1-1s1,0.4,1,1V18z M15,18c0,0.6-0.4,1-1,1s-1-0.4-1-1v-6c0-0.6,0.4-1,1-1s1,0.4,1,1V18z" />
                    </svg>
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

export default ManageItems;
