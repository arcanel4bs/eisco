import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description, icon, items, subServices }) {
  return (
    <div className="bg-white text-gray-800 border border-gray-100 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <div className="text-6xl mb-4 text-white bg-[#4A0404] p-4 flex items-center justify-center rounded-xl">
        {icon}
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 font-montserrat">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow font-roboto">{description}</p>
        
        {subServices && subServices.length > 0 && (
          <div className="mb-4">
            {subServices.map((subService, index) => (
              <div key={index} className="mb-3">
                <h4 className="font-semibold text-gray-800 mb-1 font-montserrat">{subService.title}</h4>
                <ul className="list-disc list-inside text-gray-600 font-roboto">
                  {subService.items.map((item, idx) => (
                    <li key={idx} className="mb-1 ml-2">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {items && items.length > 0 && (
          <ul className="list-disc list-inside text-gray-600 mb-4 font-roboto">
            {items.map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ul>
        )}
        
        <Link 
          to="/projects" 
          className="flex justify-center text-gray-800 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-lg p-2 transition-colors font-roboto"
        >
          Ver proyectos
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
