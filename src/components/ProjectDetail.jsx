import React from 'react';
import { useParams, Link } from 'react-router-dom';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

function ProjectDetail() {
  const { id } = useParams();
  
  // This is a mock database. In a real application, you'd fetch this data from an API.
  const projects = [
    {
      id: 1,
      title: 'Modern Office Building',
      location: 'Downtown Metro',
      type: 'Commercial',
      image: image1,
      description: 'This state-of-the-art office building features open floor plans, energy-efficient systems, and a rooftop garden. Located in the heart of the business district, it offers premium office space for growing companies.'
    },
    {
      id: 2,
      title: 'Luxury Apartment Complex',
      location: 'Suburban Area',
      type: 'Residential',
      image: image2,
      description: 'This luxurious apartment complex offers high-end living with amenities including a pool, fitness center, and landscaped gardens. Perfect for those seeking a premium lifestyle in a peaceful suburban setting.'
    },
    {
      id: 3,
      title: 'Shopping Mall Renovation',
      location: 'City Center',
      type: 'Commercial',
      image: image3,
      description: 'A complete overhaul of an existing shopping center, modernizing the space with a new food court, expanded retail areas, and improved parking facilities. This project breathes new life into a popular city landmark.'
    },
    {
      id: 4,
      title: 'Industrial Warehouse',
      location: 'Industrial Park',
      type: 'Industrial',
      image: image4,
      description: 'A state-of-the-art warehouse facility designed for optimal logistics operations. Features include high ceilings, loading docks, and advanced inventory management systems.'
    }
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/projects" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
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
