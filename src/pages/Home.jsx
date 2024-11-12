import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import PresentationText from '../components/PresentationText';
import { FaBolt, FaBuilding, FaBoxes } from 'react-icons/fa';
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
    <div className="w-full">
      <section className="relative mb-8 w-screen -mx-[calc((100vw-100%)/2)]">
        <img
          src="/hero-inicio.png"
          alt="Hero"
          className="w-full h-[600px] object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <PresentationText />
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl flex justify-center mb-8 text-gray-800 font-montserrat font-semibold">Nuestros Servicios</h2>
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
      
      <section>
        <h2 className="text-3xl flex justify-center mb-4 text-gray-800 font-montserrat font-semibold">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className='flex justify-center mb-2 py-4'>
          <Link 
            to="/projects" 
            className="bg-gray-50 text-gray-800 px-6 py-2 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors font-roboto"
          >
            Ver Proyectos
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

