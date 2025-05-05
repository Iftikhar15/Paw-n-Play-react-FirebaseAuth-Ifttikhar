import React from 'react';
import s1 from '../../assets/slide1.jpg';
import s2 from '../../assets/slide2.jpg';
import s3 from '../../assets/slide3.jpg';
import s4 from '../../assets/slide4.jpg';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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
  return (
    <div className="carousel w-full h-[800px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img src={s1} alt="Slide 1" className="w-full h-full object-cover" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img src={s2} alt="Slide 2" className="w-full h-full object-cover" />
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
          <div className="p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 text-black bg-transparent opacity-30">
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
  );
};

export default Home;
