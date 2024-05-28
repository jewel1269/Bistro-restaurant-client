import React from 'react';
import image from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
  return (
    <div className="lg:mb-28 lg:ml-20 lg:mr-20 relative">
      <img src={image} alt="Chef service" className="w-full  h-auto" />
      <div className="bg-white lg:h-56 text-center lg:-mt-80 lg:w-[700px] border-2 z-20 border-gray-300 p-10 absolute left-1/2 transform -translate-x-1/2">
        <h1 className="uppercase text-4xl">Bistro Boss</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, <br /> 
          libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni <br /> 
          aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
