import React from "react";
import { motion } from "framer-motion";

const academicItems = [
  {
    title: "Bachiller en Ingeniería Industrial",
    institution: "Universidad Nacional del Callao",
    years: "2020 – 2024",
    image: "/certificados/unac-bachiller.jpg",
  },
];

const timelineData = [
  { year: "2023", title: <>Practicante en <br />Ing. Industrial</> },
  { year: "2024", title: <>Analista de Datos <br />y Mejora de Procesos</>  },
  { year: "2025", title: <>Bachiller en <br />Ing. Industrial</>  },
  { year: "2026", title: <>Proyección: Título de<br /> Ingeniero Industrial</>  },
];

// Curva tipo exponencial
const generatePath = () => {
  const startX = 40;
  const startY = 350;
  const endX = 600;
  const endY = 100;
  const controlY = 450; // controla curvatura

  return `M${startX},${startY} 
          Q${(startX + endX) / 2},${controlY} 
          ${endX},${endY}`;
};

export default function AcademicTimeline() {
  const path = generatePath();

  return (
    <section className="min-h-screen bg-transparent text-white px-6 py-20 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-rojoletra text-center">
          FORMACIÓN ACADÉMICA
        </h2>

        <div className="max-w-6xl w-full grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
          {/* Columna izquierda: Bachiller */}
          <div className="flex justify-center">
            {academicItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900/80 rounded-2xl p-5 w-full max-w-md border border-gray-700 hover:border-rojoletra transition-all duration-300 shadow-xl text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                />
                <h3 className="text-xl font-semibold text-rojoletra mt-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.institution}</p>
                <p className="text-gray-400 text-xs mb-3">{item.years}</p>
                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rojoletra text-white px-3 py-1.5 rounded-lg font-medium text-sm hover:bg-rojoletra/80 transition"
                >
                  Ver certificado
                </a>
              </motion.div>
            ))}
          </div>

          {/* Columna derecha: Línea de tiempo */}
          <div className="relative w-full h-[500px]">
            <svg width="100%" height="100%" className="absolute top-0 left-0">
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor="#FF3B30" />
                  <stop offset="100%" stopColor="#FF9F0A" />
                </linearGradient>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <polygon points="0 0, 10 5, 0 10" fill="#FF3B30" />
                </marker>
              </defs>

              {/* Curva principal */}
              <motion.path
                d={path}
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="transparent"
                markerEnd="url(#arrow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              />
            </svg>

            {/* Puntos y etiquetas */}
            {timelineData.map((event, i) => {
              const total = timelineData.length - 1;
              const t = i / total;
              // Curva exponencial ascendente
              const x = 40 + t * 560;
              const y = 350 - Math.pow(t, 1.8) * 250;

              return (
                <motion.div
                  key={i}
                  className="absolute text-center"
                  style={{ left: x - 30, top: y - 45 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  {/* Punto */}
                  <div className="w-3 h-3 bg-rojoletra rounded-full mx-auto mb-1 shadow-[0_0_15px_#FF3B30]" />
                  
                  {/* Etiqueta con fondo oscuro */}
                  <div className="bg-black/70 px-2 py-1 rounded-md inline-block shadow-md border border-gray-700">
                    <p className="text-xs text-rojoletra font-bold">{event.year}</p>
                    <p className="text-[11px] text-gray-200">{event.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
