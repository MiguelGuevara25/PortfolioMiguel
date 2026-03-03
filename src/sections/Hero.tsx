import { useEffect, useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaGithub, FaPlus } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentStats, setCurrentStats] = useState({
    projects: 0,
    analyses: 0,
    experience: 0,
  });

  const fullTitle = "Full Stack Developer & Data Analytics Specialist";

  // Typing animation effect
  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullTitle.length) {
        setTypedText(fullTitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Counter animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const counter = setInterval(() => {
        const progress = step / steps;
        setCurrentStats({
          projects: Math.floor(15 * progress),
          analyses: Math.floor(8 * progress),
          experience: Math.floor(5 * progress),
        });

        if (step >= steps) {
          clearInterval(counter);
          setCurrentStats({ projects: 15, analyses: 1, experience: 3 });
        }
        step++;
      }, stepDuration);

      return () => clearInterval(counter);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6">
              <p className="transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 animate-bounce-subtle backdrop-blur-sm badge__1">
                Disponible para nuevos proyectos
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="inline-block animate-slide-up">
                  Full Stack Developer &
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Data Analytics Specialist
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed animate-fade-in-delayed backdrop-blur-sm">
                Especialista en desarrollo de aplicaciones web escalables y
                análisis de datos empresariales. Combino expertise técnico con
                visión de negocio para crear soluciones que generan valor real.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up-delayed">
              <a
                href="mailto:miguelguevara1789@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group backdrop-blur-sm button__1"
              >
                <BiEnvelope className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Contactar
              </a>

              <a
                href="https://github.com/MiguelGuevara25"
                target="_blank"
                className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-8 hover:bg-slate-800 hover:text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/25 group button__2"
              >
                <FaGithub className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Ver Proyectos
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400 animate-fade-in-delayed">
              <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300">
                <IoLocationSharp className="h-4 w-4" />
                <span>Lima, Perú</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300">
                <FaPlus className="h-4 w-4" />
                <span>{currentStats.experience}+ años experiencia</span>
              </div>
            </div>
          </div>

          <div
            className={` relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group">
              <img
                src="/miguel.webp"
                alt="Miguel Guevara"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-700/50 animate-slide-up-delayed hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-300">
                  Disponible para proyectos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
          <div className="border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group">
            <span className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {currentStats.projects}+
              </div>
              <div className="text-sm text-slate-300">Proyectos Web</div>
            </span>
          </div>

          <div className="border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group">
            <span className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {currentStats.experience}+
              </div>
              <div className="text-sm text-slate-300">Años de Experiencia</div>
            </span>
          </div>

          <div className="border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group">
            <span className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {currentStats.analyses}+
              </div>
              <div className="text-sm text-slate-300">Análisis de Datos</div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
