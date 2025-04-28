
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Lean Six Sigma Green Belt",
      issuer: "Udemy",
      date: "May 2025",
      description: "Comprehensive training in process improvement methodologies, statistical analysis, and waste reduction techniques."
    },
    {
      title: "Advanced CATIA V5 Modeling",
      issuer: "RVM CAD",
      date: "June 2024",
      description: "Expert-level training in surface modeling, assembly design, and parametric modeling techniques in CATIA V5."
    },
    {
      title: "SolidWorks Professional Certification",
      issuer: "Dassault Systèmes",
      date: "January 2024",
      description: "Professional certification validating expertise in SolidWorks design and modeling capabilities."
    },
    {
      title: "Finite Element Analysis Fundamentals",
      issuer: "Infosys Springboard",
      date: "August 2024",
      description: "Advanced training in FEA principles, mesh generation, boundary conditions, and results interpretation."
    },
    {
      title: "Python for Engineering Applications",
      issuer: "Coursera",
      date: "March 2024",
      description: "Comprehensive course on applying Python programming for solving engineering problems and data analysis."
    },
    {
      title: "AutoCAD Professional",
      issuer: "Autodesk",
      date: "November 2024",
      description: "Professional-level certification in AutoCAD drafting, design, and documentation."
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-engineer-blue">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-engineer-yellow mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            My continuous learning journey is evidenced by these professional certifications,
            expanding my expertise in various engineering domains.
          </p>
        </div>

        {/* Achievements Carousel */}
        <div className="max-w-5xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-engineer-blue">Achievement Highlights</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-engineer-blue/5 p-6 rounded-lg border-l-4 border-engineer-blue">
              <h4 className="font-bold mb-2">Academic Excellence</h4>
              <p className="text-gray-700">Graduated with distinction (8.8 CGPA) in Mechanical Engineering</p>
            </div>
            
            <div className="bg-engineer-blue/5 p-6 rounded-lg border-l-4 border-engineer-blue">
              <h4 className="font-bold mb-2">Design Competition</h4>
              <p className="text-gray-700">First prize in National CAD Design Competition 2024</p>
            </div>
            
            <div className="bg-engineer-blue/5 p-6 rounded-lg border-l-4 border-engineer-blue">
              <h4 className="font-bold mb-2">Research Publication</h4>
              <p className="text-gray-700">Co-authored paper on sustainable materials in manufacturing</p>
            </div>
            
            <div className="bg-engineer-blue/5 p-6 rounded-lg border-l-4 border-engineer-blue">
              <h4 className="font-bold mb-2">Technical Leadership</h4>
              <p className="text-gray-700">Led student team in designing award-winning energy-efficient vehicle</p>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
            >
              <div className="mb-4 flex justify-between items-start">
                <Award className="text-engineer-yellow h-8 w-8 group-hover:text-engineer-blue transition-colors" />
                <span className="text-sm text-gray-500">{cert.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
              <p className="text-engineer-blue mb-3 font-medium">{cert.issuer}</p>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
