import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
      <p className="mb-4">&copy; 2025 Malco Flores. Todos los derechos reservados.</p>
      <p className="mb-4">¡Gracias por la visita!</p>
      <div className="flex justify-center gap-6 mb-4">
        <a 
          // 🚀 LinkedIn ACTUALIZADO
          href="https://www.linkedin.com/in/malco-flores-giraldo-4a719b254" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-600 transition-colors"
        >
          LinkedIn
        </a>
        <a 
          // 🐙 GitHub ACTUALIZADO
          href="https://github.com/Malco02" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a 
          // 📧 Email ACTUALIZADO
          href="mailto:malco02u@gmail.com" 
          className="text-blue-400  hover:text-green-600 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}