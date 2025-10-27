import React from "react";

export default function ProjectShowcase2() {
  return (
    <section
      id="cargo-track"
      className="min-h-[70vh] bg-gray-900 text-white px-8 py-16 flex flex-col items-center"
    >
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-rojoletra">
        CARGO TRACK: TRAZABILIDAD Y OPTIMIZACIÓN DE PROCESOS EN TIEMPO REAL
      </h2>

      {/* Contenedor principal (imágenes + texto) */}
      <div className="w-full max-w-6xl">
        {/* Contenedor de imágenes */}
        <div className="flex flex-col md:flex-row w-full gap-5">
          {/* Imagen grande */}
          <div className="md:w-[70%]">
            <img
              src="/images/cargo-track-main-2.jpg"
              alt="Cargo Track Principal"
              className="rounded-2xl w-full h-[380px] object-cover shadow-lg"
            />
          </div>

          {/* Dos imágenes verticales */}
          <div className="md:w-[30%] flex flex-col gap-5">
            <img
              src="/images/cargo-track-3.jpg"
              alt="Cargo Track detalle 1"
              className="rounded-2xl w-full h-[180px] object-cover shadow-lg"
            />
            <img
              src="/images/cargo-track-4.jpg"
              alt="Cargo Track detalle 2"
              className="rounded-2xl w-full h-[180px] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Descripción */}
        <div className="mt-8 text-gray-300 text-base text-justify leading-relaxed">
          <p>
            Cargo Track es una solución desarrollada para la trazabilidad y optimización
            de procesos operativos en tiempo real. Permite monitorear el avance de cada
            carga, generar alertas automáticas ante demoras o incidencias, y brindar
            visibilidad completa de los procesos desde la recepción hasta la entrega.
          </p>
          <p className="mt-3">
            El proyecto integra fuentes de datos de distintas áreas mediante AppSheet,
            Power BI y Google Sheets, actualizando indicadores en tiempo real gracias
            a scripts automatizados con JavaScript. Su implementación mejoró la
            eficiencia operativa y la toma de decisiones dentro de la organización.
          </p>
        </div>
      </div>
    </section>
  );
}
