import React, { useContext, useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import 'tailwindcss/tailwind.css';
import useMenu from '../../Hooks/useMenu';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import usePayment from '../../Hooks/usePayment';
import axios from 'axios';
import { FaBook, FaJediOrder, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Componants/Provider/AuthProvider';

// Import the plugin
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  // Register the plugin
  ChartDataLabels
);

const AdminHome = () => {
  const [menu, setMenu] = useState([]);
  const [payment] = usePayment();
  const [barData, setBarData] = useState(null);
  const [pieData, setPieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const axiosSecureTwo = useAxiosSecure();
  const { data: revenues = [] } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecureTwo.get('admin-stats');
      return res.data;
    },
  });
  console.log(revenues);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          'https://bistro-boss-rastaurent-serverr-main.vercel.app/payments'
        );
        const data = await response.json();
        setMenu(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          'https://bistro-boss-rastaurent-serverr-main.vercel.app/menu'
        );
        const data = await response.json();
        setMenu(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  useEffect(() => {
    if (menu.length > 0) {
      const categories = ['Dessert', 'Pizza', 'Salad', 'Soup'];
      const soldData = categories.map(
        cat =>
          menu.filter(
            item =>
              item.category && item.category.toLowerCase() === cat.toLowerCase()
          ).length
      );

      setBarData({
        labels: categories,
        datasets: [
          {
            label: 'Sold',
            data: soldData,
            backgroundColor: ['#3490dc', '#f6993f', '#38c172', '#e3342f'],
          },
        ],
      });

      setPieData({
        labels: categories,
        datasets: [
          {
            data: soldData,
            backgroundColor: ['#3490dc', '#f6993f', '#38c172', '#e3342f'],
          },
        ],
      });
    }
  }, [menu]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen lg:w-[1100px] lg:ml-10 lg:mt-10 bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">
        Hi, Welcome {user ? user?.displayName : 'Back'}!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-purple-200 p-4 rounded-lg shadow-md">
          <p className="text-purple-800 text-3xl font-bold">
            $ {revenues.revenue}
          </p>
          <p className="text-purple-600">Revenue</p>
        </div>
        <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
          <p className="text-yellow-800 flex text-3xl font-bold">
            <FaUser></FaUser>
            {users.length}
          </p>
          <p className="text-yellow-600">Customers</p>
        </div>
        <div className="bg-pink-200 p-4 flex rounded-lg shadow-md">
          <p className="text-pink-800 text-3xl font-bold">
            <FaBook></FaBook>
            {menu.length}
          </p>
          <p className="text-pink-600">Products</p>
        </div>
        <div className="bg-blue-200 p-4 flex rounded-lg shadow-md">
          <p className="text-blue-800 text-3xl font-bold">
            <FaJediOrder></FaJediOrder>
            {payment.length}
          </p>
          <p className="text-blue-600">Orders</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          {barData && <Bar data={barData} />}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {pieData && (
            <Pie
              data={pieData}
              options={{
                plugins: {
                  datalabels: {
                    formatter: (value, context) => {
                      const total = context.chart.data.datasets[0].data.reduce(
                        (acc, val) => acc + val,
                        0
                      );
                      const percentage = ((value / total) * 100).toFixed(2);
                      return `${percentage}%`;
                    },
                    color: '#fff',
                    font: {
                      weight: 'bold',
                    },
                  },
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
