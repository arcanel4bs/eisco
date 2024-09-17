import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-2">Location: {project.location}</p>
        <p className="text-gray-700 mb-4">Type: {project.type}</p>
        <Link to={`/projects/${project.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          See More
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
