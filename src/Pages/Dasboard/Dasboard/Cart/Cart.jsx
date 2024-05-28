import React, { useContext, useState, useEffect } from 'react';
import useCart from '../../../../Hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../../Componants/Provider/AuthProvider';
import { loadStripe } from '@stripe/stripe-js';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { loading, user } = useContext(AuthContext);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    bkashNumber: '', // bKash number
    email: user?.email || '',
    name: user?.displayName || '',
    totalPrice: 0,
    date: new Date().toLocaleString(),
  });
  useEffect(() => {
    const totalPrice = cart.reduce(
      (total, item) => total + Number(item.price),
      0
    );
    setPaymentDetails(prevDetails => ({
      ...prevDetails,
      totalPrice,
    }));
  }, [cart]);

  const handleDelete = id => {
    // Confirmation dialog before deletion
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
        axiosSecure.delete(`/carts/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            // Notify user upon successful deletion
            Swal.fire({
              title: 'Deleted!',
              text: 'Your item has been deleted.',
              icon: 'success',
            });
            refetch(); // Refetch cart data
          }
        });
      }
    });
  };

  if (loading) {
    return (
      <span className="loading text-center lg:ml-96 lg:mt-80 loading-bars loading-lg"></span>
    );
  }

  const totalOrders = cart.length;

  return (
    <div className="lg:w-[1100px] lg:ml-10 lg:mt-10 p-6 bg-white border border-gray-200 shadow-md">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-yellow-600">---My Cart---</h1>
        <h2 className="text-lg mt-2">WANNA ADD MORE?</h2>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg">
          Total orders: <strong>{totalOrders}</strong>
        </span>
        <span className="text-lg">
          Total price: <strong>${paymentDetails.totalPrice.toFixed(2)}</strong>
        </span>
        <div>
          <div className="relative flex justify-center">
            <NavLink to={'/dasboard/PaymentWrapper'}>
              <button
                disabled={cart.length <= 0}
                className={`px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 ${
                  cart.length <= 0 ? 'bg-gray-400' : 'bg-purple-600'
                }`}
              >
                Pay
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-yellow-100">
            <th className="border-b-2 border-yellow-600 py-2">ITEM IMAGE</th>
            <th className="border-b-2 border-yellow-600 py-2">ITEM NAME</th>
            <th className="border-b-2 border-yellow-600 py-2">PRICE</th>
            <th className="border-b-2 border-yellow-600 py-2">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item._id}>
              <td className="border-b border-gray-200 py-2">
                <div className="w-12 h-12 bg-gray-200">
                  <img src={item?.image} alt={item.name} />
                </div>
              </td>
              <td className="border-b lg:ml-24 border-gray-200 py-2">
                {item.name}
              </td>
              <td className="border-b border-gray-200 py-2">
                ${Number(item.price).toFixed(2)}
              </td>
              <td className="border-b border-gray-200 py-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 lg:ml-56 text-white px-3 py-1 rounded-lg"
                >
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
