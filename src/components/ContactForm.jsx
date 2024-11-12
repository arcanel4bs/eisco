import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-800 mb-2 font-montserrat">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 bg-gray-50 text-gray-800 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-200 font-roboto"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-800 mb-2 font-montserrat">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 bg-gray-50 text-gray-800 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-200 font-roboto"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-800 mb-2 font-montserrat">Mensaje</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-4 py-2 bg-gray-50 text-gray-800 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-200 font-roboto"
          rows="4"
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-gray-50 text-gray-800 px-6 py-3 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors font-montserrat"
      >
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
