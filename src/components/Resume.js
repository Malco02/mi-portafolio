import React from "react";
import { FaPhone, FaMapMarkerAlt, FaGraduationCap, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-transparent text-white px-6 py-20 gap-10"
    >
      {/* Lado izquierdo: Foto + Botón */}
      <div className="md:w-1/3 flex flex-col items-center gap-6">
        {/* Marco más claro + sombra */}
        <div className=" p-16 bg-gray-700 shadow-lg">
          <img
            src="/ruta-de-tu-foto.jpg" // Cambia esta ruta por tu foto
            alt="Mi Foto"
            className=" w-64 h-64 object-cover border-4 border-white"
          />
        </div>

        {/* Botón para abrir CV */}
        <a
          href="/ruta-de-tu-cv.pdf" // Cambia esta ruta por tu CV en PDF
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-700 hover:bg-gray-700 transition text-red-500 font-semibold"
        >
          Descargar CV
        </a>
      </div>

      {/* Lado derecho: Información */}
      <div className="md:w-2/3 flex flex-col gap-6">
        {/* Título y descripción */}
        <div>
          <h1 className="text-red-500 text-6xl font-bold mb-4 px-10 py-5">Hola, me llamo Malco</h1>
          <p className="text-lg leading-relaxed px-10 text-justify">
            Soy Analista de Datos y Automatización, apasionado por transformar información en decisiones estratégicas.
            Con experiencia en{" "}
            <span className="text-red-500 font-semibold">Python, SQL, Power BI, AppSheet y Power Automate</span>, diseño soluciones que optimizan
            procesos, generan insights claros y facilitan la gestión eficiente de la información. Me enfoco en{" "}
            <span className="text-red-500 font-semibold">analizar, visualizar y automatizar datos</span> para que las organizaciones tomen decisiones más inteligentes y productivas.
          </p>
        </div>

        {/* Datos de contacto con íconos y links */}
        <ul className="flex flex-col gap-4 text-lg px-10">
          <li className="flex items-center gap-3">
            <FaPhone className="text-red-500" />
            <a href="tel:+51926961909" className="hover:underline">+51 926 961 909</a>
          </li>
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-500" />
            <a href="https://www.google.com/maps/place/Lima" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Lima, Perú
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaGraduationCap className="text-red-500" />
            <span>Bachiller en Ingeniería Industrial</span>
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-red-500" />
            <a href="mailto:malco02u@gmail.com" className="hover:underline">malco02u@gmail.com</a>
          </li>
          <li className="flex items-center gap-3">
            <FaLinkedin className="text-red-500" />
            <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
