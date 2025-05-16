import React from 'react';

const Category = () => {
  return (
    <section className="bg-gradient-to-b py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div>
          <h2 className="text-4xl font-bold text-violet-700 mb-4">Our Pet Care Categories</h2>
        </div>
        <p className="text-gray-600 text-lg">
          Tailored services that ensure your pet's happiness, comfort, and well-being—from head to tail.
        </p>
      </div>

      <div className="mx-auto">
        {/* Health & Wellness */}
        <div className="bg-violet-600 p-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col md:flex-row mb-10 border-2 border-violet-900">
          <div className="text-4xl font-semibold w-full md:w-1/2 text-center flex justify-center items-center text-white p-6">
            <h3>Health & Wellness</h3>
          </div>
          <div className="text-xl text-black bg-white p-6 md:p-20 w-full md:w-1/2">
            <p>
              Our Health & Wellness services are designed to keep your pet thriving at every stage of life...
            </p>
          </div>
        </div>

        {/* Grooming */}
        <div className="bg-violet-600 p-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col-reverse md:flex-row mb-10 border-2 border-violet-900">
          <div className="text-xl text-black bg-white p-6 md:p-20 w-full md:w-1/2">
            <p>
              Our professional grooming services are designed to keep your pet looking their best...
            </p>
          </div>
          <div className="text-4xl font-semibold w-full md:w-1/2 text-center flex justify-center items-center text-white p-6">
            <h3>Grooming</h3>
          </div>
        </div>

        {/* Training */}
        <div className="bg-violet-600 p-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col md:flex-row mb-10 border-2 border-violet-900">
          <div className="text-4xl font-semibold w-full md:w-1/2 text-center flex justify-center items-center text-white p-6">
            <h3>Training</h3>
          </div>
          <div className="text-xl text-black bg-white p-6 md:p-20 w-full md:w-1/2">
            <p>
              Whether it's basic obedience, advanced commands, or behavior correction, our comprehensive...
            </p>
          </div>
        </div>

        {/* Boarding & Sitting */}
        <div className="bg-violet-600 p-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col-reverse md:flex-row mb-10 border-2 border-violet-900">
          <div className="text-xl text-black bg-white p-6 md:p-20 w-full md:w-1/2">
            <p>
              While you're away, your pet deserves more than just a place to stay—they deserve a second home...
            </p>
          </div>
          <div className="text-4xl font-semibold w-full md:w-1/2 text-center flex justify-center items-center text-white p-6">
            <h3>Boarding & Sitting</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
