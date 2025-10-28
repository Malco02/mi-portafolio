import React from 'react';

function Hero() {
  return (
    <section className="bg-heroBg text-heroText py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h1 className="text-5xl font-bold mb-4">Hola, soy Malko</h1>
          <p className="text-xl mb-6">
gaaa          </p>

          {/* Botón para descargar CV */}
          <a
            href="/docs/Malko-CV.pdf"
            download="Malko-CV.pdf"
            className="bg-heroText text-primaryText font-semibold px-6 py-3 rounded hover:opacity-90 transition inline-block"
          >
            Descargar CV
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/malko.jpg"
            alt="Foto de Malko"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
