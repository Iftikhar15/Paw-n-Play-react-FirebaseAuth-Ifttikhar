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


const CounterCard = ({ start, end, duration, label }) => {






  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="flex flex-col items-center bg-white bg-opacity-80 rounded shadow p-5">
      {inView ? (
        <CountUp
          className="text-4xl md:text-5xl font-bold my-4"
          start={start}
          end={end}
          duration={duration}
          suffix="+"
        />
      ) : (
        <span className="text-4xl md:text-5xl font-bold my-4">{start}+</span>
      )}
      <p className="text-sm md:text-base text-center">{label}</p>
    </div>
  );
};

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setisLoading] = useState(false)
  console.log(data);



  useEffect(() => {
    const fetchData = async () => {
      const data = await DataFetch();
      // console.log("fetchingdata",data);

      setData(data)
      setisLoading(true)

    };
    !isLoading && fetchData();
  }, [isLoading])





  const singleBox = data.find((box) => (box.id) === 1);

  const {
    thumbnail,
    name,
    category,
    price,
    frequency,
    description,
    features,
    popular,
  } = singleBox || {};

  // console.log("features",data);



  return (
    <>
      <div className='bg-violet-700'>
        <div className=' w-11/12 mx-auto'>
          <div className="carousel w-full h-[800px] rounded-2xl">
            {/* Slide 1 */}
            <div id="slide1" className="relative carousel-item w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${s1})` }}
            >
              <div className=' bg-blue-100 absolute opacity-40 items-start ml-30' >
                <div >
                  <p className='text-4xl pacifico-regular p-10 outline-blue-950 '>Upgrade <br />to next level pet care</p>

                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="relative carousel-item w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${s2})` }}>


              <div className=' bg-blue-100 absolute opacity-70 items-start ml-30' >
                <div >
                  <p className='text-4xl pacifico-regular p-10 outline-blue-950 '>because <br />your pet deserves the best</p>

                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full h-full">
              <img src={s3} alt="Slide 3" className="w-full h-full object-cover" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* Slide 4 */}
            <div
              id="slide4"
              className="carousel-item relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${s4})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex items-start justify-start">
                <div className="p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 text-black bg-transparent opacity-30 ml-0">
                  <CounterCard start={0} end={10} duration={4} label="Total Shop" />
                  <CounterCard start={400} end={1000} duration={4} label="Total Clients" />
                  <CounterCard start={100} end={150} duration={4} label="Staffs" />
                  <CounterCard start={100} end={300} duration={4} label="Total Veterinarian" />
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>


          <div className="p-6 py-12 mt-20 dark:bg-violet-400 dark:text-gray-50 w-8/12 mx-auto rounded-4xl">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                  <br className="sm:hidden" />50% Off
                </h2>
                <div className="space-x-2 text-center py-2 lg:py-0">
                  <span>Plus free shipping! Use code:</span>
                  <span className="font-bold text-lg">PAWS</span>
                </div>
                <NavLink
                  to="/category"
                  className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
                >
                  Shop Now
                </NavLink>

              </div>
            </div>
          </div>



          <div className='bg-violet-700 flex flex-1/2 p-20 my-10 h-[700px] '>

            <div className="card w-96 shadow-sm bg-cyan-600 relative">
              <div className="card-body">
                <div className='flex flex-col '>
                  {popular && <span className="px-3 mb-4 badge badge-md badge-warning">Most Popular</span>}
                  <p className='text-right badge badge-xl  bg-cyan-200'>{category}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <span className="text-xl">${price}/ Month</span>

                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs flex-1 bg-cyan-200 rounded-2xl p-5">
                  {features?.map((feature, index) => <li key={index}>
                    <p className='flex'><CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
                  </li>)
                  }

                </ul>
                <NavLink
                  to="/packages"
                  className="px-15 mt-4 lg:mt-0 py-3 rounded-full border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600 text-center  "
                >
                  Select Plan
                </NavLink>
              </div>
            </div>

            <div className=' w-2/3 rounded-2xl p-10 flex-1'>
              <h3 className='text-5xl text-white mb-10'>Pick your Pet's plan</h3>
              <h1 className='text-3xl text-amber-100 mb-20'>Delight your beloved companion with a curated selection of toys, treats, and adventures delivered monthly. Soon, every delivery will feel like it's just for them.</h1>

              <NavLink
                to="/packages"
                className="px-15 mt-4 lg:mt-0 py-3 rounded-full border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600 text-center absolute "
              >
                View More
              </NavLink>
            </div>
          </div>



          <section className="relative bg-amber-50 h-[500px] overflow-hidden">
            {/* Top Violet Wave */}
            <div className="absolute top-0 w-full rotate-180 overflow-hidden leading-[0]">
              <svg
                className="relative block w-[calc(100%+1.3px)] h-[100px] fill-violet-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z" />
              </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-20">
              <h1 className="text-5xl font-bold text-violet-700 mb-4 text-center">
                Our Pet Care Categories
              </h1>
              <p className="text-lg text-gray-600 text-center max-w-2xl mb-10">
                Explore different types of care we offer to keep your pet happy and healthy!
              </p>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold text-violet-700 mb-2">Health & Wellness</h2>
                  <p className="text-gray-600 text-sm">Vet visits, vaccinations, and checkups.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold text-violet-700 mb-2">Grooming</h2>
                  <p className="text-gray-600 text-sm">Bathing, brushing, nail trimming & more.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold text-violet-700 mb-2">Training</h2>
                  <p className="text-gray-600 text-sm">Basic obedience and behavior training programs.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold text-violet-700 mb-2">Boarding & Sitting</h2>
                  <p className="text-gray-600 text-sm">Safe overnight care when you're away.</p>
                </div>
              </div>


              {/* View More Button */}
              <NavLink
                to="/category"
              >
                <button className="mt-10 px-6 py-3 bg-violet-700 text-white rounded-full hover:bg-violet-800 transition">
                  View More Categories
                </button>
              </NavLink>

            </div>

            {/* Bottom Violet Wave */}
            <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
              <svg
                className="relative block w-[calc(100%+1.3px)] h-[100px] fill-violet-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z" />
              </svg>
            </div>
          </section>

        </div>
      </div>
      <Faq></Faq>





    </>

  );
};

export default Home;
