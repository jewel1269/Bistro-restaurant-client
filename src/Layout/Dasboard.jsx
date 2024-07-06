import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { CgProfile } from 'react-icons/cg';
import {
  FaBook,
  FaCartPlus,
  FaList,
  FaUsers,
  FaUtensils,
} from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import {
  MdContacts,
  MdDashboard,
  MdPayments,
  MdPreview,
  MdRestaurantMenu,
} from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { VscProject } from 'react-icons/vsc';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Componants/Provider/AuthProvider';
import {
  RiLogoutCircleRLine,
  RiMenuAddLine,
  RiMenuSearchFill,
} from 'react-icons/ri';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TiHomeOutline } from 'react-icons/ti';
import { FaUsersGear } from 'react-icons/fa6';
import useAdmin from '../Hooks/useAdmin';

const Dasboard = () => {
  const { signOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const handleSignOut = () => {
    signOut()
      .then(res => {
        toast.success('Successfully Logged Out');
      })
      .catch(error => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <div className="lg:flex ">
      <Helmet>
        <title>Dashboard || My Cart</title>
      </Helmet>
      <div className="w-64 min-h-full">
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <div className="flex flex-col hover:bg-orange-500 hover:border-2 hover:rounded-3xl text-white items-center">
            <h1 className="text-2xl text-black  font-bold">PIZZA BHAI</h1>
            <h3 className="text-lg text-black ">RESTAURANT</h3>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="flex-1 -mx-3 space-y-3 ">
              <div className="relative mx-3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  placeholder="Search"
                />
              </div>
              <ToastContainer />
              {isAdmin ? (
                <>
                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <TiHomeOutline />
                    <NavLink to={'AdminHome'}>
                      <span className="mx-2 text-sm font-medium">
                        Admin Home
                      </span>
                    </NavLink>
                  </a>
                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <FaUtensils />
                    <NavLink to={'AddItemForm'}>
                      <span className="mx-2 text-sm font-medium">
                        Add Items
                      </span>
                    </NavLink>
                  </a>
                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <FaBook />
                    <NavLink to={'ManageItems'}>
                      <span className="mx-2 text-sm font-medium">
                        Manage Items
                      </span>
                    </NavLink>
                  </a>

                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <FaList />
                    <NavLink to={'/'}>
                      <span className="mx-2 text-sm font-medium">
                        Manage Bookings
                      </span>
                    </NavLink>
                  </a>
                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <FaUsersGear />

                    <NavLink to={'AllUsers'}>
                      <span className="mx-2 text-sm font-medium">
                        All Users
                      </span>
                    </NavLink>
                  </a>
                </>
              ) : (
                <>
                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <MdDashboard />
                    <span className="mx-2 text-sm font-medium">Dashboard</span>
                  </a>
                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <FaCartPlus />
                    <NavLink to={'cart'}>
                      <span className="mx-2 text-sm font-medium">My Cart</span>
                    </NavLink>
                  </a>

                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <IoHomeOutline />
                    <NavLink to={'UserHome'}>
                      <span className="mx-2 text-sm font-medium">
                        User Home
                      </span>
                    </NavLink>
                  </a>

                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <SlCalender />

                    <NavLink to={'ReservationForm'}>
                      <span className="mx-2 text-sm font-medium">
                        Reservation
                      </span>
                    </NavLink>
                  </a>

                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <MdPayments />
                    <NavLink to={'PaymentHistory'}>
                      <span className="mx-2 text-sm font-medium">
                        Payment History
                      </span>
                    </NavLink>
                  </a>

                  <a
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    href="#"
                  >
                    <MdPreview />
                    <NavLink to={'ReviewForm'}>
                      <span className="mx-2 text-sm font-medium">
                        Add Review
                      </span>
                    </NavLink>
                  </a>
                </>
              )}

              <hr />

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <MdRestaurantMenu />
                <NavLink to={'/menu'}>
                  <span className="mx-2 text-sm font-medium">Menu</span>
                </NavLink>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <MdContacts />
                <NavLink to={'ContactSection'}>
                  <span className="mx-2 text-sm font-medium">Contacts</span>
                </NavLink>
              </a>
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <CgProfile />
                <NavLink to={'ProfilePage'}>
                  <span className="mx-2 text-sm font-medium">Profile</span>
                </NavLink>
              </a>
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <button
                  onClick={handleSignOut}
                  className="btn hover:bg-green-500 btn-sm flex"
                >
                  <RiLogoutCircleRLine />
                  <span className="mx-2 text-sm font-medium"> Log Out</span>
                </button>
              </a>
            </nav>
          </div>
        </aside>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dasboard;
