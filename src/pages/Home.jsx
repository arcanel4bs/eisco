import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import PresentationText from '../components/PresentationText';
import { FaBolt, FaBuilding, FaBoxes } from 'react-icons/fa';
import projectsData from '../data/projects.json';
import servicesData from '../data/services.json';
import CompanyDescription from '../components/CompanyDescription';

function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  const iconMap = {
    FaBolt,
    FaBuilding,
    FaBoxes
  };

  return (
    <div className="w-full">
      <section className="relative w-screen -mx-[calc((100vw-100%)/2)] h-screen">
        <img
          src="/hero-inicio.png"
          alt="Hero"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <PresentationText />
        </div>
      </section>
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center font-montserrat text-[#4A0404] mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                icon={React.createElement(iconMap[service.icon])}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link 
              to="/services" 
              className="btn btn-outline hover:shadow-button-hover"
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>

      <CompanyDescription />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center font-montserrat text-[#4A0404] mb-16">
            Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link 
              to="/projects" 
              className="btn btn-outline hover:shadow-button-hover"
            >
              Ver Todos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

