export default function Navbar() {
  return (
    <nav className="bg-gray-700 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rojoletra">¡BIENVENIDO A MI PORTAFOLIO!</h1>
        <ul className="flex space-x-6 text-rojoletra">
          <li><a href="#home" className="hover:text-blue-600">Inicio</a></li>
          <li><a href="#about" className="hover:text-blue-600">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
