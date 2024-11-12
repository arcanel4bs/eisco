import React from 'react';
import PresentationText from './PresentationText';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

function MainApp() {
  return (
    <div className="bg-[#4A0404]/5">
      <section className="relative mb-8">
        <img
          src="/hero-inicio.png"
          alt="Hero"
          className="w-full h-auto object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <PresentationText />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl flex justify-center mb-8 text-white py-10">Nuestros Servicios</h2>
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
        <h2 className="text-3xl flex justify-center mb-4 text-white">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className='flex justify-center mb-2 py-4'>
          <Link 
            to={`/projects`} 
            className="bg-white text-black px-4 py-2 flex justify-center self-start"
          >
            Ver Proyectos
          </Link>
        </div>
      </section>
    </div>
  );
}

export default MainApp;
