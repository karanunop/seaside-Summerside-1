import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-blue-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Lawn Maintenance</h3>
            <p className="text-gray-700 mb-4">
              Keep your lawn looking its best with our professional lawn
              maintenance services, including mowing, edging, fertilization, and
              weed control.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-green-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">
              Garden Design and Installation
            </h3>
            <p className="text-gray-700 mb-4">
              Transform your outdoor space with our custom garden design and
              installation services. From plant selection to layout design,
              we&apos;ll create the garden of your dreams.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-yellow-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Tree and Shrub Care</h3>
            <p className="text-gray-700 mb-4">
              Ensure the health and vitality of your trees and shrubs with our
              expert care services, including pruning, trimming, and disease
              management.
            </p>
          </div>

          {/* Add more services here */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
