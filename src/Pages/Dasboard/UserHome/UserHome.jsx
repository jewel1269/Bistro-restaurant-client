import React, { useContext } from 'react';
import { AuthContext } from '../../../Componants/Provider/AuthProvider';
import { IoCart } from 'react-icons/io5';
import { FaAmazonPay, FaStar } from 'react-icons/fa';
import { FaBookTanakh } from 'react-icons/fa6';
import usePayment from '../../../Hooks/usePayment';
import useCart from '../../../Hooks/useCart';
import useMenu from '../../../Hooks/useMenu';

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [payment] = usePayment();
  const [menu] = useMenu();

  const [cart] = useCart();
  return (
    <div className="min-h-screen lg:w-[1100px]  flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        Hi, Welcome {user ? user?.displayName : 'Back'}
      </h1>
      <div className="flex space-x-4 mb-6">
        <div className="bg-purple-500 text-white w-72 rounded-lg shadow-md p-4 flex flex-col items-center">
          <span className="text-3xl font-bold">{menu.length}</span>
          <span className="mt-2">Menu</span>
        </div>
        <div className="bg-yellow-500 text-white w-72 rounded-lg shadow-md p-4 flex flex-col items-center">
          <span className="text-3xl font-bold">103</span>
          <span className="mt-2">Shop</span>
        </div>
        <div className="bg-pink-500 text-white w-72 rounded-lg shadow-md p-4 flex flex-col items-center">
          <span className="text-3xl font-bold">03</span>
          <span className="mt-2">Contact</span>
        </div>
      </div>
      <div className=" shadow-md rounded-lg p-6 gap-5 w-full flex">
        <div className="flex flex-col p-5 items-center bg-red-100 rounded-xl shadow-2xl justify-center w-1/2 border-r border-gray-300">
          <div>
            <img
              className="w-24 h-24 bg-gray-200 rounded-full mb-4"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <span className="text-xl font-semibold">{user?.displayName}</span>
        </div>
        <div className="flex p-5 bg-orange-200 rounded-xl shadow-2xl flex-col justify-center w-1/2 pl-6">
          <h2 className="text-2xl font-bold mb-4">Your Activities</h2>
          <ul>
            <li className="text-blue-500 flex items-center mb-2">
              <IoCart />
              Orders: {cart.length}
            </li>
            <li className="text-green-500 flex items-center mb-2">
              <FaStar />
              Reviews: 2
            </li>
            <li className="text-orange-500 flex items-center mb-2">
              <FaBookTanakh />
              Bookings: 1
            </li>
            <li className="text-red-500 flex items-center mb-2">
              <FaAmazonPay />
              Payment: {payment.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
