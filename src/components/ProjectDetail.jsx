import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

function ProjectDetail() {
  const { id } = useParams();
  
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/projects" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={`/assets/${project.image}`} alt={project.title} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 mb-2">Location: {project.location}</p>
          <p className="text-gray-700 mb-4">Type: {project.type}</p>
          <p className="text-gray-800">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
