
import { Code, Layers } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "CATIA V5", level: 90 },
    { name: "ANSYS", level: 85 },
    { name: "SolidWorks", level: 95 },
    { name: "AutoCAD", level: 90 },
    { name: "Creo", level: 80 },
    { name: "Python", level: 75 },
    { name: "Lean Six Sigma", level: 85 },
    { name: "DOE", level: 80 },
  ];

  const softSkills = [
    { name: "Problem-Solving", level: 95 },
    { name: "Data Analysis", level: 85 },
    { name: "Team Collaboration", level: 90 },
    { name: "Project Management", level: 80 },
    { name: "Technical Writing", level: 85 },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-engineer-blue">
            Professional Skills
          </h2>
          <div className="h-1 w-20 bg-engineer-yellow mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            My expertise combines technical proficiency in engineering tools with 
            essential soft skills needed for effective problem-solving and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-engineer-blue" size={28} />
              <h3 className="text-2xl font-bold text-engineer-blue">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-engineer-blue">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-engineer-blue to-engineer-lightBlue rounded-full transition-all duration-1000 group-hover:from-engineer-yellow group-hover:to-engineer-blue"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <Layers className="text-engineer-blue" size={28} />
              <h3 className="text-2xl font-bold text-engineer-blue">Soft Skills</h3>
            </div>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-engineer-blue">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-engineer-blue to-engineer-lightBlue rounded-full transition-all duration-1000 group-hover:from-engineer-yellow group-hover:to-engineer-blue"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 p-10 bg-engineer-blue text-white rounded-lg shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4 10.6C12.8 11 12 12 12 13.5V16H16V13.5H14.4C14.4 11.9 16 11.3 16 9.3C16 7.8 15.1 7 14 7C12.9 7 12 7.8 12 9C12 10.2 12.9 11 14 11C14.1 11 14.3 10.9 14.4 10.6ZM8.4 10.6C6.8 11 6 12 6 13.5V16H10V13.5H8.4C8.4 11.9 10 11.3 10 9.3C10 7.8 9.1 7 8 7C6.9 7 6 7.8 6 9C6 10.2 6.9 11 8 11C8.1 11 8.3 10.9 8.4 10.6Z" fill="currentColor" />
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-light mb-6 relative z-10">
            "Engineering is not only solving problems, it's creating possibilities."
          </p>
          <p className="font-bold text-engineer-yellow">Abhay Natthu Phirke</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
