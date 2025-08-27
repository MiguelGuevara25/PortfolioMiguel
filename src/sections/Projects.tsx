import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, projects.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getTypeColor = (type: "fullstack" | "data") => {
    return type === "fullstack"
      ? "from-blue-500 to-blue-600"
      : "from-purple-500 to-purple-600";
  };

  const getTypeLabel = (type: "fullstack" | "data") => {
    return type === "fullstack" ? "Desarrollo Web" : "Análisis de Datos";
  };

  return (
    <section className="py-20 px-6 lg:px-8 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Soluciones tecnológicas que han generado impacto real en
            organizaciones de diferentes sectores
          </p>
        </div>

        <div className="relative w-full">
          {/* Main Slider Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div
                    className={`rounded-lg border text-card-foreground shadow-2xs overflow-hidden border-slate-700/50 bg-slate-800/20 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-500 group`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="aspect-video lg:aspect-auto overflow-hidden relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Type Badge Overlay */}
                        <div className="absolute top-4 left-4">
                          <div
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-gradient-to-r ${getTypeColor(
                              project.type
                            )} text-white`}
                          >
                            {getTypeLabel(project.type)}
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>

                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs bg-slate-700/50 backdrop-blur-sm text-slate-300 hover:bg-slate-600/50 hover:scale-105 transition-all duration-300"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground border h-9 rounded-md px-3 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn">
                            <FaGithub className="mr-2 h-3 w-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                            Código
                          </button>
                          <a
                            href={project.demo}
                            target="_blank"
                            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground border h-9 rounded-md px-3 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                          >
                            <FaExternalLinkAlt className="mr-2 h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                            {project.type === "fullstack" ? "Demo" : "Análisis"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full p-3 text-white hover:bg-slate-800/80 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            aria-label="Proyecto anterior"
          >
            {/* <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" /> */}
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full p-3 text-white hover:bg-slate-800/80 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            aria-label="Proyecto siguiente"
          >
            {/* <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" /> */}
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-700/30 rounded-full h-1 mt-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-1 rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / projects.length) * 100}%`,
              }}
            />
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 text-slate-400 text-sm">
            <span className="text-blue-400 font-medium">
              {currentIndex + 1}
            </span>{" "}
            de{" "}
            <span className="text-blue-400 font-medium">{projects.length}</span>{" "}
            proyectos
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
