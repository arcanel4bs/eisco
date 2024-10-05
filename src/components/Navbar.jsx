import { Link } from 'react-router-dom';

function Navbar({ show }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white text-black p-4 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          {/* This empty div helps with centering */}
        </div>
        
        <Link to="/" className="text-2xl font-semibold flex-1 text-center">EISCO</Link>
        
        <ul className="flex space-x-6 flex-1 justify-end">
          <li><Link to="/" className="hover:text-white hover:bg-black p-2">Inicio</Link></li>
          <li><Link to="/services" className="hover:text-white hover:bg-black p-2">Servicios</Link></li>
          <li><Link to="/projects" className="hover:text-white hover:bg-black p-2">Proyectos</Link></li>
          <li><Link to="/about" className="hover:text-white hover:bg-black p-2">Nosotros</Link></li>
          <li><Link to="/contact" className="hover:text-white hover:bg-black p-2">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
