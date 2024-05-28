import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../../../../assets/contact/banner.jpg';
import logoTwo from '../../../../assets/contact/emo.png';
import Swal from 'sweetalert2';

const ContactSection = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAlert = e => {
    e.preventDefault();
    Swal.fire({
      title: 'Thanks for Your Feedback, We will contact you soon',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
    });
  };

  const isFormValid = formValues.name && formValues.email && formValues.message;

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
      <Helmet>
        <title>Dashboard || Contact Info</title>
      </Helmet>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
              Let’s talk
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Ask us everything and we would love to hear from you
            </p>

            <form className="mt-12">
              <div className="-mx-2 md:flex md:items-center">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                    required
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button
                onClick={handleAlert}
                disabled={!isFormValid}
                className={`w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${
                  isFormValid
                    ? 'bg-blue-500 text-white hover:bg-blue-400'
                    : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                }`}
              >
                Get in touch
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src={logo}
              alt=""
            />

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  Uttara Sector-10, Dhaka, Bangladesh
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  (+88) 01684321082
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  mohammadjewel4k5@gmail.com
                </span>
              </p>
              <div className="flex mt-4 -mx-1.5">
                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 15.9993C7.2215 17.222 9.8375 17.3333 12 15.9993C14.9155 14.3307 16.2215 10.712 15.3335 7.66668C16.0615 7.14134 16.7095 6.42534 17.3335 5.66668C16.7768 5.89734 16.1975 6.06468 15.6068 6.16668C16.2175 5.75334 16.7375 5.20334 17.3335 4.66668C16.7555 5.03068 16.1455 5.33134 15.5002 5.56668" />
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2C7.132 2 3 6.132 3 11.026c0 4.446 3.656 8.022 8.355 8.484.611.111.84-.266.84-.591v-2.048c-3.407.742-4.118-1.642-4.118-1.642-.556-1.42-1.356-1.796-1.356-1.796-1.111-.748.083-.732.083-.732 1.222.083 1.866 1.223 1.866 1.223 1.084 1.866 2.84 1.333 3.534 1.019.111-.806.418-1.333.764-1.642-3.034-.34-6.22-1.528-6.22-6.8 0-1.528.556-2.777 1.528-3.75-.167-.34-.694-1.752.167-3.564 0 0 1.278-.397 4.176 1.528 1.222-.334 2.528-.5 3.833-.5 1.305 0 2.611.166 3.833.5 2.883-1.925 4.167-1.528 4.167-1.528.861 1.812.334 3.224.167 3.564.973.973 1.528 2.222 1.528 3.75 0 5.272-3.186 6.44-6.22 6.8.445.397.806 1.084.806 2.193v3.25c0 .326.229.703.84.591 4.699-.462 8.355-4.038 8.355-8.484C21.053 6.132 16.921 2 12.026 2z"
                    />
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.004 2.00215C8.66699 1.99815 4.42199 3.26415 4.42199 8.84215V14.7422C4.42199 20.1642 8.52499 22.0022 11.855 22.0022H11.873C15.209 22.0022 19.543 20.7622 19.543 15.1852V9.28515C19.543 3.86215 15.439 2.00215 12.108 2.00215H12.004ZM9.42899 7.94315C9.42899 8.58015 8.91199 9.09615 8.27499 9.09615C7.63799 9.09615 7.12099 8.58015 7.12099 7.94315C7.12099 7.30615 7.63799 6.79015 8.27499 6.79015C8.91199 6.79015 9.42899 7.30615 9.42899 7.94315ZM15.456 7.69315C15.456 9.10815 14.297 10.2672 12.882 10.2672C11.467 10.2672 10.309 9.10815 10.309 7.69315C10.309 6.27815 11.467 5.12015 12.882 5.12015C14.297 5.12015 15.456 6.27815 15.456 7.69315ZM8.95599 15.6642C8.95599 14.4852 10.022 13.4762 11.309 13.4762H14.454C15.638 13.4762 16.52 14.2522 16.52 15.2312V16.0342C16.52 16.3862 16.236 16.6702 15.884 16.6702H9.67899C9.32599 16.6702 8.95599 16.3862 8.95599 16.0342V15.6642Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
