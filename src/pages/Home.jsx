import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import PresentationText from '../components/PresentationText';
import { FaBolt, FaBuilding, FaBoxes } from 'react-icons/fa';
import landingpic1 from '../assets/lightbulb.jpg';
import projectsData from '../data/projects.json';
import servicesData from '../data/services.json';

function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  const iconMap = {
    FaBolt,
    FaBuilding,
    FaBoxes
  };

  return (
    <div>
      <section className="mb-8 flex justify-center">
        <img
          src={landingpic1}
          alt="landing pic"
          className="w-11/12 h-min object-cover"
        />
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl flex justify-center mb-8 text-white">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              icon={React.createElement(iconMap[service.icon])}
            />
          ))}
        </div>
      </section>
      
      <PresentationText />
      
      <section>
        <h2 className="text-3xl flex justify-center mb-4 text-white">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className='flex justify-center mb-2 py-4'>
        <Link 
          to={`/projects`} 
          className="bg-white text-black px-4 py-2 flex justify-center inline-block self-start"
        >
          Ver Proyectos
        </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
