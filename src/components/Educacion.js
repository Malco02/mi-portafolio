// Certifications.js
import React, { useState, useRef } from "react";
// Importamos AnimatePresence para animar la salida del modal
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// --- DATOS DE CERTIFICACIONES ---
// (Corregido "years" a "year" en Idiomas para consistencia)
const certificationCategories = [
  {
    category: "Gestión y Proyectos",
    items: [
      {
        title: "Especialización en Gestión de Proyectos",
        institution: "WE Educación Ejecutiva",
        year: "2024",
        images: [
          "certificados/gestion-proyectos.jpg",
          "certificados/gestion-proyectos-2.jpg",
        ],
      },
      {
        title: "Planeamiento con MS Project",
        institution: "WE Educación Ejecutiva",
        year: "2023",
        images: ["certificados/msproject.jpg"],
      },
    ],
  },
  {
    category: "Automatización y BI",
    items: [
      {
        title: "Especialización en Power Apps y Automate",
        institution: "WE Educación Ejecutiva",
        year: "2025",
        images: [
          "certificados/powerapps-automate.jpg",
          "certificados/powerapps-automate-2.jpg",
        ],
      },
      {
        title: "SQL Server for Analytics",
        institution: "WE Educación Ejecutiva",
        year: "2024",
        images: ["certificados/sql-analytics.jpg"],
      },
      {
        title: "Excel y Power BI",
        institution: "Cámara de Comercio Exterior",
        year: "2023",
        images: ["certificados/excel-powerbi.jpg"],
      },
    ],
  },
  {
    category: "Procesos y Lean",
    items: [
      {
        title: "Gestión por Procesos",
        institution: "CTIC UNI",
        year: "2024",
        images: ["certificados/gestion-procesos.jpg"],
      },
      {
        title: "Lean Manufacturing",
        institution: "WE Educación Ejecutiva",
        year: "2024",
        images: ["certificados/lean-manufacturing.jpg"],
      },
      {
        title: "Planificación y Control de la Producción",
        institution: "Instituto Lean Perú",
        year: "2024",
        images: ["certificados/planificacion-produccion.jpg"],
      },
    ],
  },
  {
    category: "Idiomas",
    items: [
      {
        title: "Inglés – Nivel Intermedio",
        institution: "Británico",
        // Corregido de "years" a "year"
        year: "2023 – Actualidad",
        images: ["certificados/britanico.jpg"],
      },
    ],
  },
];

// --- VARIANTES DE ANIMACIÓN ---
// Variante para el contenedor del grid (para el efecto escalonado)
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Cada "hijo" (tarjeta) se animará con 0.1s de retraso
    },
  },
};

// Variante para cada tarjeta individual
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
};

// Variante para el fondo del modal (backdrop)
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Variante para el panel del modal (el contenido)
const modalVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: { scale: 0.9, opacity: 0 },
};


export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrev = () => sliderRef.current.slickPrev();
  const handleNext = () => sliderRef.current.slickNext();

  return (
    <section className="min-h-screen bg-transparent text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold mb-12 text-rojoletra text-center">
          CERTIFICACIONES TÉCNICAS
        </h2>

        {certificationCategories.map((category, i) => (
          <div key={i} className="mb-16">
            {/* Encabezado de categoría mejorado: sin underline, con borde inferior */}
            <h3 className="text-3xl font-semibold mb-8 text-center text-gray-200">
              <span className="border-b-2 border-rojoletra pb-1">
                {category.category}
              </span>
            </h3>

            {/* Grid con variantes de animación */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Inicia la animación cuando el 20% es visible
            >
              {category.items.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants} // Aplica la variante de tarjeta
                  layout // Anima cambios de layout (al hacer hover, por ejemplo)
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedCert(cert)}
                  // Estilo de tarjeta mejorado:
                  // - flex flex-col para controlar la estructura interna
                  // - hover:shadow-xl y hover:shadow-rojoletra/20 para el efecto "glow"
                  // - overflow-hidden para que la imagen no se salga al redondear
                  className="bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700 hover:border-rojoletra/50 hover:shadow-xl hover:shadow-rojoletra/20 cursor-pointer transition-all duration-300 flex flex-col"
                >
                  <img
                    src={cert.images[0]}
                    alt={cert.title}
                    className="w-full h-48 object-cover" // Quitamos mb-4 y rounded-lg de aquí
                  />
                  
                  {/* Contenedor de texto mejorado */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h4 className="text-lg font-semibold text-rojoletra">{cert.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{cert.institution}</p>
                    {/* mt-auto empuja este elemento al fondo del contenedor flex */}
                    <p className="text-gray-400 text-xs mt-auto pt-2">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* --- MODAL CON ANIMACIÓN --- */}
      {/* AnimatePresence permite animar la "salida" de un componente */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            variants={backdropVariants} // Anima el fondo
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4" // Añadido p-4 para márgenes en móviles
          >
            {/* Panel del modal con su propia animación */}
            <motion.div
              variants={modalVariants} // Anima el panel
              className="relative bg-gray-900 rounded-2xl p-6 w-full max-w-4xl border border-gray-700"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-rojoletra transition z-20" // z-20 para estar sobre el slider
              >
                <FaTimes size={24} />
              </button>

              <h3 className="text-2xl font-bold text-rojoletra mb-2">{selectedCert.title}</h3>
              <p className="text-gray-400 mb-4">
                {selectedCert.institution} • {selectedCert.year}
              </p>

              <div className="relative">
                <Slider ref={sliderRef} {...sliderSettings}>
                  {selectedCert.images.map((img, i) => (
                    <div key={i}>
                      <img
                        src={img}
                        alt={`Certificado ${i + 1}`}
                        className="w-full h-[60vh] sm:h-[70vh] object-contain rounded-lg" // Altura ajustada para móviles
                      />
                    </div>
                  ))}
                </Slider>

                {selectedCert.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute top-1/2 left-0 sm:left-3 -translate-y-1/2 bg-gray-900/70 hover:bg-rojoletra text-white p-3 rounded-full transition z-10"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute top-1/2 right-0 sm:right-3 -translate-y-1/2 bg-gray-900/70 hover:bg-rojoletra text-white p-3 rounded-full transition z-10"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}