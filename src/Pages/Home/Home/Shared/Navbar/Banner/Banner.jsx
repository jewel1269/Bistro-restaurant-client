import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../../../../assets/home/01.jpg';
import image2 from '../../../../../../assets/home/02.jpg';
import image3 from '../../../../../../assets/home/03.jpg';
import image4 from '../../../../../../assets/home/04.jpg';
import image5 from '../../../../../../assets/home/05.jpg';
import image6 from '../../../../../../assets/home/06.jpg';

const Banner = () => {
  return (
    <Carousel>
       <div className="text-center">
        <img src={image4} />
      </div>
      <div className="text-center">
        <img src={image2} />
      </div>
      <div className="text-center">
        <img src={image1} />
      </div>
      <div className="text-center">
        <img src={image3} />
      </div>
     
      <div className="text-center">
        <img src={image5} />
      </div>
      <div className="text-center">
        <img src={image6} />
      </div>
    </Carousel>
  );
};

export default Banner;
