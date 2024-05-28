import React from 'react';
import { Helmet } from 'react-helmet-async';
import usePayment from '../../../../Hooks/usePayment';

const PaymentHistory = () => {
  const [payment] = usePayment();
  console.log(payment);

  return (
    <div className="lg:mt-10 text-center p-6">
      <Helmet>
        <title>Dashboard || Payment History</title>
      </Helmet>
      <h2 className="text-orange-500 mb-2">---At a Glance!---</h2>
      <h1 className="text-2xl font-bold mb-6">PAYMENT HISTORY</h1>
      <div className="lg:w-[1200px] h-min-screen border border-gray-300 rounded-lg p-4 inline-block mt-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Total Payments: {payment.length}
        </h2>
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-yellow-500 text-white">
              <th className="py-2 px-4 border">EMAIL</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 uppercase border">Transaction id</th>
              <th className="py-2 px-4 uppercase border">Status</th>
              <th className="py-2 px-4 border">TOTAL PRICE</th>
              <th className="py-2 px-4 border">PAYMENT DATE</th>
            </tr>
          </thead>
          <tbody>
            {payment.map((payment, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="py-2 px-4 border">{payment.email}</td>
                <td className="py-2 px-4 border">{payment.name}</td>
                <td className="py-2 px-4 border">{payment.transactionId}</td>
                <td className="py-2 px-4 border">{payment.status}</td>
                <td className="py-2 px-4 border">${payment.price}</td>
                <td className="py-2 px-4 border">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
