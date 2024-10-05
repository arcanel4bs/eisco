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
        <h1 className="text-4xl  text-white mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          
          <div className="flex items-center">
            <MapPin className="text-white mr-4" size={24} />
            <div>
              <h2 className="text-xl  text-white">Ubicacion</h2>
              <p className="text-lg text-gray-300">{location}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Mail className="text-white mr-4" size={24} />
            <div>
              <h2 className="text-xl  text-white">Email</h2>
              <p className="text-lg text-gray-300">{email}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <MessageCircle className="text-white mr-4" size={24} />
            <div>
              <h2 className="text-xl  text-white">WhatsApp</h2>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-white transition duration-300"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-2xl text-black mb-4 flex justify-center">Mandanos un mensaje</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;