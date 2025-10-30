// Navbar.js

// 1. Importa 'motion' y 'AnimatePresence'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 2. Importa iconos modernos para el menú
import { HiMenuAlt3, HiX } from 'react-icons/hi';

// Array de links para no repetir código (DRY)
const navLinks = [
  { title: 'Inicio', href: '#home' },
  { title: 'Sobre mí', href: '#resume' }, // Asumiendo que #resume es el ID de "Sobre mí"
  { title: 'Proyectos', href: '#ProjectTabs' }, // Actualiza esto con el ID de tu sección de proyectos
  { title: 'Skills', href: '#skills' },
  { title: 'Certificaciones', href: '#certifications' }, // Actualiza si es necesario
  { title: 'Contacto', href: '#contact' }, // Actualiza si es necesario
];

// --- VARIANTES DE ANIMACIÓN PARA EL MENÚ MÓVIL ---

// Variante para el fondo del menú
const mobileMenuVariants = {
  hidden: {
    x: '100%',
    opacity: 0,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.3 },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', ease: 'easeIn', duration: 0.3 },
  },
};

// Variante para el contenedor de los links (escalonado)
const linkContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Cada 'li' se animará con 0.08s de retraso
      delayChildren: 0.2, // Espera 0.2s antes de empezar
    },
  },
};

// Variante para cada link individual
const linkVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 150 },
  },
};


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // 3. Estado para el menú móvil
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Tu 'useEffect' para el scroll (sigue siendo perfecto, no se cambia)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para cerrar el menú (la usaremos en los links)
  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <>
      {/* --- BARRA DE NAVEGACIÓN PRINCIPAL --- */}
      <motion.nav
        // 4. Animación de entrada
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        // 5. Clases de scroll (tu lógica original)
        className={`
          fixed w-full top-0 left-0 z-50
          transition-all duration-300 ease-in-out 
          ${
            isScrolled
              ? 'bg-heroBg/80 backdrop-blur-md shadow-lg py-4'
              : 'bg-transparent py-6'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo/Nombre (reducido para mejor visualización y enlazado a #home) */}
          <a
            href="#home"
            className="text-xl font-semibold text-primary cursor-pointer hover:text-white transition-colors duration-300"
          >
            Malco Flores
          </a>

          {/* 6. Links de Escritorio (ocultos en móvil) */}
          <ul className="hidden md:flex space-x-8 text-primary">
            {navLinks.map((link) => (
              // 7. Micro-interacción de hover en cada link
              <motion.li key={link.title} whileHover={{ y: -3 }}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.title}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* 7. Botón de Hamburguesa (visible solo en móvil) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="text-primary text-3xl"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MENÚ MÓVIL --- */}
      {/* 8. AnimatePresence para la animación de entrada/salida */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // 9. Estilo del menú: ocupa toda la pantalla con "glassmorphism"
            className="fixed inset-0 z-[60] bg-heroBg/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            {/* Botón de Cierre */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-8 right-6 text-primary text-4xl"
            >
              <HiX />
            </button>

            {/* Lista de Links Móviles */}
            <motion.ul
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-8 text-center"
            >
              {navLinks.map((link) => (
                <motion.li key={link.title} variants={linkVariants}>
                  <a
                    href={link.href}
                    onClick={closeMobileMenu} // Cierra el menú al hacer clic
                    className="text-3xl font-semibold text-primary hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}