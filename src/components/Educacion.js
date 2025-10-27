// Certifications.js
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const certificationCategories = [
  {
    category: "Gestión y Proyectos",
    items: [
      {
        title: "Especialización en Gestión de Proyectos",
        institution: "WE Educación Ejecutiva",
        year: "2024",
        images: [
          "/certificados/gestion-proyectos.jpg",
          "/certificados/gestion-proyectos-2.jpg",
        ],
      },
      {
        title: "Planeamiento con MS Project",
        institution: "WE Educación Ejecutiva",
        year: "2023",
        images: ["/certificados/msproject.jpg"],
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
          "/certificados/powerapps-automate.jpg",
          "/certificados/powerapps-automate-2.jpg",
        ],
      },
      {
        title: "SQL Server for Analytics",
        institution: "WE Educación Ejecutiva",
        year: "2024",
        images: ["/certificados/sql-analytics.jpg"],
      },
      {
        title: "Excel y Power BI",
        institution: "Cámara de Comercio Exterior",
        year: "2023",
        images: ["/certificados/excel-powerbi.jpg"],
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
        images: ["/certificados/gestion-procesos.jpg"],
      },
      {
        title: "Lean Manufacturing",
        institution: "WE Educación Ejecutiva",
        year: "2024",
        images: ["/certificados/lean-manufacturing.jpg"],
      },
      {
        title: "Planificación y Control de la Producción",
        institution: "Instituto Lean Perú",
        year: "2024",
        images: ["/certificados/planificacion-produccion.jpg"],
      },
    ],
  },
  {
    category: "Idiomas",
    items: [
      {
        title: "Inglés – Nivel Intermedio",
        institution: "Británico",
        years: "2023 – Actualidad",
        images: ["/certificados/britanico.jpg"],
      },
    ],
  },
];

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
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold mb-12 text-rojoletra text-center">
          CERTIFICACIONES TÉCNICAS
        </h2>

        {certificationCategories.map((category, i) => (
          <div key={i} className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-center text-gray-200 underline decoration-rojoletra">
              {category.category}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedCert(cert)}
                  className="bg-gray-800/40 rounded-xl p-4 border border-gray-700 hover:border-rojoletra cursor-pointer transition-all duration-300"
                >
                  <img
                    src={cert.images[0]}
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-semibold text-rojoletra">{cert.title}</h4>
                  <p className="text-gray-300 text-sm">{cert.institution}</p>
                  <p className="text-gray-400 text-xs">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* --- MODAL --- */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50">
          <div className="relative bg-gray-900 rounded-2xl p-6 w-[90%] max-w-4xl border border-gray-700">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
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
                  <div key={i} className="flex justify-center">
                    <img
                      src={img}
                      alt={`Certificado ${i + 1}`}
                      className="w-full h-[70vh] object-contain rounded-lg"
                    />
                  </div>
                ))}
              </Slider>

              {selectedCert.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-900/70 hover:bg-rojoletra text-white p-3 rounded-full transition z-10"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-900/70 hover:bg-rojoletra text-white p-3 rounded-full transition z-10"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
