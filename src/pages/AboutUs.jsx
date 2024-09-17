import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <img 
          src="/api/placeholder/1200/600" 
          alt="Our Company" 
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are an Ecuadorian construction company based in Quito, with a proud history of 
          delivering excellence across 17 projects throughout the country. Our commitment to 
          quality and innovation has made us a leader in Ecuador's construction industry.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our mission is to transform the Ecuadorian landscape with sustainable, innovative, 
          and high-quality construction projects that improve the lives of our communities.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Expertise</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
          <li>Residential complexes</li>
          <li>Commercial buildings</li>
          <li>Infrastructure development</li>
          <li>Sustainable construction</li>
        </ul>
        <div className="mt-8">
          <a 
            href="/contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;