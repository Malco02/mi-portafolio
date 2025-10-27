import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import About from "./components/About"; 
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import AcademicTimeline from "./components/linea_tiempo"; // <--- Importación corregida
import ProjectTabs from "./components/ProjectShowcase";
import Separator from "./components/Separator"; 

function App() {
  return (
    <div className="starry-background text-gray-300">
      <Navbar />
      <Resume/>
      <Separator /> 
      <Skills />
      <Separator />
      
      <AcademicTimeline />  {/* <--- Uso corregido */}

      <Separator />
      <About />
      <Separator />
      <ProjectTabs />
      <Separator /> 
      <Educacion />
      <Footer />
    </div>
  );
}

export default App;
