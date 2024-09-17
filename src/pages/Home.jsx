import React from 'react';
import ImageSlider from '../components/ImageSlider';
import ProjectCard from '../components/ProjectCard';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

function Home() {
  const images = [image1, image2, image3, image4];

  const featuredProjects = [
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
    }
  ];

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">EISCO</h1>
        <ImageSlider images={images} />
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <div className="p-6 bg-slate-800 rounded-lg shadow-lg text-white">
  <p className="text-lg font-bold mb-4">Bienvenidos a EISCO</p>
  <p className="mb-4">
    En EISCO, transformamos tus sueños en realidad. Con más de <span className="font-semibold">x años de experiencia</span> en el sector, ofrecemos servicios de construcción de alta calidad, desde proyectos residenciales hasta comerciales. Nuestro equipo de expertos se dedica a entregar resultados excepcionales, garantizando satisfacción y excelencia en cada detalle.
  </p>
  <p className="text-lg font-bold mb-2">Nuestros Servicios:</p>
  <ul className="list-disc list-inside mb-4">
    <li><span className="font-semibold">Construcción Residencial:</span> Diseñamos y construimos hogares personalizados que reflejan tu estilo y necesidades.</li>
    <li><span className="font-semibold">Proyectos Comerciales:</span> Creamos espacios comerciales funcionales y modernos que impulsan tu negocio.</li>
    <li><span className="font-semibold">Renovaciones y Remodelaciones:</span> Transformamos y mejoramos tus espacios existentes con soluciones innovadoras.</li>
  </ul>
  <p className="text-lg font-bold mb-2">Por qué Elegirnos:</p>
  <ul className="list-disc list-inside mb-4">
    <li><span className="font-semibold">Calidad y Compromiso:</span> Utilizamos materiales de primera calidad y técnicas avanzadas para asegurar la durabilidad y belleza de cada proyecto.</li>
    <li><span className="font-semibold">Experiencia y Profesionalismo:</span> Nuestro equipo está compuesto por profesionales altamente capacitados y con amplia experiencia en el sector.</li>
    <li><span className="font-semibold">Satisfacción Garantizada:</span> Nos esforzamos por superar tus expectativas en cada etapa del proyecto.</li>
  </ul>
  <p className="text-lg font-bold mb-2">Testimonios:</p>
  <p className="italic mb-4">“Gracias a EISCO, ahora tenemos la casa de nuestros sueños. Su atención al detalle y profesionalismo fueron excepcionales.” - Cliente Satisfecho</p>
  <p className="text-lg font-bold mb-2">Contáctanos:</p>
  <p>¿Listo para comenzar tu próximo proyecto? ¡Contáctanos hoy mismo para una consulta gratuita!</p>
</div>

      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
