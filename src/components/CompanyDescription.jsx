import React from 'react';

function CompanyDescription() {
  return (
    <section className="bg-[#4A0404] text-white py-24 -mx-[calc((100vw-100%)/2)] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl text-center mb-10 tracking-wider font-['Helvetica Neue']">
          QUIENES SOMOS
        </h2>
        <h3 className="text-4xl font-semibold text-center mb-14 leading-relaxed font-['Helvetica Neue']">
          Empresa Integral de Servicios de Construcción con más de 19 años de experiencia en el sector
        </h3>
        <p className="text-center text-2xl font-light leading-relaxed max-w-4xl mx-auto font-['Helvetica Neue']">
          Nos especializamos en soluciones integrales de ingeniería eléctrica y civil, 
          con más de 100 proyectos que respaldan nuestra trayectoria y compromiso. 
          Trabajamos con constructoras e inmobiliarias líderes en Quito para transformar 
          ideas en realidad, siempre con estándares de eficiencia, seguridad y sostenibilidad.
        </p>
      </div>
    </section>
  );
}

export default CompanyDescription;
