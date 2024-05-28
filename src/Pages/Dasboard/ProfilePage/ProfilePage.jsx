import { useContext } from 'react';
import { AuthContext } from '../../../Componants/Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });
  console.log(users);
  return (
    <div>
      {user ? (
        <div className="w-full   p-6">
          <h2 className="text-2xl font-bold mb-4">My Profile</h2>

          <div className="flex lg:gap-10 flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-40 h-40 rounded-full mb-4"
                />
                <button className="bg-purple-500 text-white py-2 px-4 rounded-md mb-2">
                  Change photo
                </button>
                <button className="text-red-500">{user?.displayName}</button>
              </div>

              <div className="flex flex-col mb-4">
                <label className="mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md"
                  value={user?.displayName}
                  readOnly
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1 font-semibold">Adresse email</label>
                <div className="flex">
                  <input
                    type="email"
                    className="flex-1 p-2 border border-gray-300 rounded-l-md"
                    value={user?.email}
                    readOnly
                  />
                  <button className="bg-gray-200 p-2 rounded-r-md">
                    Modifier
                  </button>
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label className="mb-1 font-semibold">Number</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded-l-md"
                    value="+88 07 62 24 62 62"
                    readOnly
                  />
                  <button className="bg-gray-200 p-2 rounded-r-md">
                    Modifier
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:mr-16 md:w-1/2 flex items-center justify-center">
              <div className="bg-gray-100 p-6 rounded-md shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">
                  Renforcez la confiance !
                </h3>
                <p className="text-gray-600 mb-4">
                  Votre photo apparaîtra sur les emails et sur le bon de prise
                  de rendez-vous en ligne. Cela permet à vos prospects
                  d'associer une agence à une personne.
                </p>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Illustration"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-4xl lg:ml-72 font-bold lg:mt-32">
          No User Available......
        </h1>
      )}
    </div>
  );
};

export default ProfilePage;
