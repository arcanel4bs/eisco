import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const whatsappNumber = "+593987283452";
  const email = "eisco@eisco.com";
  const location = "El Colibrí II, Sangolquí 171103, Quito, Ecuador";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-gray-800 mb-8 flex justify-center font-montserrat">Contáctanos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center">
            <MapPin className="text-[#4A0404] mr-4" size={24} />
            <div>
              <h2 className="text-xl text-gray-800 font-montserrat">Ubicación</h2>
              <p className="text-lg text-gray-600 font-roboto">{location}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Mail className="text-[#4A0404] mr-4" size={24} />
            <div>
              <h2 className="text-xl text-gray-800 font-montserrat">Email</h2>
              <p className="text-lg text-gray-600 font-roboto">{email}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <MessageCircle className="text-[#4A0404] mr-4" size={24} />
            <div>
              <h2 className="text-xl text-gray-800 font-montserrat">WhatsApp</h2>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg text-gray-600 hover:text-gray-800 transition duration-300"
              >
                Chatea con nosotros
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 shadow-md rounded-lg border border-gray-100">
          <h2 className="text-2xl text-gray-800 mb-4 flex justify-center font-montserrat">
            Mandanos un mensaje
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;