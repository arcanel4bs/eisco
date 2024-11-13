import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const whatsappNumber = "+593987283452";
  const email = "administracion@eisco.com.ec";
  const location = "El Colibrí II, Sangolquí 171103, Quito, Ecuador";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#4A0404] mb-8 flex justify-center font-montserrat">Contáctanos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center">
            <MapPin className="text-[#4A0404] mr-4" size={24} />
            <div>
              <h2 className="text-xl text-[#4A0404] font-montserrat">Ubicación</h2>
              <p className="text-lg text-gray-600 font-roboto">{location}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Mail className="text-[#4A0404] mr-4" size={24} />
            <div>
              <h2 className="text-xl text-[#4A0404] font-montserrat">Email</h2>
              <p className="text-lg text-gray-600 font-roboto">{email}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <MessageCircle className="text-[#4A0404] mr-4" size={24} />
            <div>
              <h2 className="text-xl text-[#4A0404] py-4 font-montserrat">WhatsApp</h2>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-50 text-gray-800 p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors font-roboto"
              >
                Chatea con nosotros
              </a>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Contact;