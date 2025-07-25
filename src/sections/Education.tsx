import { FiAward } from "react-icons/fi";
import { certifications, education } from "../data";

const Education = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-8">
              Formación Académica
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-lg border text-card-foreground shadow-2xs border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <p className="p-6">
                    <h4 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-slate-300 mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm text-slate-400">
                      <span>{edu.period}</span>
                      <p className="focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:scale-105 transition-transform duration-300 badge__1">
                        {edu.honors}
                      </p>
                    </div>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-white mb-8">
              Certificaciones
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:bg-slate-800/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FiAward className="h-5 w-5 text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span className="text-slate-300 font-medium group-hover:text-blue-400 transition-colors duration-300">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
