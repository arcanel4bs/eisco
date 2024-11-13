import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl flex justify-center text-[#4A0404] mb-8 font-montserrat">¿Quiénes somos?</h1>
        <p className="text-lg text-gray-600 mb-8 font-roboto">
          EISCO (Empresa Integral de Servicios de Construcción) es una compañía ecuatoriana con casi dos décadas de experiencia en el sector de la ingeniería y la construcción. Fundada el 19 de septiembre de 2005, EISCO se especializa en el desarrollo de proyectos de construcción eléctrica y civil, así como en el suministro de materiales de alta calidad. Nuestra trayectoria abarca más de 100 proyectos realizados en Quito, en colaboración con reconocidas constructoras e inmobiliarias del sector privado.
        </p>
        <p className="text-lg text-gray-600 mb-8 font-roboto">
          Con un equipo de profesionales altamente calificados, nos enfocamos en ofrecer soluciones integrales y adaptadas a las necesidades de nuestros clientes, manteniendo siempre el compromiso de calidad, seguridad y sostenibilidad en cada obra que realizamos.
        </p>
        <h2 className="text-2xl flex text-[#4A0404] mb-6 font-montserrat">Misión</h2>
        <p className="text-lg text-gray-600 mb-8 font-roboto">
          Brindar servicios de ingeniería y construcción de alta calidad en el sector eléctrico y civil, asegurando la satisfacción de nuestros clientes mediante soluciones innovadoras y sostenibles que cumplan con los más altos estándares de seguridad y eficiencia. Nos esforzamos por contribuir al desarrollo de infraestructura confiable y de excelencia en el Ecuador, con un enfoque en el cumplimiento de tiempos y presupuestos.
        </p>
        <h2 className="text-2xl flex text-[#4A0404] mb-6 font-montserrat">Visión</h2>
        <p className="text-lg text-gray-600 mb-8 font-roboto">
          Ser líderes reconocidos en la industria de la construcción eléctrica y civil en Ecuador, destacándonos por nuestra ética, calidad y compromiso con el desarrollo sostenible. Nos proyectamos como una empresa innovadora y adaptativa, capaz de enfrentar los desafíos del sector con soluciones que aporten al crecimiento y modernización de la infraestructura.
        </p>
        <div className="mt-12">
          <Link 
            to="/contact" 
            className="bg-gray-50 text-gray-800 px-8 py-3 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors font-montserrat"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;