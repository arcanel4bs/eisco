import React from 'react';

function CompanyDescription() {
  return (
    <section className="bg-[#4A0404] text-white py-24 -mx-[calc((100vw-100%)/2)] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-12 tracking-wider">
          ACERCA DE EISCO
        </h2>
        <h3 className="text-4xl text-center mb-16 leading-relaxed">
          Empresa Integral de Servicios de Construcción desde el 2005
        </h3>
        <p className="text-center text-xl leading-relaxed max-w-4xl mx-auto">
          En EISCO brindamos soluciones integrales en ingeniería eléctrica y civil, 
          con más de 100 proyectos que respaldan nuestra experiencia y compromiso. 
          Trabajamos con constructoras e inmobiliarias líderes en Quito para transformar 
          ideas en realidad, siempre con estándares de eficiencia, seguridad y sostenibilidad.
        </p>
      </div>
    </section>
  );
}

export default CompanyDescription;
