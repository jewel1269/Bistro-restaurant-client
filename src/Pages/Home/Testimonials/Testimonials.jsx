import CategoryTitle from '../CategoryTitle/CategoryTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { BiSolidQuoteSingleLeft } from 'react-icons/bi';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <section className="my-20 lg:ml-28 lg:mr-28">
      <CategoryTitle
        subHeading={'-------What Our Client Say------'}
        heading={'Testimonials'}
      ></CategoryTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <div className="my-16 mx-24 p-5 flex flex-col items-center text-current">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <div className="flex gap-0 ">
                <BiSolidQuoteSingleLeft className="h-20 w-16" />
                <BiSolidQuoteSingleLeft className="h-20 w-16" />
              </div>
              <p>{review?.ItemName}</p>
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
