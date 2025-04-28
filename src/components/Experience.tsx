
import { useState } from "react";
import { ArrowLeft, ArrowRight, Briefcase } from "lucide-react";

const Experience = () => {
  const [active, setActive] = useState(0);
  
  const experiences = [
    {
      company: "Cummins India Ltd.",
      position: "Mechanical Engineering Intern",
      period: "June 2024 - December 2024",
      description: "As an intern at Cummins India Ltd., I gained valuable experience in the mechanical engineering field with a focus on testing and analysis. During my time there, I was exposed to industry-standard practices and cutting-edge technologies.",
      responsibilities: [
        "Assisted in fatigue testing of engine components using advanced testing equipment",
        "Performed vibration analysis of mechanical systems and documented findings",
        "Participated in team meetings and contributed to problem-solving discussions",
        "Developed analytical skills by working with senior engineers on real-world engineering challenges",
        "Created detailed reports on test results and participated in data analysis"
      ]
    }
  ];

  const handleNext = () => {
    setActive((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-engineer-blue">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-engineer-yellow mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            My professional journey has provided me with valuable insights and hands-on experience
            in mechanical engineering and design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 lg:p-12 overflow-hidden">
            {/* Background Element */}
            <div className="absolute -right-10 -bottom-10 opacity-5">
              <Briefcase size={180} />
            </div>

            {/* Experience Content */}
            <div className="relative z-10">
              <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-engineer-blue">{experiences[active].position}</h3>
                  <h4 className="text-xl text-engineer-grey mb-1">{experiences[active].company}</h4>
                </div>
                <span className="bg-engineer-blue text-white px-4 py-2 rounded-full text-sm mt-2 sm:mt-0">
                  {experiences[active].period}
                </span>
              </div>

              <p className="mb-6 text-gray-700">{experiences[active].description}</p>
              
              <h5 className="font-bold mb-3 text-engineer-blue">Key Responsibilities:</h5>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {experiences[active].responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Controls - Conditionally rendered only if more than one experience */}
          {experiences.length > 1 && (
            <>
              <div className="flex justify-center mt-8 gap-4">
                <button 
                  onClick={handlePrev}
                  className="btn border-2 border-engineer-blue text-engineer-blue hover:bg-engineer-blue hover:text-white group"
                >
                  <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Previous
                </button>
                <button 
                  onClick={handleNext}
                  className="btn border-2 border-engineer-blue text-engineer-blue hover:bg-engineer-blue hover:text-white group"
                >
                  Next
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {experiences.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      active === idx ? "bg-engineer-blue w-8" : "bg-gray-300"
                    }`}
                    aria-label={`Go to experience ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
