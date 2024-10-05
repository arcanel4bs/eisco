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
      <div className="mb-4">
        <label htmlFor="name" className="block text-black mb-2">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 bg-gray-100 text-black border border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-black mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 bg-gray-100 text-black border border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-black mb-2">Mensaje</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-3 py-2 bg-gray-100 text-black border border-gray-300 focus:outline-none focus:border-gray-500"
          rows="4"
        ></textarea>
      </div>
      <button type="submit" className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition duration-300">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
