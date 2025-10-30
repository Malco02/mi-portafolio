import React from "react";
import { motion } from "framer-motion";

const academicItems = [
  {
    title: "Bachiller en Ingeniería Industrial",
    institution: "Universidad Nacional del Callao",
    years: "2020 – 2024",
    image: "certificados/unac-bachiller.jpg",
  },
];

const timelineData = [
  { year: "2023", title: <>Practicante en <br />Ing. Industrial</> },
  { year: "2024", title: <>Analista de Datos <br />y Mejora de Procesos</> },
  { year: "2025", title: <>Bachiller en <br />Ing. Industrial</> },
  { year: "2026", title: <>Proyección: Título de<br /> Ingeniero Industrial</> },
];

// Puntos de control para la curva (para el viewBox)
const p0 = { x: 40, y: 350 };  // Punto inicial
const p1 = { x: 320, y: 450 }; // Punto de control
const p2 = { x: 600, y: 100 }; // Punto final

// Función para generar el path (sin cambios)
const generatePath = () => {
  return `M${p0.x},${p0.y} Q${p1.x},${p1.y} ${p2.x},${p2.y}`;
};

// Función para encontrar el punto EXACTO en la curva (sin cambios)
const getPointOnCurve = (t) => {
  const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x;
  const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y;
  return { x, y };
};


export default function AcademicTimeline() {
  const path = generatePath();

  return (
    <section 
      id="academic"
      className="min-h-screen bg-transparent text-white px-6 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-rojoletra text-center">
          FORMACIÓN ACADÉMICA
        </h2>

        <div className="max-w-6xl w-full grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-8 items-center">
          
          {/* Columna izquierda: Bachiller (Glassmorphism Refinado) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            {academicItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }} // Un hover más sutil en la tarjeta
                // --- Estilo de "Glassmorphism" refinado con "glow" ---
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 w-full max-w-md 
                           border border-rojoletra/20 hover:border-rojoletra/60 
                           transition-all duration-300 shadow-xl shadow-rojoletra/10 
                           hover:shadow-rojoletra/20 text-center"
              >
                
                <div className="overflow-hidden rounded-xl">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Usamos rojoletra para el título y el botón para consistencia */}
                <h3 className="text-xl font-semibold text-rojoletra mt-4">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.institution}</p>
                <p className="text-gray-400 text-xs mb-4">{item.years}</p>
                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  // --- Botón ahora usa rojoletra ---
                  className="bg-rojoletra text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-rojoletra/80 transition-colors"
                >
                  Ver certificado
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Columna derecha: Línea de tiempo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* TIMELINE DESKTOP (Visible solo en 'md' y superior) */}
            <div className="relative w-full h-[500px] hidden md:block">
              {/* SVG (sin cambios, ya es excelente) */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 600 500"
                preserveAspectRatio="xMidYMid meet"
                className="absolute top-0 left-0"
              >
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#2b50e1ff" />
                    <stop offset="100%" stopColor="#4cca95ff" />
                  </linearGradient>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#2b50e1ff" />
                  </marker>
                </defs>
                <motion.path
                  d={path}
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="transparent"
                  markerEnd="url(#arrow)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </svg>

              {/* Puntos y etiquetas */}
              {timelineData.map((event, i) => {
                const total = timelineData.length - 1;
                const t = i / total;
                const { x, y } = getPointOnCurve(t); 

                return (
                  <motion.div
                    key={i}
                    className="absolute text-center cursor-pointer" // Añadido cursor-pointer
                    style={{ left: x, top: y, transform: 'translate(-50%, -100%)' }} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }} // Interacción de hover
                    viewport={{ once: true }}
                    // --- Transición de "resorte" (spring) ---
                    transition={{ 
                      type: "spring", stiffness: 300, damping: 20, 
                      delay: 0.8 + i * 0.3 
                    }} 
                  >
                    {/* Etiqueta (Glassmorphism Refinado) */}
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md inline-block shadow-lg border border-primary/20">
                      <p className="text-xs text-rojoletra font-bold">{event.year}</p>
                      <p className="text-[11px] text-gray-200">{event.title}</p>
                    </div>
                    {/* Punto (Animación de Pulso) */}
                    <motion.div 
                      className="w-3 h-3 bg-primary rounded-full mx-auto mt-2 shadow-[0_0_15px_#02dba6]"
                      // --- Animación de pulso ---
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* TIMELINE MÓVIL (Visible solo en pantallas pequeñas) */}
            <div className="block md:hidden w-full max-w-md mx-auto">
              <div className="relative flex flex-col gap-8 pl-6">
                {/* Línea vertical */}
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#2b50e1ff] to-[#4cca95ff] rounded-full" />
                
                {timelineData.map((event, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    // --- Transición de "resorte" (spring) ---
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.2 }}
                  >
                    {/* Punto en la línea (Animación de Pulso) */}
                    <motion.div 
                      className="absolute -left-[26px] top-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#02dba6]"
                      // --- Animación de pulso ---
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                    />
                    
                    {/* Tarjeta de evento (Glassmorphism Refinado) */}
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-primary/20">
                      <p className="text-sm text-rojoletra font-bold">{event.year}</p>
                      <p className="text-sm text-gray-200">{event.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}