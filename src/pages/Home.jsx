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
      <section className="relative w-screen -mx-[calc((100vw-100%)/2)] min-h-screen mt-[-48px]">
        <img
          src="/hero-inicio.png"
          alt="Hero"
          className="w-full h-full min-h-screen object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <PresentationText />
        </div>
      </section>
      
      <section className="mb-16 mt-24">
        <h2 className="text-3xl flex justify-center mb-8 text-[#4A0404] font-montserrat">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              icon={React.createElement(iconMap[service.icon])}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link 
            to="/services" 
            className="bg-gray-50 text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors font-roboto"
          >
            Ver más
          </Link>
        </div>
      </section>
      
      <section className='mb-8'>
        <h2 className="text-3xl flex justify-center mb-16 text-[#4A0404] font-montserrat">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className='flex justify-center mb-2 p-8'>
          <Link 
            to="/projects" 
            className="bg-gray-50 text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors font-roboto"
          >
            Ver Todos
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

