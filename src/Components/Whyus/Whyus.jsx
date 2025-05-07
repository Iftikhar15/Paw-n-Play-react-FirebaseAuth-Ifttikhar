import React from 'react';

const whyus = () => {
  return (
    <section className="bg-violet-100 py-16 text-black text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-violet-700 mb-6">Why Choose Us?</h2>
        <p className="text-lg mb-10 text-gray-700">
          At our pet care center, we are more than just a service—we are a family. With expert staff, personalized attention, and a
          deep passion for animals, we create a safe and joyful environment where your pet thrives.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-violet-600">
            <h3 className="text-xl font-semibold text-violet-800 mb-2">Personalized Care</h3>
            <p className="text-gray-600">We treat every pet like family, with routines and attention tailored to their unique needs and personality.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-violet-600">
            <h3 className="text-xl font-semibold text-violet-800 mb-2">24/7 Staff Availability</h3>
            <p className="text-gray-600">Our dedicated team is available around the clock to ensure your pet's safety and comfort at all times.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-violet-600">
            <h3 className="text-xl font-semibold text-violet-800 mb-2">Clean & Cozy Facilities</h3>
            <p className="text-gray-600">Our state-of-the-art, hygienic, and welcoming environment helps your pet feel relaxed and stress-free.</p>
          </div>
        </div>


        <h3 className="text-2xl font-bold text-violet-700 mt-16 mb-6">What Our Customers Say</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <p className="text-gray-700 mb-4">"Leaving my dog here was the best decision! He was so happy and well taken care of. The updates and photos kept me at ease."</p>
            <p className="font-semibold text-violet-800">– Jessica M.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <p className="text-gray-700 mb-4">"They truly care about animals. My cat came home clean, healthy, and calm. I’ll never trust anyone else!"</p>
            <p className="font-semibold text-violet-800">– Rahul P.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default whyus;