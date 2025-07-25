import { useState } from "react";

const Projects = () => {
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

        {/* <div
          value={activeSection}
          onValueChange={setActiveSection}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
            <TabsTrigger
              value="fullstack"
              className="text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300 hover:scale-105"
            >
              Full Stack Development
            </TabsTrigger>
            <TabsTrigger
              value="data"
              className="text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300 hover:scale-105"
            >
              Data Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fullstack" className="animate-fade-in">
            <div className="space-y-12">
              {fullstackProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden border-slate-700/50 bg-slate-800/20 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group animate-slide-in-up ${
                    project.featured
                      ? "ring-1 ring-blue-500/50 hover:ring-blue-500/80"
                      : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <div className="mb-4">
                        {project.featured && (
                          <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white animate-pulse-slow">
                            Proyecto Destacado
                          </Badge>
                        )}
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-blue-400 mb-4">
                          Cliente: {project.client}
                        </p>
                        <p className="text-slate-300 mb-6">
                          {project.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">
                          Resultados:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 group/metric"
                            >
                              <div className="h-1.5 w-1.5 bg-blue-400 rounded-full group-hover/metric:scale-150 transition-transform duration-300"></div>
                              <span className="text-sm text-slate-300">
                                {metric}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs bg-slate-700/50 backdrop-blur-sm text-slate-300 hover:bg-slate-600/50 hover:scale-105 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600/50 text-slate-300 hover:bg-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                        >
                          <Github className="mr-2 h-3 w-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                          Código
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600/50 text-slate-300 hover:bg-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                        >
                          <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="data" className="animate-fade-in">
            <div className="space-y-12">
              {dataProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden border-slate-700/50 bg-slate-800/20 backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group animate-slide-in-up ${
                    project.featured
                      ? "ring-1 ring-blue-500/50 hover:ring-blue-500/80"
                      : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <div className="mb-4">
                        {project.featured && (
                          <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white animate-pulse-slow">
                            Proyecto Destacado
                          </Badge>
                        )}
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-blue-400 mb-4">
                          Cliente: {project.client}
                        </p>
                        <p className="text-slate-300 mb-6">
                          {project.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">
                          Impacto:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 group/metric"
                            >
                              <div className="h-1.5 w-1.5 bg-blue-400 rounded-full group-hover/metric:scale-150 transition-transform duration-300"></div>
                              <span className="text-sm text-slate-300">
                                {metric}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs bg-slate-700/50 backdrop-blur-sm text-slate-300 hover:bg-slate-600/50 hover:scale-105 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600/50 text-slate-300 hover:bg-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                        >
                          <Github className="mr-2 h-3 w-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                          Código
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600/50 text-slate-300 hover:bg-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                        >
                          <ExternalLink className="mr-2 h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                          Análisis
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
