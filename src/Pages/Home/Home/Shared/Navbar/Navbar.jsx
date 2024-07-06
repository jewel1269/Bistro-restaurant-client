import React, { useContext, useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti'; // Corrected import
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../../Componants/Provider/AuthProvider';
import useCart from '../../../../../Hooks/useCart';
import useAdmin from '../../../../../Hooks/useAdmin';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useContext(AuthContext);
  console.log(user);
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  const handleSignOut = () => {
    signOut()
      .then(res => {})
      .catch(error => console.log(error));
  };

  return (
    <nav className="fixed z-20 bg-opacity-50 w-full shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="flex flex-col hover:bg-gray-900 text-white items-center">
              <h1 className="text-2xl font-bold">PIZZA BHAI</h1>
              <h3 className="text-lg">RESTAURANT</h3>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-2 py-4 transition-all duration-300 ease-in-out text-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? 'translate-x-0 opacity-100'
                : 'opacity-0 -translate-x-full'
            }`}
          >
            <div
              id="slider"
              className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8"
            >
              <NavLink
                to={'/'}
                className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:btn-outline dark:hover:bg-gray-700"
              >
                HOME
              </NavLink>

              <NavLink
                to={'/menu'}
                className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:btn-outline dark:hover:bg-gray-700"
              >
                OUR MENU
              </NavLink>
              <NavLink
                to={'/order/Salad'}
                className=" py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:btn-outline dark:hover:bg-gray-700"
              >
                FOOD ORDER
              </NavLink>
            </div>
            {isAdmin ? (
              <NavLink
                to={'dasboard/AdminHome'}
                className=" py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:btn-outline dark:hover:bg-gray-700"
              >
                DASHBOARD
              </NavLink>
            ) : (
              <NavLink
                to={'dasboard/cart'}
                className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:btn-outline dark:hover:bg-gray-700"
              >
                DASHBOARD
              </NavLink>
            )}

            <div className="flex items-center mt-4 lg:mt-0">
              {isAdmin ? (
                <NavLink to={'/dasboard/AdminHome'}>
                  <button className="flex gap-0 ">
                    <TiShoppingCart className="mr-2 bg-green-800 p-1 text-white rounded-full h-8 w-8" />
                    <div className="badge mr-5 rounded-full h-4 w-8 badge-secondary">
                      +{cart?.length}
                    </div>
                  </button>
                </NavLink>
              ) : (
                <NavLink to={'/dasboard/cart'}>
                  <button className="flex gap-0 ">
                    <TiShoppingCart className="mr-2 bg-green-800 p-1 text-white rounded-full h-8 w-8" />
                    <div className="badge mr-5 rounded-full h-4 w-8 badge-secondary">
                      +{cart?.length}
                    </div>
                  </button>
                </NavLink>
              )}

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    {user ? (
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user?.photoURL}
                        />
                      </div>
                    ) : (
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                      </div>
                    )}
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow text-black menu menu-sm dropdown-content  rounded-box w-32"
                  >
                    {user ? (
                      <button
                        onClick={handleSignOut}
                        className="btn btn-sm btn-outline btn-warning mr-2"
                      >
                        SIGN OUT
                      </button>
                    ) : (
                      <NavLink to={'/LogIn'}>
                        <button className="btn w-full mt-2 btn-outline btn-sm btn-success">
                          LogIn
                        </button>
                      </NavLink>
                    )}
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
