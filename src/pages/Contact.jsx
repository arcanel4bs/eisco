import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumber = "+593 2 123 4567";
  const whatsappNumber = "+593912345678";
  const email = "info@ecuadorconstruction.com";
  const location = "Av. 6 de Diciembre N34-540 y Juan Pablo Sanz, Quito, Ecuador";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <img 
          src="/api/placeholder/1200/400" 
          alt="Our Office" 
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center">
            <Phone className="text-blue-500 mr-4" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
              <p className="text-lg text-gray-600">{phoneNumber}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <MapPin className="text-blue-500 mr-4" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Location</h2>
              <p className="text-lg text-gray-600">{location}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Mail className="text-blue-500 mr-4" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-lg text-gray-600">{email}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <MessageCircle className="text-blue-500 mr-4" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">WhatsApp</h2>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg text-blue-500 hover:text-blue-600 transition duration-300"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>
        
        <form className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send us a message</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;