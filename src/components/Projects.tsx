import { useState } from "react";
import { BookOpen, Image } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Reusable presentation viewer for slide-based project
const PresentationViewer = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = () =>
    setCurrentSlide((prev) =>
      prev + 1 < slides.length ? prev + 1 : prev
    );
  const goPrev = () =>
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));

  const { title, content } = slides[currentSlide];

  return (
    <div className="p-8 animate-fade-in">
      <h3 className="text-xl font-bold mb-3 text-engineer-blue">{title}</h3>
      <p className="text-gray-700 mb-6">{content}</p>

      <div className="flex justify-between">
        <button
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="bg-engineer-blue text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={goNext}
          disabled={currentSlide === slides.length - 1}
          className="bg-engineer-blue text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <div className="mt-2 text-sm text-gray-500 text-right">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Comparative Study on Additive vs Traditional Manufacturing",
      image: "/manufacturing.jpg",
      category: "Research",
      description:
        "This project involved a comprehensive analysis of additive manufacturing techniques compared to traditional methods. The study evaluated cost-effectiveness, material properties, and production efficiency.",
      technologies: ["CATIA V5", "Material Analysis", "Cost Modeling"],
      outcomes: [
        "Identified specific use-cases where additive manufacturing offers advantages",
        "Developed a decision framework for manufacturing process selection",
        "Created cost and efficiency models for comparison",
      ],
    },
    {
      title: "Water Desalination System",
      image: "/desalination.jpg",
      category: "Design & Simulation",
      description:
        "Designed and simulated a compact water desalination system using CAD modeling and CFD. The project focused on efficiency and reduced energy consumption.",
      technologies: ["SolidWorks", "ANSYS CFD", "Thermal Analysis"],
      outcomes: [
        "Improved water recovery rate by 15%",
        "Reduced energy consumption via innovative heat recovery",
        "Modular design for easy maintenance",
      ],
    },
    {
      title: "Helical Coil Heat Exchanger",
      image: "/manufacturing.jpg",
      category: "Thermal Simulation",
      description:
        "Engineered a helical coil heat exchanger for industrial use. Focus on simulation, stress analysis, and prototyping.",
      technologies: ["ANSYS Thermal", "AutoCAD", "Prototype Testing"],
      outcomes: [
        "20% better heat transfer via geometric optimization",
        "Validated results through prototyping",
        "Developed design guidelines for high-pressure use",
      ],
    },
    {
      title: "Refrigeration System Analysis",
      image: "/placeholder.jpg",
      category: "Performance Analysis",
      description:
        "Analyzed industrial refrigeration using CoolPack. Aimed at improving efficiency and lowering environmental impact.",
      technologies: ["CoolPack", "Thermodynamic Analysis", "Python"],
      outcomes: [
        "Energy consumption reduced by 12%",
        "Built Python script for automated monitoring",
        "Provided refrigerant selection recommendations",
      ],
    },
    {
      title: "Thermal Response of Disc Brake System",
      image: "/Screenshot 2025-05-02 150741.png", // Replace with your actual image
      category: "Research Presentation",
      description:
        "A slide-style presentation based on the research paper reviewing thermo-mechanical analysis and optimization of disc brake systems.",
      technologies: ["Thermal Analysis", "Brake Design", "FEM"],
      isPresentation: true,
      slides: [
        {
          title: "Project Introduction",
          content:
            "This research focuses on investigating the thermal response of disc brake systems and proposes performance-enhancing improvements.",
        },
        {
          title: "Research Motivation",
          content:
            "Heat buildup in disc brakes reduces performance and safety. This study aims to address such challenges with optimized designs.",
        },
        {
          title: "Thermal Stress Factors",
          content:
            "Includes friction heat generation, material stress points, and the effects of high operating temperatures on brake reliability.",
        },
        {
          title: "Proposed Improvements",
          content:
            "Design changes like ventilation patterns, lightweight materials, and structural optimization to reduce rotor weight and heat retention.",
        },
        {
          title: "Conclusion",
          content:
            "Proposed brake design improves braking efficiency by 15% and reduces rotor weight by 10%, paving the way for future enhancements.",
        },
        {
          title: "📄 View Full Paper",
          content:
            "You can download and view the full research paper by clicking the link below:\n\n👉 [Download PDF](/Investigation_of_Thermal_Response_of_Disc_Brake.pdf)",
        },
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
          opts={{ align: "start", loop: true }}
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

                    {project.isPresentation ? (
                      <PresentationViewer slides={project.slides} />
                    ) : (
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
                    )}
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
