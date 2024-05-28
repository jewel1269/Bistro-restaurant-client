import { useContext, useState } from 'react';
import { GiPriceTag } from 'react-icons/gi';
import { RiFocus3Line } from 'react-icons/ri';
import useAuth from '../Hooks/useAuth';
import { AuthContext } from './Provider/AuthProvider';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';
import Swal from 'sweetalert2';

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();

  const handleBtnClick = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: item._id,
        email: user?.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };
      axiosSecure.post('/carts', cartItem).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `Your food has been added`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        } else {
          alert('Item not Added');
        }
      });
    } else {
      alert('You are a not user');
    }
  };
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src={item.image}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <RiFocus3Line className="text-white" />

        <h1 className="mx-3 text-lg font-semibold text-white">Focusing</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {item.name}
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">{item.recipe}</p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <GiPriceTag />
          <h1 className="px-2 text-sm font-bold text-red-400">
            <strong>Price:</strong> ${item.price}
          </h1>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <div className="flex justify-center items-center lg:ml-20">
            <button
              onClick={handleBtnClick}
              className="btn shadow-xl btn-sm border-0 border-b-4 shadow-slate-700 mt-4 hover:bg-green-600 btn-outline"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
