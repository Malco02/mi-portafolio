// 1. Importa AnimatePresence
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCogs, FaRobot, FaChartBar, FaProjectDiagram } from "react-icons/fa";

// (El array 'experiences' sigue igual, es perfecto)
const experiences = [
  {
    title: "Optimización de Procesos",
    icon: <FaCogs className="text-xl" />, // Ajustado a text-xl para los tabs
    description:
      "Desarrollé iniciativas de mejora aplicando Lean, DMAIC y automatización de procesos para aumentar la productividad en operaciones de atención de vuelos y áreas administrativas.",
    highlights: [
      "Reduje tiempos en procesos críticos mediante análisis de causas raíz y rediseño de flujos, contribuyendo al cumplimiento de SLAs operativos.",
      "Diseñé y automatizé KPIs y tableros de control en tiempo real, mejorando la visibilidad de la operación en Perú, México y otras sedes.",
      "Estandaricé procesos en coordinación con equipos multidisciplinarios, elevando la calidad y confiabilidad de la información.",
      "Fomenté una cultura de mejora continua, identificando oportunidades y proponiendo soluciones basadas en datos.",
    ],
    tools: ["Lean", "5S", "Six Sigma", "DMAIC", "TQM"],
  },
  {
    title: "Automatización Digital",
    icon: <FaRobot className="text-xl" />,
    description:
      "Diseñé soluciones que reemplazaron reportes manuales por aplicaciones inteligentes y flujos automatizados, disminuyendo más del 80% del tiempo dedicado a tareas operativas y aumentando la confiabilidad de los datos.",
    highlights: [
      "Desarrollé aplicaciones en AppSheet para control operativo, monitoreo de flota y trazabilidad en tiempo real.",
      "Automatizé reportes y procesos repetitivos utilizando UiPath, Power Automate y Python, reduciendo errores y tiempos de entrega.",
      "Integré fuentes de datos SAP–Excel–Power BI, permitiendo la actualización y análisis centralizado de información para la toma de decisiones.",
    ],
    tools: ["AppSheet", "UiPath", "Power Automate", "Python", "Google Apps Script"],
  },
  {
    title: "Análisis y Dashboards",
    icon: <FaChartBar className="text-xl" />,
    description:
      "Desarrollé dashboards ejecutivos integrados con SAP, Excel y sistemas internos, mejorando la visibilidad operativa y permitiendo una toma de decisiones más ágil a nivel regional.",
    highlights: [
      "Diseñé tableros gerenciales en Power BI consumidos por equipos en Perú, México y provincias, con métricas de operación y calidad del servicio en tiempo real.",
      "Construí modelos DAX y KPIs para el seguimiento del desempeño, asegurando disponibilidad, confiabilidad y trazabilidad de la información.",
      "Gestioné indicadores de satisfacción de clientes, productividad y tiempos de atención, facilitando análisis comparativos y propuestas de mejora.",
    ],
    tools: ["Power BI", "Excel", "DAX", "SQL", "ETL"],
  },
  {
    title: "Gestión de Proyectos",
    icon: <FaProjectDiagram className="text-xl" />,
    description:
      "Coordiné proyectos de transformación digital entre operaciones, TI y dirección, implementando soluciones escalables.",
    highlights: [
      "Promovido de practicante a analista por desempeño y liderazgo en proyectos clave.",
      "Gestión de cronogramas, recursos y riesgos mediante MS Project y metodologías Agile.",
      "Capacitación a usuarios y seguimiento de adopción de herramientas implementadas.",
    ],
    tools: ["Agile", "Scrum", "MS Project", "Gestión del Cambio"],
  },
];


// (Todas tus variantes de animación (cardVariants, itemVariants, etc.) 
// son excelentes y se mantienen sin cambios)
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const listContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function ExperienceSection() {
  const [selected, setSelected] = useState(0);
  const exp = experiences[selected];

  return (
    <section id="experience" className="min-h-screen bg-transparent text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* --- Encabezado --- */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold mb-4 text-primary tracking-tight">
            EXPERIENCIA PROFESIONAL
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-2">
            Analista de Proyectos y Transformación Digital
          </h3>
          <p className="text-gray-400 text-sm">
            SAASA <span className="mx-2 text-gray-500">|</span> Abril 2024 - Actualidad
          </p>
        </div>

        {/* --- Layout de 2 Columnas --- */}
        <div className="flex flex-col md:flex-row md:gap-10">
          
          {/* --- Columna Izquierda: Tabs Verticales --- */}
          <div className="flex md:flex-col md:w-1/3 mb-10 md:mb-0 overflow-x-auto md:overflow-x-visible">
            {experiences.map((e, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                // Estilo del botón de tab
                className={`relative flex-shrink-0 md:flex-shrink w-full flex items-center gap-3 p-4 md:p-5 text-left transition-colors duration-300 ${
                  selected === i
                    ? "text-primary"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                } rounded-lg`}
              >
                {/* Icono */}
                <div className="p-2 bg-gray-800 rounded-lg">
                  {React.cloneElement(e.icon, {
                    className: `text-xl ${selected === i ? 'text-primary' : 'text-gray-300'}`,
                  })}
                </div>
                
                {/* Título */}
                <span className="text-base font-semibold">{e.title}</span>

                {/* --- Indicador Activo Animado --- */}
                {selected === i && (
                  <motion.div
                    // `layoutId` crea la animación de deslizamiento
                    layoutId="active-experience-indicator"
                    // Estilo del indicador: una barra a la izquierda (en md) o abajo (en sm)
                    className="absolute left-0 right-0 bottom-0 h-1 md:h-auto md:left-0 md:top-0 md:bottom-0 md:w-1 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* --- Columna Derecha: Contenido Animado --- */}
          <div className="md:w-2/3 relative">
            {/* Usamos `mode="wait"` (la versión moderna de `exitBeforeEnter`) 
              para esperar que la animación de salida termine antes de que entre la nueva.
            */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected} // La 'key' es esencial para que AnimatePresence funcione
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                // Estilo "Glassmorphism" refinado con "glow"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-primary/20 shadow-xl shadow-primary/10"
              >
                {/* Título del contenido */}
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl font-semibold mb-4 text-white flex items-center gap-3"
                >
                  {/* Clonamos el ícono para estilizarlo aquí también */}
                  {React.cloneElement(exp.icon, { className: 'text-2xl text-primary' })}
                  {exp.title}
                </motion.h3>

                {/* Descripción */}
                <motion.p
                  variants={itemVariants}
                  className="text-gray-300 mb-5 leading-relaxed"
                >
                  {exp.description}
                </motion.p>

                {/* Lista de Highlights (con stagger) */}
                <motion.ul
                  variants={listContainerVariants}
                  className="list-none pl-0 space-y-2 text-gray-400 text-sm mb-6"
                >
                  {exp.highlights.map((h, i) => (
                    // Cada 'li' se anima con un ícono de check
                    <motion.li key={i} variants={listItemVariants} className="flex gap-2 items-start">
                      <span className="text-primary mt-1">✓</span>
                      <span>{h}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Contenedor de Tools (con stagger) */}
                <motion.div
                  variants={listContainerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {exp.tools.map((tool, j) => (
                    // Cada 'tool' se anima
                    <motion.span
                      key={j}
                      variants={listItemVariants}
                      // El estilo de "pill" que ya tenías
                      className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full 
                                 border border-primary/30"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}