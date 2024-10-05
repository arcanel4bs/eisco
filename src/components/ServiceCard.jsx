import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description, icon, items }) {
  return (
    <div className="bg-white text-black shadow-lg p-6 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      <div className="text-6xl mb-4 text-white bg-black p-4 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-900 mb-4 flex-grow">{description}</p>
        <ul className="list-disc list-inside text-gray-900 mb-4">
          {items.slice(0, 3).map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
        <Link to="/projects" className=" flex justify-center text-gray-800 hover:text-white hover:bg-black font-semibold mt-auto rounded-none border border-black">
          Ver proyectos
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
