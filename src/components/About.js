import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCogs, FaRobot, FaChartBar, FaProjectDiagram } from "react-icons/fa";

const experiences = [
  {
    title: "Optimización de Procesos",
    icon: <FaCogs className="text-3xl text-rojoletra" />,
    description:
      "Implementé iniciativas Lean Six Sigma y metodologías DMAIC para reducir tiempos operativos y mejorar la calidad del servicio.",
    highlights: [
      "Reducción de tiempos en procesos críticos de atención de vuelos.",
      "Estandarización de flujos operativos y creación de KPIs.",
      "Fomento de la cultura de mejora continua en áreas operativas y administrativas.",
    ],
    tools: ["Lean", "5S", "Six Sigma", "DMAIC", "TQM"],
  },
  {
    title: "Automatización Digital",
    icon: <FaRobot className="text-3xl text-rojoletra" />,
    description:
      "Diseñé soluciones que reemplazaron reportes manuales por flujos automatizados y aplicaciones inteligentes, reduciendo más del 80% del tiempo en tareas operativas.",
    highlights: [
      "Desarrollo de apps en AppSheet para control operativo y trazabilidad.",
      "Automatización de reportes con UiPath, Power Automate y Python.",
      "Integración SAP–Excel–Power BI para consolidación de datos en tiempo real.",
    ],
    tools: ["AppSheet", "UiPath", "Power Automate", "Python", "Google Apps Script"],
  },
  {
    title: "Análisis y Dashboards",
    icon: <FaChartBar className="text-3xl text-rojoletra" />,
    description:
      "Desarrollé dashboards ejecutivos integrados con SAP, Excel y sistemas internos para la toma de decisiones estratégicas.",
    highlights: [
      "Diseño de dashboards gerenciales en Power BI visibles en Perú, México y provincias.",
      "Creación de modelos DAX y KPIs para seguimiento de desempeño.",
      "Gestión de indicadores de satisfacción, productividad y tiempos de atención.",
    ],
    tools: ["Power BI", "Excel", "DAX", "SQL", "ETL"],
  },
  {
    title: "Gestión de Proyectos",
    icon: <FaProjectDiagram className="text-3xl text-rojoletra" />,
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

export default function ExperienceSection() {
  const [selected, setSelected] = useState(0);
  const exp = experiences[selected];

  return (
    <section id="experience" className="min-h-screen bg-transparent text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* --- Título principal --- */}
        <h2 className="text-5xl font-bold mb-4 text-rojoletra tracking-tight">
          EXPERIENCIA PROFESIONAL
        </h2>

        {/* --- Subtítulo con puesto y empresa --- */}
        <h3 className="text-2xl font-semibold text-white mb-2">
          Analista de Proyectos y Transformación Digital
        </h3>
        <p className="text-gray-400 text-sm mb-12">
          SAASA <span className="mx-2 text-gray-500">|</span> Abril 2024 - Actualidad
        </p>

        {/* --- Tabs (botones de categoría) --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {experiences.map((e, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                selected === i
                  ? "bg-rojoletra text-white border-rojoletra shadow-lg shadow-rojoletra/20"
                  : "bg-gray-800 border-gray-700 hover:border-rojoletra/60 hover:text-rojoletra"
              }`}
            >
              {e.icon}
              <span className="text-sm font-medium">{e.title}</span>
            </button>
          ))}
        </div>

        {/* --- Contenido animado según pestaña --- */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 text-left border border-gray-700 shadow-lg hover:shadow-rojoletra/10"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-3">
            {exp.icon}
            {exp.title}
          </h3>

          <p className="text-gray-300 mb-5 leading-relaxed">{exp.description}</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm mb-6">
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tools.map((tool, j) => (
              <span
                key={j}
                className="text-xs font-medium bg-gray-700/80 text-rojoletra px-3 py-1 rounded-full border border-gray-600"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
