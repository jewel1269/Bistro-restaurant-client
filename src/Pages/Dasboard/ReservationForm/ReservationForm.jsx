import React from 'react';
import { Helmet } from 'react-helmet-async';

const ReservationForm = () => {
  return (
    <div className="lg:w-[1200px]  lg:mt-10 p-6 bg-white flex flex-col items-center">
      {/* Reservation Section */}
      <Helmet>
        <title>Dashboard || Reservation</title>
      </Helmet>
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold text-yellow-600">---Reservation---</h1>
        <h2 className="text-2xl mt-2">BOOK A TABLE</h2>
      </div>
      <div className="w-full max-w-4xl bg-gray-50 p-8 rounded-lg shadow-md">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Date*</label>
            <input
              type="date"
              name="date"
              placeholder="mm/dd/yyyy"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Time*</label>
            <input
              type="text"
              placeholder="-- / --"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Guest*</label>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Name*</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone*</label>
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
        </form>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
          >
            Book A Table 📅
          </button>
        </div>
      </div>

      {/* Location Section */}
      <div className="text-center my-8">
        <h1 className="text-xl font-bold text-yellow-600">---Visit Us---</h1>
        <h2 className="text-2xl mt-2">OUR LOCATION</h2>
      </div>
      <div className="w-full max-w-4xl flex flex-wrap justify-center bg-white py-8 rounded-lg shadow-md">
        <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
          <div className="text-3xl text-yellow-600 mb-2">📞</div>
          <div className="text-gray-700">PHONE</div>
          <div className="text-gray-600">+38 (012) 34 56 789</div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
          <div className="text-3xl text-yellow-600 mb-2">📍</div>
          <div className="text-gray-700">ADDRESS</div>
          <div className="text-gray-600">+38 (012) 34 56 789</div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="text-3xl text-yellow-600 mb-2">⏰</div>
          <div className="text-gray-700">WORKING HOURS</div>
          <div className="text-gray-600">
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
