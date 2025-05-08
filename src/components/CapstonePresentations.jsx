import { useState } from "react";
import {
  Flame,
  Lightbulb,
  Settings,
  FileText,
  ArrowRightCircle,
  ArrowLeftCircle,
} from "lucide-react";
import capstoneImage from "@/assets/disc-brake-vector.jpg"; // Place a suitable image in /src/assets/

const CapstonePresentation = () => {
  const slides = [
    {
      icon: <Lightbulb size={32} className="text-engineer-yellow" />,
      title: "Project Introduction",
      content:
        "A comprehensive thermal analysis of disc brake systems with a focus on ventilation pattern design and material optimization for high-efficiency braking performance.",
    },
    {
      icon: <Flame size={32} className="text-red-500" />,
      title: "Problem Statement",
      content:
        "Disc brakes face thermal distortion, brake fade, and wear under repeated braking cycles, affecting safety and performance. This project addresses these issues via thermo-mechanical analysis.",
    },
    {
      icon: <Settings size={32} className="text-engineer-blue" />,
      title: "Methodology",
      content:
        "Used Finite Element Analysis to simulate thermal and structural behavior of multiple disc designs and materials under varying load conditions.",
    },
    {
      icon: <FileText size={32} className="text-green-600" />,
      title: "Key Results",
      content:
        "Optimized rotor designs improved braking efficiency by 15% and reduced rotor weight by 10%. Ventilation patterns significantly enhanced heat dissipation.",
    },
    {
      icon: <FileText size={32} className="text-engineer-blue" />,
      title: "Conclusion & Applications",
      content:
        "Proposed designs are applicable to high-performance and electric vehicles. Future work includes material enhancement and CFD-FEA co-simulation for real-time feedback systems.",
    },
    {
      icon: <FileText size={32} className="text-engineer-blue" />,
      title: "📄 Download Report",
      content: (
        <>
          Access the full research paper for data tables, diagrams, and simulation results:
          <br />
          <a
            href="/Investigation_of_Thermal_Response_of_Disc_Brake.pdf"
            className="text-engineer-blue underline mt-2 inline-block"
          >
            👉 Download PDF
          </a>
        </>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const goNext = () => setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  const goPrev = () => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  const { icon, title, content } = slides[currentSlide];

  return (
    <section className="section-padding bg-gray-50 min-h-screen overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-engineer-blue mb-2">Capstone Project</h2>
          <div className="h-1 w-24 bg-engineer-yellow mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thermo-Mechanical Performance Optimization of Disc Brake Systems
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src={capstoneImage}
              alt="Disc Brake System"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              {icon}
              <h3 className="text-2xl font-bold text-engineer-blue">{title}</h3>
            </div>

            <div className="text-gray-700 text-base leading-relaxed mb-6">
              {typeof content === "string" ? <p>{content}</p> : content}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={goPrev}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 px-4 py-2 rounded bg-engineer-blue text-white disabled:opacity-50"
              >
                <ArrowLeftCircle size={18} />
                Previous
              </button>

              <span className="text-sm text-gray-500">
                Slide {currentSlide + 1} of {slides.length}
              </span>

              <button
                onClick={goNext}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded bg-engineer-blue text-white disabled:opacity-50"
              >
                Next
                <ArrowRightCircle size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapstonePresentation;
