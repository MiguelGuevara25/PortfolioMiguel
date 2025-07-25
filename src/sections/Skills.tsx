import { BiLogoPostgresql } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import {
  FaChartBar,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRegBuilding,
} from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAstro,
  SiGit,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiSpring,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tecnologías & Herramientas
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stack tecnológico completo para desarrollo web fullstack y análisis
            de datos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Web Development Technologies */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="h-8 w-8 rounded bg-gradient-to-r from-blue-500 to-blue-600 mr-3 flex items-center justify-center">
                <CiGlobe className="h-4 w-4 text-white" />
              </div>
              Desarrollo Web
            </h3>

            <div className="space-y-8">
              {/* Frontend */}
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">
                  Frontend
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    {
                      name: "JavaScript",
                      level: 90,
                      color: "from-yellow-400 to-yellow-600",
                      icon: <IoLogoJavascript className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "TypeScript",
                      level: 75,
                      color: "from-blue-400 to-blue-600",
                      icon: <SiTypescript className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "React",
                      level: 80,
                      color: "from-cyan-300 to-cyan-600",
                      icon: <FaReact className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "Next.js",
                      level: 75,
                      color: "from-gray-700 to-gray-900",
                      icon: <SiNextdotjs className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "Tailwind CSS",
                      level: 80,
                      color: "from-cyan-400 to-cyan-600",
                      icon: <SiTailwindcss className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "Astro",
                      level: 70,
                      color: "from-black to-orange-600",
                      icon: <SiAstro className="h-6 w-6 text-white" />,
                    },
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className="border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-4 text-center">
                        <div className="mb-3">
                          <div
                            className={`h-12 w-12 rounded-lg bg-gradient-to-t ${tech.color} mx-auto flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}
                          >
                            {tech.icon}
                          </div>
                        </div>
                        <h5 className="font-medium text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {tech.name}
                        </h5>
                        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                          <div
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-400">
                          {tech.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">
                  Backend
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Node.js",
                      level: 65,
                      color: "from-green-500 to-green-700",
                      icon: <FaNodeJs className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "Spring Boot",
                      level: 50,
                      color: "from-lime-400 to-lime-600",
                      icon: <SiSpring className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "PostgreSQL",
                      level: 75,
                      color: "from-cyan-700 to-cyan-900",
                      icon: <BiLogoPostgresql className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "MySQL",
                      level: 50,
                      color: "from-cyan-700 to-cyan-900",
                      icon: <GrMysql className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "Docker",
                      level: 25,
                      color: "from-blue-500 to-blue-700",
                      icon: <FaDocker className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "Strapi",
                      level: 50,
                      color: "from-indigo-500 to-indigo-700",
                      icon: <SiStrapi className="h-6 w-6 text-white" />,
                    },
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className="border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group animate-fade-in-up"
                      style={{ animationDelay: `${(index + 6) * 100}ms` }}
                    >
                      <div className="p-4 text-center">
                        <div className="mb-3">
                          <div
                            className={`h-12 w-12 rounded-lg bg-gradient-to-r ${tech.color} mx-auto flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}
                          >
                            {tech.icon}
                          </div>
                        </div>
                        <h5 className="font-medium text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {tech.name}
                        </h5>
                        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                          <div
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-400">
                          {tech.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Analysis Technologies */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="h-8 w-8 rounded bg-gradient-to-r from-purple-500 to-purple-600 mr-3 flex items-center justify-center">
                <FaChartBar className="h-4 w-4 text-white" />
              </div>
              Data Analysis
            </h3>

            <div className="space-y-8">
              {/* Programming Languages */}
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-4">
                  Lenguajes
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Python",
                      level: 25,
                      color: "from-sky-700 to-amber-300",
                      icon: <FaPython className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "SQL",
                      level: 60,
                      color: "from-orange-500 to-orange-700",
                      icon: <FaDatabase className="h-6 w-6 text-white" />,
                    },
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className="border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 group animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-4 text-center">
                        <div className="mb-3">
                          <div
                            className={`h-12 w-12 rounded-lg bg-gradient-to-r ${tech.color} mx-auto flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}
                          >
                            {tech.icon}
                          </div>
                        </div>
                        <h5 className="font-medium text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {tech.name}
                        </h5>
                        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                          <div
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-400">
                          {tech.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Libraries & Tools */}
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-4">
                  Librerías & Herramientas
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
                  {[
                    {
                      name: "Pandas",
                      level: 25,
                      color: "from-blue-500 to-blue-700",
                      icon: <SiPandas className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "NumPy",
                      level: 25,
                      color: "from-blue-400 to-blue-600",
                      icon: <SiNumpy className="h-6 w-6 text-white" />,
                    },
                    {
                      name: "Power BI",
                      level: 50,
                      color: "from-yellow-500 to-yellow-700",
                      icon: <BsBarChartFill className="h-6 w-6 text-white" />,
                    },
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className="border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 group animate-fade-in-up"
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    >
                      <div className="p-4 text-center">
                        <div className="mb-3">
                          <div
                            className={`h-12 w-12 rounded-lg bg-gradient-to-r ${tech.color} mx-auto flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}
                          >
                            {tech.icon}
                          </div>
                        </div>
                        <h5 className="font-medium text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {tech.name}
                        </h5>
                        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                          <div
                            className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-400">
                          {tech.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <div className="h-8 w-8 rounded bg-gradient-to-r from-green-500 to-green-600 mr-3 flex items-center justify-center">
              <FaRegBuilding className="h-4 w-4 text-white" />
            </div>
            Cloud & DevOps
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Vercel",
                level: 50,
                color: "from-gray-700 to-gray-900",
                icon: <SiVercel className="h-6 w-6 text-white" />,
              },
              {
                name: "Git",
                level: 50,
                color: "from-orange-600 to-orange-800",
                icon: <SiGit className="h-6 w-6 text-white" />,
              },
              {
                name: "GitHub",
                level: 75,
                color: "from-gray-600 to-gray-800",
                icon: <FaGithub className="h-6 w-6 text-white" />,
              },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10 group animate-bounce-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-4 text-center">
                  <div className="mb-3">
                    <div
                      className={`h-12 w-12 rounded-lg bg-gradient-to-r ${tech.color} mx-auto flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      {tech.icon}
                    </div>
                  </div>
                  <h5 className="font-medium text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {tech.name}
                  </h5>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div
                      className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-400">{tech.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
