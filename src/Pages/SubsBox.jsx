import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import DataFetch from '../Controller/DataFetch';

const SubsBox = () => {
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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      
        
          <img className=" object-cover rounded-md mb-4" src={thumbnail} alt={name} />
            
            
          
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-1">Category: {category}</p>
          <p className="text-gray-600 mb-1">Price: ${price}</p>
          <p className="text-gray-600 mb-4">Frequency: {frequency}</p>
          <button
            onClick={() => Navigate(-1)}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Go Back
          </button>
        
       
    </div>
  );
};

export default SubsBox;
