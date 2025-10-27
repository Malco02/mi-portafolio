import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
      <p className="mb-4">&copy; 2025 Malco Flores. Todos los derechos reservados.</p>
      <p className="mb-4">¡Gracias por la visita!</p>
      <div className="flex justify-center gap-6 mb-4">
        <a 
          href="https://www.linkedin.com/in/tu-perfil" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-600 transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/tu-usuario" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a 
          href="mailto:malco02u@gmail.com" 
          className="text-blue-400  hover:text-green-600 transition-colors"
        >
          Email
        </a>
      </div>
      <p className="text-sm text-gray-500">Creado con ❤️ y React</p>
    </footer>
  );
}
