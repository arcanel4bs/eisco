import React from 'react';

function ServiceCard({ title, description, icon, items, subServices }) {
  return (
    <div className="bg-white text-gray-800 p-6 flex flex-col h-full">
      <div className="text-6xl mb-8 text-[#4A0404] bg-white p-4 flex items-center justify-center rounded-xl">
        {icon}
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold mb-6 text-[#4A0404] font-montserrat">{title}</h3>
        <p className="text-gray-600 mb-6 font-roboto">{description}</p>
        
        {subServices && subServices.length > 0 && (
          <div className="mb-6">
            {subServices.map((subService, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 font-montserrat">{subService.title}</h4>
                <ul className="list-disc list-inside text-gray-600 font-roboto">
                  {subService.items.map((item, idx) => (
                    <li key={idx} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {items && items.length > 0 && (
          <ul className="list-disc list-inside text-gray-600 mb-4 font-roboto">
            {items.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ServiceCard;
