// 1. Importa 'motion' y quita los 'hooks' (useState, useEffect, useRef)
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaGraduationCap, FaEnvelope, FaLinkedin } from "react-icons/fa";

// --- VARIANTES DE ANIMACIÓN ---

// 2. Variante para el contenedor principal (la sección)
// Se encargará de orquestar las animaciones de las dos columnas
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren", // Asegura que el padre sea visible antes que los hijos
      staggerChildren: 0.2, // Las dos columnas (izquierda y derecha) aparecerán con 0.2s de diferencia
    },
  },
};

// 3. Variante para la columna izquierda (foto y botón)
const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// 4. Variante para la columna derecha (info)
// Esta variante también escalonará a SUS PROPIOS hijos
const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1, // Cada item de la derecha (h1, p, ul) aparecerá con 0.1s de diferencia
    },
  },
};

// 5. Variante para los items de la derecha (título, párrafo)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

// 6. Variante para la lista de contactos (escalonará los 'li')
const listVariants = {
  hidden: { opacity: 1 }, // El 'ul' en sí no se anima, solo sus hijos
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Cada 'li' aparecerá con 0.1s de diferencia
    },
  },
};

// 7. Variante para cada 'li' de la lista de contactos
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};


export default function Resume() {
  // 8. ¡Ya no se necesitan los 'hooks' (useState, useEffect, useRef)!
  
  return (
    <motion.section // 9. Convertido a 'motion.section'
      id="resume"
      // 10. Aplicamos las variantes y la lógica de 'whileInView'
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Se activa con el 30% visible
      // 11. Quita la 'ref' y mantiene 'overflow-hidden'
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-transparent text-white px-6 py-20 gap-10 overflow-hidden"
    >
      {/* Lado izquierdo: Foto + Botón */}
      {/* 12. Convertido a 'motion.div' y usa 'leftVariants' */}
      <motion.div
        variants={leftVariants}
        className="md:w-1/3 flex flex-col items-center gap-8"
        // 13. Se quitan las clases de transición y 'isVisible'
      >
        {/* 14. Marco "Glassmorphism" refinado con "glow" */}
        <motion.div 
          className="bg-white/5 backdrop-blur-lg p-2 rounded-xl shadow-xl shadow-primary/10 border border-primary/20"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="images/malko.jpg"
            alt="Mi Foto"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </motion.div>

        {/* 15. Botón 'motion' con interacciones de hover/tap */}
        <motion.a
          href="docs/MALCO_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/80 transition-colors"
          // Animaciones de muelle (spring)
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          Descargar CV
        </motion.a>
      </motion.div>

      {/* Lado derecho: Información */}
      {/* 16. Convertido a 'motion.div' y usa 'rightVariants' */}
      <motion.div
        variants={rightVariants}
        className="md:w-2/3 flex flex-col gap-6"
        // 17. Se quitan las clases de transición y 'isVisible'
      >
        <div>
          {/* 18. Todos los hijos ahora son 'motion' y usan 'itemVariants' */}
          <motion.h1 
            variants={itemVariants} 
            className="text-primary text-5xl md:text-6xl font-bold mb-4"
          >
            Hola, me llamo Malco
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-lg leading-relaxed text-justify text-white"
          >
            Soy Analista de Datos y Automatización, apasionado por transformar información en decisiones estratégicas.
            Con experiencia en{" "}
            <span className="text-primary font-semibold">Python, SQL, Power BI, AppSheet y Power Automate</span>, diseño soluciones que optimizan
            procesos, generan insights claros y facilitan la gestión eficiente de la información. Me enfoco en{" "}
            <span className="text-primary font-semibold">analizar, visualizar y automatizar datos</span> para que las organizaciones tomen decisiones más inteligentes y productivas.
          </motion.p>
        </div>

        {/* 19. La lista 'ul' usa 'listVariants' para escalar sus hijos 'li' */}
        <motion.ul
          variants={listVariants}
          className="flex flex-col gap-4 text-lg"
        >
          {[
            { icon: FaPhone, text: "+51 926 961 909", href: "tel:+51926961909" },
            { icon: FaMapMarkerAlt, text: "Lima, Perú", href: "https://www.google.com/maps/place/Lima", target: "_blank" },
            { icon: FaGraduationCap, text: "Bachiller en Ingeniería Industrial" },
            { icon: FaEnvelope, text: "malco02u@gmail.com", href: "mailto:malco02u@gmail.com" },
            { icon: FaLinkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/tu-perfil", target: "_blank" },
          ].map((item) => (
            // 20. Cada 'li' usa 'listItemVariants' y tiene hover
            <motion.li
              key={item.text}
              variants={listItemVariants}
              whileHover={{ x: 5 }} // Pequeño "empujón" al hacer hover
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-3"
            >
              <item.icon className="text-primary flex-shrink-0" />
              {item.href ? (
                <a 
                  href={item.href} 
                  target={item.target} 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}