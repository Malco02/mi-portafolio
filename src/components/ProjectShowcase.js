// ProjectTabs.js
import React, { useState } from "react";
// Importamos AnimatePresence para gestionar las animaciones de "salida"
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "CARGO TRACK",
    subtitle: "Trazabilidad y optimización de procesos en tiempo real",
    mainImage: "images/cargo-track-main.jpg",
    sideImages: [
      { src: "images/cargo-track-1.jpg", type: "image" },
      { src: "images/cargo-track-2.jpg", type: "image" },
    ],
    description: [
      "Cargo Track es una solución desarrollada para la trazabilidad y optimización de procesos operativos en tiempo real. Permite monitorear el avance de cada carga, generar alertas automáticas ante demoras o incidencias, y brindar visibilidad completa de los procesos desde la recepción hasta la entrega.",
      "El proyecto integra fuentes de datos de distintas áreas mediante AppSheet, Power BI y Google Sheets, actualizando indicadores en tiempo real gracias a scripts automatizados con JavaScript. Su implementación mejoró la eficiencia operativa y la toma de decisiones dentro de la organización.",
    ],
  },
  {
    title: "DASHBOARD OPERATIVO",
    subtitle: "Visualización y análisis de datos en tiempo real",
    mainImage: "images/dashboard-main.jpg",
    sideImages: [
      { src: "videos/dashboard-demo2.mp4", type: "video" },
      { src: "videos/dashboard-demo.mp4", type: "video" },
    ],
    description: [
      "Lideré el diseño y la implementación de un Dashboard Operativo centralizado, esencial para consolidar la información clave de múltiples áreas y potenciar la toma de decisiones estratégicas. Esta solución de inteligencia de negocios transformó el seguimiento de KPIs mediante la integración fluida con Excel y Power BI, complementada con el desarrollo de scripts automáticos que aseguran la actualización de datos en tiempo real. El resultado fue una optimización dramática en los procesos de seguimiento y control, garantizando una visión precisa y oportuna para la gestión operativa.",
    ],
  },
  {
    title: "DIGITALIZACIÓN DE PROCESOS",
    subtitle: "Automatización y optimización de flujos de trabajo", // Subtítulo ajustado para ser más descriptivo
    mainImage: "images/apps-main.jpg",
    sideImages: [
      { src: "images/apps-1.jpg", type: "image" },
      { src: "videos/apps-2.MP4", type: "video" },
    ],
    description: [
      "Automatización y digitalización de procesos operativos que anteriormente se ejecutaban de forma manual, asegurando información más confiable y oportuna. Diseño y optimización de flujos de trabajo utilizando herramientas de análisis y automatización, integrando datos desde distintas fuentes para generar reportes e indicadores en tiempo real. Estas mejoras redujeron la carga operativa, incrementaron la visibilidad y facilitaron la toma de decisiones basada en datos.",
    ],
  },
  {
    title: "IMPLEMENTACIÓN DMAIC",
    subtitle: "Mejora de procesos de despacho de importación", // Subtítulo ajustado
    mainImage: "images/DMAIC.jpg",
    sideImages: [
      { src: "images/DMAIC-1.jpg", type: "image" },
      { src: "images/DMAIC-2.jpg", type: "image" },
    ],
    description: [
      "Implementación de la metodología DMAIC en el proceso de despacho de carga de importación, analizando causas de incumplimientos vinculados a cargas dañadas y entregas fuera de tiempo. A través del uso de datos operativos se identificaron desviaciones, patrones y oportunidades de mejora que permitieron proponer acciones para aumentar la productividad y el cumplimiento del servicio. El proyecto fortaleció el control del proceso mediante indicadores claves alineados a eficiencia y calidad operativa.",
    ],
  },
];

export default function ProjectTabs() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  // Variantes para la animación del contenido (entrada y salida)
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <section className="min-h-[70vh] text-white px-8 py-16 flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 text-rojoletra">
        MIS PROYECTOS
      </h2>

      {/* --- Botones de selección (Tabs) con "Underline" animado --- */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`relative px-3 py-2 text-lg font-medium transition-colors duration-300 ${
              selected === i
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {p.title}
            
            {/* El "Underline" animado. `layoutId` es la magia aquí. */}
            {selected === i && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-rojoletra rounded-full"
                layoutId="project-underline" // Esta ID compartida permite la animación
              />
            )}
          </button>
        ))}
      </div>

      {/* --- Contenido animado del proyecto --- */}
      {/* AnimatePresence gestiona la animación de entrada y salida */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected} // Importante: la key debe cambiar para que AnimatePresence funcione
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full max-w-6xl"
        >
          {/* --- Imágenes y Videos --- */}
          <div className="flex flex-col md:flex-row w-full gap-5">
            {/* Imagen Principal */}
            <motion.div
              className="md:w-[70%]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="rounded-2xl w-full h-[380px] object-cover shadow-lg border border-gray-700/50"
              />
            </motion.div>
            
            {/* Media Lateral (Imágenes/Videos) */}
            <div className="md:w-[30%] flex flex-col gap-5">
              {project.sideImages.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-[180px]" // Mantenemos la altura fija para alinear
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      autoPlay // Se reproduce solo
                      loop // Se repite
                      muted // Silenciado (necesario para autoPlay en la mayoría de navegadores)
                      playsInline // Necesario para iOS
                      className="rounded-2xl w-full h-full object-cover shadow-lg border border-gray-700/50"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={`${project.title} detalle ${i + 1}`}
                      className="rounded-2xl w-full h-full object-cover shadow-lg border border-gray-700/50"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- Descripción --- */}
          {/* Mostramos el 'subtitle' que antes no se usaba */}
          <h3 className="text-2xl font-semibold text-rojoletra mt-8 mb-3">
            {project.subtitle}
          </h3>
          <div className="text-gray-300 text-base text-justify leading-relaxed space-y-3">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}