import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure, { axiosSecure } from '../../Hooks/useAxiosSecure';

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
const UpdateItem = () => {
  const item = useLoaderData();
  const { name, recipe, category, price, image, _id } = item;
  const handleAddItem = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const recipe = form.recipe.value;
    const category = form.category.value;
    const price = form.price.value;
    const imageFile = form.image.files[0];

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const imageResponse = await fetch(imageHostingApi, {
        method: 'POST',
        body: formData,
      });

      const imageResult = await imageResponse.json();

      if (!imageResponse.ok || imageResult.error) {
        throw new Error(imageResult.error.message || 'Failed to upload image');
      }

      const imageUrl = imageResult.data.url;
      const info = { name, recipe, category, price, image: imageUrl };

      const postResponse = await axiosSecure.patch(`/menu/${_id}`, info);
      console.log('Response:', postResponse.data);

      Swal.fire({
        icon: 'success',
        title: `${name} Updated`,
        text: 'Your item has been Updated successfully!',
      });

      form.reset();
    } catch (error) {
      console.error('Error:', error);
      let errorMessage =
        'There was an error adding your item. Please try again.';
      if (error.message === 'Invalid API v1 key.') {
        errorMessage = 'The provided image hosting API key is invalid.';
      }
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage,
      });
    }
  };

  return (
    <div className="flex lg:w-[1100px] lg:ml-10 lg:mt-10 flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center mb-4">
        <p className="text-yellow-600 text-xl">---What's new?---</p>
        <h1 className="text-3xl uppercase font-bold">Update your ITEM</h1>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full border-2">
        <form onSubmit={handleAddItem}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Recipe name*
            </label>
            <input
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Recipe name"
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="category"
              >
                Category*
              </label>
              <select
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
                id="category"
                name="category"
                defaultValue={category}
                required
              >
                <option>Category</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salads</option>
                <option value="drink">Drinks</option>
              </select>
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="price"
              >
                Price*
              </label>
              <input
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
                id="price"
                name="price"
                type="text"
                placeholder="Price"
                defaultValue={price}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="recipe"
            >
              Recipe Details*
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:shadow-outline"
              id="recipe"
              name="recipe"
              placeholder="Recipe Details"
              defaultValue={recipe}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image"
            >
              Choose File
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:outline-none"
              id="image"
              name="image"
              type="file"
              required
            />
          </div>
          <div className="text-center">
            <button
              className="bg-yellow-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Item{' '}
              <span role="img" aria-label="food">
                🍴
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
