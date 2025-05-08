import { useState } from "react";
import { Flame, Lightbulb, Settings, FileText, ArrowRightCircle, ArrowLeftCircle } from "lucide-react";
import capstoneImage from "@/assets/disc-brake-vector.jpg"; // Replace with your actual vector/image

const CapstonePresentation = () => {
  const slides = [
    {
      icon: <Lightbulb size={32} className="text-engineer-yellow" />,
      title: "Project Introduction",
      content:
        "This capstone project is a detailed study of the thermal response of disc brake systems, highlighting design optimization, thermal analysis, and performance improvement.",
    },
    {
      icon: <Flame size={32} className="text-red-500" />,
      title: "Problem Statement",
      content:
        "Disc brakes suffer from thermal distortion, brake fade, and wear due to excessive heat. These factors reduce safety and braking performance, especially under extreme conditions.",
    },
    {
      icon: <Settings size={32} className="text-engineer-blue" />,
      title: "Research Methodology",
      content:
        "We analyzed solid and ventilated disc geometries under cyclic thermal loads using FEM-based thermal and structural simulations. Materials were evaluated for stress, weight, and heat resistance.",
    },
    {
      icon: <FileText size={32} className="text-green-600" />,
      title: "Key Findings",
      content:
        "Optimized rotor design improved braking efficiency by 15%, and reduced rotor weight by 10%. Elliptical ventilation holes enhanced thermal dissipation but required structural reinforcement.",
    },
    {
      icon: <FileText size={32} className="text-engineer-blue" />,
      title: "Applications",
      content:
        "Applicable to high-performance two-wheelers, EVs, and racing applications where high thermal loads occur frequently. Design standards proposed for future industrial adaptation.",
    },
    {
      icon: <ArrowRightCircle size={32} className="text-engineer-yellow" />,
      title: "Conclusion & Future Scope",
      content:
        "Our study identifies critical research gaps including brake squeal, fatigue life, and the hydrodynamic effect. Future work includes material fusion research and CFD-FEA co-simulation.",
    },
    {
      icon: <FileText size={32} className="text-engineer-blue" />,
      title: "📄 View Full Paper",
      content: (
        <>
          Download the full research paper to explore thermal and structural findings in depth:
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
    <section id="capstone" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-engineer-blue mb-2">Capstone Project</h2>
          <div className="h-1 w-20 bg-engineer-yellow mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thermal and Structural Performance Enhancement in Disc Brake Systems using Thermo-Mechanical Analysis
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:flex md:items-center md:gap-8">
          <div className="hidden md:block w-1/2">
            <img
              src={capstoneImage}
              alt="Disc Brake System Vector"
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              {icon}
              <h3 className="text-xl font-bold text-engineer-blue">{title}</h3>
            </div>
            <div className="text-gray-700 text-base leading-relaxed mb-6">
              {typeof content === "string" ? <p>{content}</p> : content}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={goPrev}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded bg-engineer-blue text-white disabled:opacity-50"
              >
                <ArrowLeftCircle size={16} /> Previous
              </button>
              <span className="text-sm text-gray-500">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <button
                onClick={goNext}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded bg-engineer-blue text-white disabled:opacity-50"
              >
                Next <ArrowRightCircle size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapstonePresentation;
