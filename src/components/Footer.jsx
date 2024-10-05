import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">EISCO</h3>
            <p>Transformando sueños en realidad desde hace más de 30 años.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-600">Inicio</Link></li>
              <li><Link to="/projects" className="hover:text-gray-600">Proyectos</Link></li>
              <li><Link to="/about" className="hover:text-gray-600">Sobre Nosotros</Link></li>
              <li><Link to="/contact" className="hover:text-gray-600">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p>Email: eisco@eisco.com</p>
            <p>Teléfono: (+593) 0987283452</p>
            <p>Dirección: El Colibrí II, Sangolquí 171103</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>© 2024 Todos los derechos reservados. <a href="https://eisco.com.ec" className="hover:text-gray-600">EISCO</a></p>
        </div>
        <div className='py-4 flex justify-center'>
          <p className='flex flex-row justify-center'>Made by: 
            <a className='p-2' href='https://x.com/labsarcane'>
          <FaXTwitter className='text-md'/>
          </a> AracneL4bs</p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
