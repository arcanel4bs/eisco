import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { FaBolt, FaBuilding, FaBoxes } from 'react-icons/fa';

function Services() {
  const services = [
    {
      title: "Construcciones eléctricas",
      description: "Diseñamos e implementamos soluciones eléctricas innovadoras y eficientes para todo tipo de proyectos.",
      icon: <FaBolt />,
      items: [
        "Instalaciones eléctricas residenciales y comerciales",
        "Sistemas de iluminación",
        "Redes de distribución eléctrica",
        "Automatización y control",
        "Mantenimiento eléctrico"
      ]
    },
    {
      title: "Construcciones civiles",
      description: "Ofrecemos servicios integrales de construcción civil, desde la planificación hasta la ejecución de proyectos.",
      icon: <FaBuilding />,
      items: [
        "Edificios residenciales y comerciales",
        "Infraestructura industrial",
        "Obras públicas",
        "Remodelaciones y ampliaciones",
        "Gestión de proyectos de construcción"
      ]
    },
    {
      title: "Suministros",
      description: "Proveemos una amplia gama de suministros eléctricos y de construcción de alta calidad para sus proyectos.",
      icon: <FaBoxes />,
      items: [
        "Materiales eléctricos",
        "Equipos de seguridad",
        "Herramientas y maquinaria",
        "Materiales de construcción",
        "Sistemas de climatización"
      ]
    }
  ];

  return (
    <div>
      <div className="text-3xl text-white mb-8 flex justify-center">
        <h1>Nuestros Servicios</h1>
      </div>
      <div className="mb-8">
        <img src="./bulb-world.jpg" alt="Bulb World" className="w-full h-2/3 object-cover" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
