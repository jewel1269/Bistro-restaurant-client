import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Dasboard from '../Layout/Dasboard';
import Cart from '../Pages/Dasboard/Dasboard/Cart/Cart';
import ReviewForm from '../Pages/Dasboard/Reviews/ReviewForm';
import ReservationForm from '../Pages/Dasboard/ReservationForm/ReservationForm';
import PaymentHistory from '../Pages/Dasboard/Dasboard/PaymentHistory/PaymentHistory';
import ContactSection from '../Pages/Dasboard/Dasboard/ContactSection/ContactSection';
import ProfilePage from '../Pages/Dasboard/ProfilePage/ProfilePage';
import PrivateRoute from '../Pages/Home/PrivateRoute/PrivateRoute';
import AllUsers from '../Admin/AllUsers';
import UserHome from '../Pages/Dasboard/UserHome/UserHome';
import AdminHome from '../Admin/AdminHome.jsx/AdminHome';
import AddItemForm from '../Admin/AddItemForm/AddItemForm';
import ManageItems from '../Admin/ManageItems/ManageItems';
import UpdateItem from '../Admin/UpdateItem/UpdateItem';
import Payment from '../Pages/Dasboard/Dasboard/Cart/Payment.jsx/Payment';
import PaymentWrapper from '../Pages/Dasboard/Dasboard/PaymentWrapper/PaymentWrapper';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'order/:category',
        element: <Order />,
      },
      {
        path: '/LogIn',
        element: <Login />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
    ],
  },
  {
    path: 'dasboard',
    element: (
      <PrivateRoute>
        <Dasboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'cart',
        element: (
          <PrivateRoute>
            {' '}
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: 'ReviewForm',
        element: <ReviewForm />,
      },
      {
        path: 'PaymentHistory',
        element: <PaymentHistory />,
      },
      {
        path: 'ReservationForm',
        element: <ReservationForm />,
      },
      {
        path: 'ContactSection',
        element: <ContactSection />,
      },
      {
        path: 'UserHome',
        element: <UserHome />,
      },
      {
        path: 'ProfilePage',
        element: <ProfilePage />,
      },
      //admin
      {
        path: 'AllUsers',
        element: <AllUsers />,
      },
      {
        path: 'AdminHome',
        element: <AdminHome />,
      },
      {
        path: 'AddItemForm',
        element: <AddItemForm />,
      },
      {
        path: 'ManageItems',
        element: <ManageItems />,
      },
      {
        path: 'UpdateItem/:id',
        element: <UpdateItem />,
        loader: ({ params }) =>
          fetch(
            `https://bistro-boss-rastaurent-serverr-main.vercel.app/menu/${params.id}`
          ),
      },
      {
        path: 'PaymentWrapper',
        element: <PaymentWrapper />,
      },
      {
        path: 'Payment',
        element: <Payment />,
      },
    ],
  },
]);
