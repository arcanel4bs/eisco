import React from 'react'
import ProjectCard from '../components/ProjectCard'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Modern Office Building',
      location: 'Downtown Metro',
      type: 'Commercial',
      image: image1
    },
    {
      id: 2,
      title: 'Luxury Apartment Complex',
      location: 'Suburban Area',
      type: 'Residential',
      image: image2
    },
    {
      id: 3,
      title: 'Shopping Mall Renovation',
      location: 'City Center',
      type: 'Commercial',
      image: image3
    },
    {
      id: 4,
      title: 'Industrial Warehouse',
      location: 'Industrial Park',
      type: 'Industrial',
      image: image4
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects
