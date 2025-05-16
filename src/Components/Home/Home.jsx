import React, { useEffect, useState } from 'react';
import s1 from '../../assets/slide1.jpg';
import s2 from '../../assets/slide2.jpg';
import s3 from '../../assets/slide3.jpg';
import s4 from '../../assets/slide4.jpg';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../../app.css';
import { Navigate, NavLink } from 'react-router';
import SubsBox from '../../Pages/SubsBox';
import DataFetch from '../../Controller/DataFetch';
import PricingFeature from '../../Pages/PricingFeature';
import { CircleCheckBig } from 'lucide-react';
import Faq from '../../Ui/Faq';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const CounterCard = ({ start, end, duration, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="flex flex-col items-center bg-white bg-opacity-80 rounded shadow p-5">
      {inView ? (
        <CountUp
          className="text-3xl sm:text-4xl md:text-5xl font-bold my-4"
          start={start}
          end={end}
          duration={duration}
          suffix="+"
        />
      ) : (
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold my-4">{start}+</span>
      )}
      <p className="text-sm md:text-base text-center">{label}</p>
    </div>
  );
};

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await DataFetch();
      setData(data);
      setisLoading(true);
    };
    !isLoading && fetchData();
  }, [isLoading]);

  const singleBox = data.find((box) => box.id === 1);
  const { thumbnail, name, category, price, features, popular } = singleBox || {};

  return (
    <div className='bg-violet-700'>
      <div className='w-11/12 mx-auto'>
        <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] rounded-2xl">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img src={s1} alt="Slide 1" className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 bg-black/40 flex items-start justify-start">
                  <div className="p-4 sm:p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 text-black bg-transparent opacity-30 ml-0">
                    <CounterCard start={0} end={10} duration={4} label="Total Shop" />
                    <CounterCard start={400} end={1000} duration={4} label="Total Clients" />
                    <CounterCard start={100} end={150} duration={4} label="Staffs" />
                    <CounterCard start={100} end={300} duration={4} label="Total Veterinarian" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img src={s2} alt="Slide 2" className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 flex items-start p-4 sm:p-10 rounded-2xl">
                  <p className="text-xl sm:text-3xl md:text-4xl pacifico-regular text-blue-950">
                    because <br /> your pet deserves the best
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={s3} alt="Slide 3" className="w-full h-full object-cover rounded-2xl" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img src={s4} alt="Slide 4" className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute top-1/3 left-4 sm:left-10 bg-opacity-30 bg-transparent p-4 sm:p-10 rounded-lg">
                  <p className="text-xl sm:text-3xl md:text-4xl pacifico-regular text-gray-900">
                    Upgrade <br /> to next level pet care
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="p-4 md:p-6 py-12 mt-20 bg-violet-400 text-white w-full max-w-4xl mx-auto rounded-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-3xl md:text-6xl text-center font-bold">Up to<br className="sm:hidden" />50% Off</h2>
            <div className="text-center py-4 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg"> PAWS</span>
            </div>
            <NavLink to="/category" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border bg-gray-900 hover:bg-violet-700 text-white border-gray-600">
              Shop Now
            </NavLink>
          </div>
        </div>

        <div className='bg-violet-700 flex flex-col lg:flex-row gap-6 p-6 md:p-20 my-10'>
          <div className="card w-full lg:w-1/3 shadow-sm bg-cyan-600 relative">
            <div className="card-body flex flex-col">
              <div className="flex flex-col">
                {popular && <span className="px-3 mb-4 badge badge-md badge-warning">Most Popular</span>}
                <p className="text-right badge badge-xl bg-cyan-200">{category}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <span className="text-xl">${price}/ Month</span>
              </div>
              <div className="relative mt-6 rounded-2xl overflow-hidden flex-grow">
                <div className="absolute inset-0 bg-black/50" style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2, zIndex: 0 }} />
                <ul className="relative z-10 flex flex-col gap-2 text-sm text-black font-bold p-5">
                  {features?.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CircleCheckBig className="mr-2 text-green-300" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <NavLink to="/packages" className="px-5 py-3 rounded-full border bg-gray-900 hover:bg-violet-300 hover:text-black text-white text-center">
                  View more
                </NavLink>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-2/3 rounded-2xl p-4 sm:p-10 flex flex-col justify-between'>
            <h3 className='text-2xl sm:text-4xl md:text-5xl text-white mb-6'>Pick your Pet's plan</h3>
            <h1 className='text-base sm:text-xl md:text-2xl text-amber-100 mb-10'>
              Delight your beloved companion with a curated selection of toys, treats, and adventures delivered monthly.
              Soon, every delivery will feel like it's just for them.
            </h1>
            <NavLink to="/packages" className="px-5 py-3 rounded-full border bg-gray-900 hover:bg-violet-300 hover:text-black text-white text-center">
              View other plans
            </NavLink>
          </div>
        </div>

        <section className="relative bg-amber-50 overflow-hidden py-20">
          <div className="absolute top-0 w-full rotate-180 leading-[0]">
            <svg className="relative block w-full h-[100px] fill-violet-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-violet-700 mb-4 text-center">
              Our Pet Care Categories
            </h1>
            <p className="text-sm sm:text-base text-gray-600 text-center max-w-2xl mb-10">
              Explore different types of care we offer to keep your pet happy and healthy!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
              {['Health & Wellness', 'Grooming', 'Training', 'Boarding & Sitting'].map((title, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold text-violet-700 mb-2">{title}</h2>
                  <p className="text-gray-600 text-sm">Description for {title.toLowerCase()}.</p>
                </div>
              ))}
            </div>

            <NavLink to="/category">
              <button className="mt-10 px-6 py-3 bg-violet-700 text-white rounded-full hover:bg-violet-800 transition">
                View More Categories
              </button>
            </NavLink>
          </div>

          <div className="absolute bottom-0 w-full leading-[0]">
            <svg className="relative block w-full h-[100px] fill-violet-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z" />
            </svg>
          </div>
        </section>

        <Faq />
      </div>
    </div>
  );
};

export default Home;
