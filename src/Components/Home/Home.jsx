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
  } = singleBox || {};


  return (
    <>
      <div className="carousel w-full h-[800px]">
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
      <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50 w-8/12 mx-auto rounded-4xl">
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


        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      
        
          <img className=" object-cover rounded-md mb-4" src={thumbnail} alt={name} />
            
            
          
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-1">Category: {category}</p>
          <p className="text-gray-600 mb-1">Price: ${price}</p>
          <p className="text-gray-600 mb-4">Frequency: {frequency}</p>

          <div className='flex justify-between'>
          <button
            onClick={() => Navigate(-1)}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Go Back
          </button>
          <NavLink 
          to='/subscription-packages'>
          <button
            onClick={() => Navigate(-1)}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            View More
          </button>
          </NavLink>
          
          </div>
          
        
       
    </div>
      
    </>

  );
};

export default Home;
