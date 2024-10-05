import React from 'react';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-lg overflow-hidden h-[475px] flex flex-col">
      <div className="w-full h-80 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 text-black flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            <span className="line-clamp-2">{project.location}</span>
          </p>
          <p className="text-gray-600 mb-4 flex items-center">
            <FaBuilding className="mr-2 text-gray-500" />
            <span>{project.type}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
