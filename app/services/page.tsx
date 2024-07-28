import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import servicesData from "../../data/services.json";

const Services = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        Our Services
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            <div className="w-48 h-48 mb-4 md:mb-0 md:mr-4">
              <Image
                src={`/service${index + 1}.jpg`} 
                alt={`Service${index + 1}`}
                width={192}
                height={192}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{service.service}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
