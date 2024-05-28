import { useEffect, useState } from 'react';
import CategoryTitle from '../../CategoryTitle/CategoryTitle';
import { GiPriceTag } from 'react-icons/gi';
import { RiFocus3Line } from 'react-icons/ri';

const ChefRecommad = () => {
  const [recommads, setRecommands] = useState([]);
  useEffect(() => {
    fetch('https://bistro-boss-rastaurent-serverr-main.vercel.app/menu')
      .then(res => res.json())
      .then(data => setRecommands(data));
  }, []);

  const items = recommads.slice(1, 6);
  console.log(items);

  return (
    <div>
      <div>
        <CategoryTitle
          subHeading={'-----Should Try-----'}
          heading={'CHEF RECOMMENDS'}
        ></CategoryTitle>
      </div>
      <div className="lg:grid lg:grid-cols-4 gap-5 lg:ml-28 lg:mr-20">
        {items.map(item => (
          <div key={item._id}>
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img
                className="object-cover object-center w-full h-56"
                src={item.image}
                alt="avatar"
              />

              <div className="flex items-center px-6 py-3 bg-gray-900">
                <RiFocus3Line className="text-white" />

                <h1 className="mx-3 text-lg font-semibold text-white">
                  Focusing
                </h1>
              </div>

              <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">
                  {item.recipe}
                </p>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <GiPriceTag />
                  <h1 className="px-2 text-sm font-bold text-red-400">
                    ${item.price}
                  </h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <div className="flex justify-center items-center lg:ml-28">
                    <button className="btn shadow-xl btn-sm border-0 border-b-4 shadow-slate-700 mt-4 hover:bg-green-600 btn-outline">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommad;
