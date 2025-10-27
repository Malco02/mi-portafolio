export default function Projects() {
  const projects = [
    {
      title: "Dashboard de Control Operativo",
      description:
        "Dashboard en Power BI que muestra en tiempo real los indicadores de despacho, tiempos y cumplimiento de servicios.",
      tech: ["Power BI", "Excel", "DAX"],
      link: "#"
    },
    {
      title: "App de Seguimiento de Servicios",
      description:
        "Aplicativo en AppSheet que registra tiempos, calificaciones de servicio y genera indicadores automáticos.",
      tech: ["AppSheet", "Google Sheets", "Automatización"],
      link: "#"
    },
    {
      title: "Automatización de Reportes",
      description:
        "Flujo desarrollado con Power Automate y UiPath que genera reportes semanales y los envía por correo automáticamente.",
      tech: ["Power Automate", "UiPath"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-transparent text-white px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Proyectos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, j) => (
                <span key={j} className="text-sm bg-gray-700 text-blue-300 px-2 py-1 rounded-md">{t}</span>
              ))}
            </div>
            <a
              href={p.link}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Ver proyecto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
