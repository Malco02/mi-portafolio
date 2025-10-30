import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
// import Projects from "./components/Projects"; // No se está usando
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import AcademicTimeline from "./components/linea_tiempo";
import ProjectTabs from "./components/ProjectShowcase";
import Separator from "./components/Separator"; 

function App() {
  // --- Define el "padding" para el scroll ---
  // Ajusta 'scroll-mt-20' (80px) a la altura de tu Navbar
  const sectionScrollMargin = "scroll-mt-20"; 

  return (
    <div className="starry-background text-gray-300">
      <Navbar />

      {/* 1. INICIO -> Conecta con Resume */}
      <div id="home" className={sectionScrollMargin}>
        <Resume />
      </div>

      <Separator /> 
      
      {/* Estas secciones no tienen link en tu Navbar, así que no necesitan id */}
      <Skills />
      <Separator />
      <AcademicTimeline />
      <Separator />

      {/* 2. SOBRE MÍ -> Conecta con About */}
      <div id="About" className={sectionScrollMargin}>
        <About />
      </div>

      <Separator />

      {/* 3. PROYECTOS -> Conecta con ProjectTabs (ProjectShowcase) */}
      <div id="ProjectShowcase" className={sectionScrollMargin}>
        <ProjectTabs />
      </div>

      <Separator /> 

      {/* Esta sección no tiene link en tu Navbar */}
      <Educacion />

      {/* 4. CONTACTO -> Conecta con Footer */}
      <div id="contact" className={sectionScrollMargin}>
        <Footer />
      </div>
    </div>
  );
}

export default App;