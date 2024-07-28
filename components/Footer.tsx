import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <h1 className="text-lg font-bold mb-4">About us</h1>
          <p className="text-base">With a decade of experience, we specialize in transforming outdoor spaces. Let us bring our expertise to your landscape today!</p>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-lg font-bold mb-4">Contact</h1>
          <p className="text-base">Phone: +1234567890</p>
          <p className="text-base">Email: example@example.com</p>
          <p className="text-base">Address: 123 Main Street, City, Country</p>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-lg font-bold mb-4">Operating hours</h1>
          <p className="text-base">Monday to Friday: 9:00 AM - 5:00 PM</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
              <div className="text-sm text-gray-600">
                  <p>
            <a href="https://www.facebook.com/YourLandscapingCompany" target="_blank" rel="noopener noreferrer" className="mr-2 text-lg text-blue-500">Facebook</a>
            Follow us on Facebook for updates and inspiration.
          </p>
          <p>&copy; {new Date().getFullYear()} Your Landscaping Company. All rights reserved.</p>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;










