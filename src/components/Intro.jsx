import React from 'react'

function Intro() {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-3xl  mb-4">Sobre Nosotros</h2>
        <div className="p-6 bg-grey-400 margin shadow-lg text-white">
          <p className="text-lg font-semibold mb-4">Bienvenidos a EISCO</p>
          <p className="mb-4">
            En EISCO, transformamos tus sueños en realidad. Con más de <span>x años de experiencia</span> en el sector, ofrecemos servicios de construcción de alta calidad, desde proyectos residenciales hasta comerciales. Nuestro equipo de expertos se dedica a entregar resultados excepcionales, garantizando satisfacción y excelencia en cada detalle.
          </p>
          <p className="text-lg font-semibold mb-2">Nuestros Servicios:</p>
          <ul className="list-disc list-inside mb-4">
            <li><span className="">Construcción Residencial:</span> Diseñamos y construimos hogares personalizados que reflejan tu estilo y necesidades.</li>
            <li><span className="">Proyectos Comerciales:</span> Creamos espacios comerciales funcionales y modernos que impulsan tu negocio.</li>
            <li><span className="">Renovaciones y Remodelaciones:</span> Transformamos y mejoramos tus espacios existentes con soluciones innovadoras.</li>
          </ul>
          <p className="text-lg font-semibold mb-2">Por qué Elegirnos:</p>
          <ul className="list-disc list-inside mb-4">
            <li><span className="">Calidad y Compromiso:</span> Utilizamos materiales de primera calidad y técnicas avanzadas para asegurar la durabilidad y belleza de cada proyecto.</li>
            <li><span className="">Experiencia y Profesionalismo:</span> Nuestro equipo está compuesto por profesionales altamente capacitados y con amplia experiencia en el sector.</li>
            <li><span className="">Satisfacción Garantizada:</span> Nos esforzamos por superar tus expectativas en cada etapa del proyecto.</li>
          </ul>
          <p className="text-lg font-semibold mb-2">Testimonios:</p>
          <p className="italic mb-4">“Gracias a EISCO, ahora tenemos la casa de nuestros sueños. Su atención al detalle y profesionalismo fueron excepcionales.” - Cliente Satisfecho</p>
          <p className="text-lg font-semibold mb-2">Contáctanos:</p>
          <p>¿Listo para comenzar tu próximo proyecto? ¡Contáctanos hoy mismo para una consulta gratuita!</p>
        </div>
      </section>
    </div>
  )
}

export default Intro
