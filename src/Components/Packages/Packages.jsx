import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CircleCheckBig } from 'lucide-react'; // or your icon library
import DataFetch from '../../Controller/DataFetch'; // Adjust path as needed


const Packages = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await DataFetch(); // Fetch your JSON data
                setData(result);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    

    if (isLoading) return <p>Loading...</p>;

    return (
        <section className='bg-violet-100 py-16 '>
            <div className="text-center my-10">
                <h1 className="text-4xl font-bold mb-4 text-violet-700">Choose Your Subscription Plan</h1>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                    Pick the plan that best suits your needs. Whether you're just getting started or need more advanced features, we've got a package for you.
                </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center " >
                {data.map((box) => {
                    const {
                        id,
                        thumbnail,
                        name,
                        category,
                        price,
                        frequency,
                        description,
                        features,
                        popular,
                    } = box;

                    return (
                        <div key={id} className="card w-96 shadow-sm bg-cyan-600">
                            <div className="card-body">
                                <div className="flex flex-col">
                                    {popular ? (
                                        <span className="px-3 mb-4 badge badge-md badge-warning">
                                            Most Popular
                                        </span>) : ""}
                                    <p className="text-right badge badge-xl bg-cyan-200">{category}</p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold">{name}</h2>
                                    <span className="text-xl">${price} / {frequency}</span>
                                </div>

                                <ul className="mt-6 flex flex-col gap-2 text-xs flex-1 bg-cyan-200 rounded-2xl p-5">
                                    {features?.map((feature, index) => (
                                        <li key={index}>
                                            <p className="flex">
                                                <CircleCheckBig className="mr-2" /> {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                <NavLink
                                    to={`/packages/${id}`}
                                    className="px-15 mt-4 py-3 rounded-full border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600 text-center"
                                >
                                    Select Plan
                                </NavLink>

                            </div>
                        </div>
                    );
                })}
            </div>

            

            
        </section>
    );
};

export default Packages;
