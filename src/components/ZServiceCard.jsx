import React from 'react';
import { Link } from 'react-router-dom';

function ZServiceCard({ title, description, icon, items, reverse }) {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : ''} items-center mb-12`}>
      <div className="w-1/3">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <div className="text-6xl text-black bg-white p-10 flex w-11/12 items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="w-2/3 px-8 py-12">
        
        <p className="text-white mb-4">{description}</p>
        <ul className="list-disc list-inside text-white mb-4">
          {items.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
        <Link to="/projects" className="text-white hover:text-black hover:bg-white p-2 font-semibold">
          Ver proyectos
        </Link>
      </div>
    </div>
  );
}

export default ZServiceCard;
