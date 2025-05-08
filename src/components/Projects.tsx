import { useState } from "react";
import { BookOpen, Image } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Comparative Study on Additive vs Traditional Manufacturing",
      image: "/manufacturing.jpg",
      category: "Research",
      description:
        "This project involved a comprehensive analysis of additive manufacturing techniques compared to traditional manufacturing methods. The study evaluated cost-effectiveness, material properties, and production efficiency.",
      technologies: ["CATIA V5", "Material Analysis", "Cost Modeling"],
      outcomes: [
        "Identified specific use-cases where additive manufacturing offers significant advantages",
        "Developed a decision framework for manufacturing process selection",
        "Created detailed cost and efficiency models for comparison",
      ],
    },
    {
      title: "Water Desalination System",
      image: "/desalination.jpg",
      category: "Design & Simulation",
      description:
        "Designed and simulated a compact water desalination system using CAD modeling and computational fluid dynamics. The project focused on improving efficiency while reducing energy consumption.",
      technologies: ["SolidWorks", "ANSYS CFD", "Thermal Analysis"],
      outcomes: [
        "Achieved 15% improvement in water recovery rate compared to benchmark systems",
        "Reduced energy consumption by implementing an innovative heat recovery system",
        "Designed modular components for easy maintenance and scaling",
      ],
    },
    {
      title: "Helical Coil Heat Exchanger",
      image: "/placeholder.jpg",
      category: "Thermal Simulation",
      description:
        "Engineered a helical coil heat exchanger optimized for industrial applications. The project involved thermal simulation, stress analysis, and prototype development.",
      technologies: ["ANSYS Thermal", "AutoCAD", "Prototype Testing"],
      outcomes: [
        "Improved heat transfer efficiency by 20% through geometric optimization",
        "Validated simulation results with physical prototype testing",
        "Developed design guidelines for helical heat exchangers in high-pressure environments",
      ],
    },
    {
      title: "Refrigeration System Analysis",
      image: "/placeholder.svg",
      category: "Performance Analysis",
      description:
        "Conducted a comprehensive analysis of industrial refrigeration systems using CoolPack software. The project aimed at identifying efficiency improvements and reducing environmental impact.",
      technologies: ["CoolPack", "Thermodynamic Analysis", "Python"],
      outcomes: [
        "Identified system modifications to reduce energy consumption by 12%",
        "Developed a Python script for automated performance monitoring",
        "Created a comprehensive report with recommendations for refrigerant selection",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-engineer-blue">
            Project Gallery
          </h2>
          <div className="h-1 w-20 bg-engineer-yellow mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Explore my portfolio of engineering projects, showcasing expertise in design,
            simulation, and analysis.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-full overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 right-4 bg-engineer-yellow text-engineer-blue px-4 py-1 rounded-full font-medium text-sm animate-fade-in">
                        {project.category}
                      </span>
                      <div className="absolute inset-0 bg-engineer-blue/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Image className="w-16 h-16 text-white/70" />
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-engineer-blue animate-fade-in">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-6 animate-fade-in">
                        {project.description}
                      </p>

                      <div className="mb-6 animate-fade-in">
                        <h4 className="font-bold text-engineer-blue mb-2 flex items-center">
                          <BookOpen size={18} className="mr-2" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-engineer-blue/10 text-engineer-blue px-3 py-1 rounded-full text-sm transform transition-all duration-300 hover:scale-105 hover:bg-engineer-blue hover:text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="animate-fade-in">
                        <h4 className="font-bold text-engineer-blue mb-2">
                          Key Outcomes
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {project.outcomes.map((outcome, idx) => (
                            <li
                              key={idx}
                              className="transition-all duration-300 hover:text-engineer-blue"
                            >
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center mt-8">
            <CarouselPrevious className="relative static left-0" />
            <CarouselNext className="relative static right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
