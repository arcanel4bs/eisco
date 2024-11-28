import React from 'react';
 
function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl mb-8 text-center text-[#4A0404] font-montserrat">Servicios</h1>
      
      <div className="flex flex-col md:flex-row mb-12 border border-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="md:w-1/2">
          <div className="h-full bg-gray-100">
            <img 
              src="/imagen-const-electrica2.png" 
              alt="Construcciones eléctricas" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl text-[#4A0404] mb-4 font-montserrat font-semibold">Construcciones eléctricas</h2>
          <p className="text-lg text-gray-600 mb-4 font-roboto">
            Nos especializamos en el desarrollo de soluciones de infraestructura eléctrica que cumplen con los más altos estándares de calidad y seguridad. Nuestros servicios de construcción eléctrica abarcan desde instalaciones en bajo y medio voltaje hasta sistemas de iluminación avanzados y redes de distribución.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-4 font-roboto">
            <li>
              <span className="font-semibold">Iluminación interior y exterior:</span> Instalación y diseño de sistemas de iluminación adaptados a diversos espacios y necesidades, con eficiencia y estética.
            </li>
            <li>
              <span className="font-semibold">Circuitos de fuerza:</span> Montaje de circuitos eléctricos de potencia, garantizando una distribución segura y eficiente de la energía.
            </li>
            <li>
              <span className="font-semibold">Redes en medio y bajo voltaje:</span> Diseño e instalación de redes de distribución para edificios y complejos industriales en diferentes niveles de tensión.
            </li>
            <li>
              <span className="font-semibold">Centros de transformación y protección:</span> Implementación de estaciones de transformación para asegurar una entrega constante y controlada de energía.
            </li>
            <li>
              <span className="font-semibold">Redes subterráneas:</span> Instalación de sistemas de distribución subterráneos para proteger los cables y mejorar la estética del entorno.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse mb-12 border border-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="md:w-1/2">
          <div className="h-full bg-gray-100">
            <img 
              src="/imagen-const-civil-2.png" 
              alt="Construcciones civiles" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl text-[#4A0404] mb-4 font-montserrat font-semibold">Construcciones civiles</h2>
          <p className="text-lg text-gray-600 mb-4 font-roboto">
            Nuestros servicios de construcción civil cubren desde la planificación inicial hasta la entrega de proyectos llave en mano. Con un enfoque en la calidad, sostenibilidad y puntualidad, EISCO ofrece soluciones integrales que se adaptan a los requerimientos de cada proyecto.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-4 font-roboto">
            <li>
              <span className="font-semibold">Desarrollo de proyectos estructurales</span>
            </li>
            <li>
              <span className="font-semibold">Urbanización y obra pública</span>
            </li>
            <li>
              <span className="font-semibold">Remodelación y adecuación de espacios</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row border border-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="md:w-1/2">
          <div className="h-full bg-gray-100">
            <img 
              src="/imagen-const-suministro.png" 
              alt="Suministros" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl text-[#4A0404] mb-4 font-montserrat font-semibold">Suministros</h2>
          <p className="text-lg text-gray-600 mb-4 font-roboto">
            EISCO ofrece una amplia gama de suministros especializados para el sector eléctrico, facilitando a nuestros clientes el acceso a productos de calidad que cumplen con las normativas técnicas y de seguridad.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 font-roboto">
            <li>
              <span className="font-semibold">Provisión de materiales eléctricos:</span> Ofrecemos una gran variedad de productos para cumplir con las especificaciones técnicas de cada proyecto.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
