import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CARGO TRACK",
    subtitle: "Trazabilidad y optimización de procesos en tiempo real",
    mainImage: "images/cargo-track-main.jpg",
    sideImages: ["images/cargo-track-1.jpg", "images/cargo-track-2.jpg"],
    description: [
      "Cargo Track es una solución desarrollada para la trazabilidad y optimización de procesos operativos en tiempo real. Permite monitorear el avance de cada carga, generar alertas automáticas ante demoras o incidencias, y brindar visibilidad completa de los procesos desde la recepción hasta la entrega.",
      "El proyecto integra fuentes de datos de distintas áreas mediante AppSheet, Power BI y Google Sheets, actualizando indicadores en tiempo real gracias a scripts automatizados con JavaScript. Su implementación mejoró la eficiencia operativa y la toma de decisiones dentro de la organización.",
    ],
  },
  {
    title: "DASHBOARD OPERATIVO",
    subtitle: "Visualización y análisis de datos en tiempo real",
    mainImage: "images/dashboard-main.jpg",
    sideImages: [{ src: "images/dashboard-1.jpg", type: "image" },{ src: "videos/dashboard-demo.mp4", type: "video" }],
    description: [
      "Dashboard operativo diseñado para centralizar información de distintas áreas, facilitando la toma de decisiones y la monitorización de KPIs clave.",
      "Se implementó integración con Excel, Power BI y scripts automáticos que actualizan la información en tiempo real, optimizando los procesos de seguimiento y control.",
    ],
  },
  // Agrega más proyectos aquí
];

export default function ProjectTabs() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <section className="min-h-[70vh] bg-gray-900 text-white px-8 py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-rojoletra">
        MIS PROYECTOS
      </h2>

      {/* --- Botones de selección de proyecto --- */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              selected === i
                ? "bg-rojoletra text-white border-rojoletra shadow-lg shadow-rojoletra/20"
                : "bg-gray-800 border-gray-700 hover:border-rojoletra/60 hover:text-rojoletra"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* --- Contenido animado del proyecto --- */}
      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl"
      >
        {/* --- Imágenes --- */}
        <div className="flex flex-col md:flex-row w-full gap-5">
          <div className="md:w-[70%]">
            <img
              src={project.mainImage}
              alt={project.title}
              className="rounded-2xl w-full h-[380px] object-cover shadow-lg"
            />
          </div>
          <div className="md:w-[30%] flex flex-col gap-5">
            {project.sideImages.map((item, i) => (
              item.type === "video" ? (
                <video
                  key={i}
                  src={item.src}
                  controls
                  className="rounded-2xl w-full h-[180px] object-cover shadow-lg"
                />
              ) : (
                <img
                  key={i}
                  src={item.src}
                  alt={`${project.title} detalle ${i + 1}`}
                  className="rounded-2xl w-full h-[180px] object-cover shadow-lg"
                />
              )
            ))}
          </div>

        </div>

        {/* --- Descripción --- */}
        <div className="mt-8 text-gray-300 text-base text-justify leading-relaxed">
          {project.description.map((p, i) => (
            <p key={i} className={i > 0 ? "mt-3" : ""}>
              {p}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
