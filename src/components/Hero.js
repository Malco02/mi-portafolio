import React from 'react';

function Hero() {
  return (
    <section className="bg-heroBg text-heroText py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h1 className="text-5xl font-bold mb-4">Hola, soy Malko</h1>
          <p className="text-xl mb-6">
            Bienvenido a mi portafolio. Aquí podrás conocer mi trabajo, proyectos y habilidades.
          </p>
          <button className="bg-heroText text-primaryText font-semibold px-6 py-3 rounded hover:opacity-90 transition">
            Descargar CV
          </button>
        </div>

        {/* Espacio para la imagen a la derecha */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Aquí irá tu foto</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
