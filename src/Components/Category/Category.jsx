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

            <div className=" mx-auto">
                {/* Health & Wellness */}
                <div className="bg-violet-600 p2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-3d transition-all duration-300 flex mb-10 border-2 border-violet-900">
                    <div  className="text-5xl font-semibold w-1/2 text-center justify-center m-auto text-white">
                        <h3>Health & Wellness</h3>
                    </div>
                    <div className="text-xl text-black bg-white p-20 w-1/2">
                        <p>
                        Our Health & Wellness services are designed to keep your pet thriving at every stage of life. We offer comprehensive preventive care, including regular wellness exams, up-to-date vaccinations, parasite prevention, and diagnostic screenings to catch issues early. Our team also provides expert nutritional counseling, helping you choose the best diet tailored to your pet’s age, breed, and lifestyle. From dental health to weight management, we address every aspect of your pet’s well-being. Our compassionate approach ensures that your furry companion feels safe and cared for during every visit. By focusing on proactive and personalized care, we aim to extend your pet’s lifespan and enhance their quality of life—because a healthy pet is a happy pet.
                        </p>
                    </div>

                </div>

                {/* Grooming */}
                <div className="bg-violet-600 p2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-3d transition-all duration-300 flex mb-10 border-2 border-violet-900">
                    <div className="text-xl text-black bg-white p-20 w-1/2">
                        <p>
                        Our professional grooming services are designed to keep your pet looking their best while feeling comfortable and refreshed. We offer a full range of grooming treatments, including soothing baths with pet-safe shampoos, precise coat trimming to suit breed standards or owner preferences, de-shedding treatments to minimize shedding, and careful nail trimming for paw health. Every session is tailored to your pet’s specific needs and temperament, ensuring a calm and stress-free experience. Our experienced groomers are trained to handle pets gently and safely, using clean, sanitized tools. Beyond beauty, our grooming promotes skin health, hygiene, and overall well-being for your furry friend.
                        </p>
                    </div>
                    <div  className="text-5xl font-semibold w-1/2 text-center justify-center m-auto text-white">
                        <h3>Grooming</h3>
                    </div>


                </div>

                {/* Training */}
                <div className="bg-violet-600 p2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-3d transition-all duration-300 flex mb-10 border-2 border-violet-900">
                    <div  className="text-5xl font-semibold w-1/2 text-center justify-center m-auto text-white">
                        <h3>Training</h3>
                    </div>
                    <div className="text-xl text-black bg-white p-20 w-1/2">
                        <p>
                        Whether it's basic obedience, advanced commands, or behavior correction, our comprehensive pet training program is designed to build trust, confidence, and a strong bond between you and your furry companion. We use positive reinforcement methods—rewarding good behavior with treats, praise, and affection—to encourage learning in a fun and stress-free environment. From teaching essential commands like "sit" and "stay" to addressing behavioral issues such as barking, chewing, or leash pulling, our experienced trainers tailor each session to your pet’s age, temperament, and learning pace. Training can begin as early as 8 weeks old, setting the foundation for a well-mannered, socialized pet.
                        </p>

                    </div>

                </div>


                {/* Boarding & Sitting */}
                <div className="bg-violet-600 p2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-3d transition-all duration-300 flex mb-10 border-2 border-violet-900">
                    <div className="text-xl text-black bg-white p-20 w-1/2">
                        <p>
                            While you're away, your pet deserves more than just a place to stay—they deserve a second home. Our Boarding & Sitting service is designed to provide a safe, loving, and engaging environment where pets feel truly cared for, not just supervised. We understand that leaving your furry companion behind, even for a short time, can be stressful for both pet and owner. That’s why we go beyond the basics to ensure your pet feels secure, relaxed, and happy throughout their stay.

                            Our boarding facility is clean, temperature-controlled, and thoughtfully designed to feel like a cozy retreat. Each pet has their own comfortable sleeping area, and we maintain strict hygiene protocols to keep everything spotless and fresh. From plush bedding to ambient music and natural lighting, we create an atmosphere that promotes calmness and reduces anxiety.

                            
                        </p>
                    </div>
                    <div className="text-5xl font-semibold w-1/2 text-center justify-center m-auto text-white">
                        <h3>Boarding & Sitting</h3>
                    </div>


                </div>
            </div>
        </section >
    );
};

export default Category;