import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl flex justify-center text-gray-800 mb-8 font-montserrat">Sobre Nosotros</h1>
        <p className="text-lg text-gray-600 mb-8 font-roboto">
          Somos una constructora líder a nivel nacional, dedicada a ofrecer soluciones integrales de diseño y construcción eléctrica y electrónica en media y baja tensión. Nuestra experiencia abarca diversos sectores, incluyendo industrial, comercial, residencial y público.
        </p>
        <h2 className="text-2xl flex text-gray-800 mb-6 font-montserrat">Nuestra Misión</h2>
        <p className="text-lg text-gray-600 mb-8 font-roboto">
          Nuestra misión es realizar proyectos que satisfagan las necesidades de nuestros clientes, siempre manteniendo los más altos estándares de eficiencia y calidad. Nos esforzamos por ser innovadores en nuestras soluciones, adaptándonos a las demandas cambiantes del mercado y las tecnologías emergentes.
        </p>
        <h2 className="text-2xl flex text-gray-800 mb-6 font-montserrat">Nuestra Experiencia</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-8 font-roboto space-y-2">
          <li>Diseño y construcción eléctrica</li>
          <li>Soluciones electrónicas</li>
          <li>Proyectos en media y baja tensión</li>
          <li>Servicios para sectores industrial, comercial y residencial</li>
          <li>Proyectos para el sector público</li>
        </ul>
        <div className="mt-12">
          <a 
            href="/contact" 
            className="bg-gray-50 text-gray-800 px-8 py-3 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors font-montserrat"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;