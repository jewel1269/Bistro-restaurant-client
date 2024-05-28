import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from '../Cart/Payment.jsx/Payment';

// Load Stripe.js asynchronously
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const PaymentWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

export default PaymentWrapper;
