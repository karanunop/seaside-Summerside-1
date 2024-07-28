import React from 'react';
import Image from 'next/image';
import mainPhoto from '../public/landscaping.jpg';

const Firstpart = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-8 py-16">
      {/* Image */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
      <Image src={mainPhoto} alt="landscape" width={700} height={400} />
    </div>


      {/* Content */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Seaside 
        <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text"> Landscaping</span>
</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          Providing <span className="text-green-500 font-semibold">residential</span> and <span className="text-green-500 font-semibold">commercial</span> landscaping services to the greater Summerside area. We specialize in creating
          beautiful outdoor spaces that enhance the natural beauty of your property and provide a tranquil environment for
          relaxation and enjoyment.
        </p>
        {/* Additional paragraphs can be added here */}
      </div>
    </div>
  );
};

export default Firstpart;






