import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-gray-700 border-b border-gray-100 shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center pl-32 items-center space-x-4">
          <Link to="/">
            <img 
              src="/eisco-logo.png" 
              alt="EISCO Logo" 
              className="h-16 w-auto"
            />
          </Link>
          <img 
            src="/eisco-description.png"
            alt="EISCO Description"
            className="h-10 w-auto"
          />
        </div>
        
        <ul className="flex space-x-6 justify-center flex-1 text-lg font-montserrat">
          <li><Link to="/" className="hover:bg-gray-50 rounded-lg p-2 transition-colors">Inicio</Link></li>
          <li><Link to="/services" className="hover:bg-gray-50 rounded-lg p-2 transition-colors">Servicios</Link></li>
          <li><Link to="/projects" className="hover:bg-gray-50 rounded-lg p-2 transition-colors">Proyectos</Link></li>
          <li><Link to="/about" className="hover:bg-gray-50 rounded-lg p-2 transition-colors">Nosotros</Link></li>
          <li><Link to="/contact" className="hover:bg-gray-50 rounded-lg p-2 transition-colors">Contacto</Link></li>
        </ul>

        <div className="flex-1">
          {/* Empty div for spacing */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
