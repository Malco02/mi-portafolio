// 1. Importa 'motion' y quita los hooks (useState, useEffect, useRef)
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Base de datos, ETL y programación',
    skills: [
      { name: 'Python', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 2 },
      { name: 'SQL', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 1 },
      { name: 'Pandas', imgUrl: 'https://pandas.pydata.org/static/img/pandas_mark.svg', level: 1 },
    ],
  },
  {
    category: 'Herramientas de análisis y visualización',
    skills: [
      { name: 'Excel/Google Sheet', imgUrl: 'https://veryutils.com/image/cache/mpseller/customer-13/excel-500x500.png', level: 3 },
      { name: 'Tableau', imgUrl: 'https://bootflare.com/wp-content/uploads/2023/04/Tableau-Logo2-1536x864.png', level: 2 },
      { name: 'Looker Studio', imgUrl: 'https://funnel.io/hubfs/google-looker-logo.png', level: 2 },
      { name: 'Power Bi', imgUrl: 'https://logosmarken.com/wp-content/uploads/2022/02/Microsoft-Power-BI-Logo-2016-2020-650x366.png', level: 3 },
    ],
  },
  {
    category: 'Automatización / Aplicaciones Low Code',
    skills: [
      { name: 'Power Automate', imgUrl: 'https://images.icon-icons.com/3914/PNG/512/powerautomate_logo_icon_248796.png', level: 2 },
      { name: 'UiPath', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/80/UiPath_2019_Corporate_Logo.png', level: 2 },
      { name: 'Power Apps', imgUrl: 'https://logotic.me/system/assets/uploads/vector-files/power-apps-1669116905-logotic-tmpl.svg', level: 2 },
      { name: 'AppSheet', imgUrl: 'https://play-lh.googleusercontent.com/rW4cFCs9COZhpTYlW9x9OL2lKAy9kkPCTEfEUliybKOiXLsfi2BlOWyvZolbCiszcj4', level: 2 },
    ],
  },
];

// --- VARIANTES DE ANIMACIÓN ---

// 2. Variante para el contenedor del grid (escalona las tarjetas)
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Cada tarjeta aparecerá con 0.15s de retraso
    },
  },
};

// 3. Variante para cada tarjeta (escalona su contenido interno)
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      staggerChildren: 0.1, // Cada item *dentro* de la tarjeta tendrá un retraso
    },
  },
};

// 4. Variante para los items internos (título y cada skill)
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 120 },
  },
};


export default function Skills() {
  // 5. ¡Ya no se necesitan los hooks de 'isVisible', 'sectionRef' ni 'useEffect'!
  
  const renderStars = (level) => {
    return [1, 2, 3].map((i) => (
      <FaStar key={i} className={`text-rojoletra ${i <= level ? 'opacity-100' : 'opacity-30'}`} />
    ));
  };

  return (
    <section
      id="skills"
      // 6. Quita la 'ref', mantiene 'overflow-hidden'
      className="min-h-screen bg-transparent text-white flex flex-col justify-center items-center py-20 gap-12 px-4 md:px-6 overflow-hidden"
    >
      <motion.h2 
        className="text-6xl font-bold mb-4 text-rojoletra text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        SKILLS
      </motion.h2>

      {/* 7. El contenedor del grid usa las variantes 'gridVariants' */}
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Inicia cuando el 20% del grid es visible
      >
        {skillsData.map((category, index) => (
          // 8. Tarjeta con 'cardVariants' y estilo "glow"
          <motion.div
            key={index}
            variants={cardVariants} // Usa la variante de tarjeta
            whileHover={{ scale: 1.03, y: -5 }} // Micro-interacción
            // Estilo "Glassmorphism" refinado
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6
                       flex flex-col items-center
                       border border-rojoletra/20 shadow-xl shadow-rojoletra/10
                       hover:shadow-rojoletra/20 hover:border-rojoletra/50"
            // 9. Ya no se necesita el 'style' para el transitionDelay
          >
            {/* 10. Título de la categoría animado */}
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 text-center text-rojoletra"
            >
              {category.category}
            </motion.h3>
            
            {/* 11. Lista de skills (el 'stagger' viene del padre) */}
            <div className="flex flex-col gap-5 w-full">
              {category.skills.map((skill) => (
                // 12. Cada item de skill animado
                <motion.div
                  key={skill.name}
                  variants={itemVariants} // Usa la variante de item
                  className="flex items-center gap-4 w-full"
                >
                  {/* Contenedor del ícono */}
                  <div className="bg-white/10 p-2 rounded-lg flex-shrink-0">
                    <img
                      src={skill.imgUrl}
                      alt={skill.name}
                      className="w-12 h-12 object-contain img-white" // Asumiendo que 'img-white' es una clase global tuya
                    />
                  </div>
                  {/* Contenedor para nombre y estrellas */}
                  <div className="flex-grow">
                    <p className="text-lg text-gray-100 font-medium">{skill.name}</p>
                    <div className="flex gap-1 mt-1">{renderStars(skill.level)}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}