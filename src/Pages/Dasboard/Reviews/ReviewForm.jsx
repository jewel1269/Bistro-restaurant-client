import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../Componants/Provider/AuthProvider';
import Swal from 'sweetalert2';

const ReviewForm = () => {
  const axiosPublic = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleReview = async e => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const ItemName = form.ItemName.value;
    const details = form.details.value;

    const info = { ItemName, name, details };
    console.log(info);

    try {
      const { data } = await axiosPublic.post('/reviews', info);
      console.log('Response:', data);
      if (data.insertedId) {
        Swal.fire({
          title: 'Thanks for your Review',
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="lg:w-[1000px] lg:mt-10 lg:ml-16 rounded-lg shadow-2xl shadow-gray-300 p-6 bg-gray-100 flex flex-col items-center">
      <Helmet>
        <title>Dashboard || Reviews</title>
      </Helmet>
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold text-yellow-600">
          ---Sharing is Caring!---
        </h1>
        <h2 className="text-2xl mt-2">GIVE A REVIEW...</h2>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h3 className="text-lg font-semibold text-center mb-4">RATE US!</h3>
        <div className="rating lg:ml-[38%] gap-1">
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-red-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-lime-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-green-400"
          />
        </div>
        <form onSubmit={handleReview}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Which recipe you liked most?
            </label>
            <input
              type="text"
              name="ItemName"
              id="ItemName"
              placeholder="Recipe you liked most"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Do you have any suggestion for us?
            </label>
            <input
              type="text"
              placeholder="Suggestion"
              name="suggestion"
              id="suggestion"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Kindly express your care in a short way.
            </label>
            <textarea
              placeholder="Review in detail"
              name="details"
              id="details"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg"
            >
              Send Review 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
