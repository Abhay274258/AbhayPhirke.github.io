
import { Book, Calendar } from "lucide-react";

const About = () => {
  const timelineEvents = [
    {
      year: "2025",
      event: "B.Tech in Mechanical Engineering, Pune Institute of Technology",
      description: "Graduated with distinction, specializing in design and manufacturing"
    },
    {
      year: "2024",
      event: "Internship at Cummins India Ltd.",
      description: "Worked on fatigue testing and vibration analysis projects"
    },
    {
      year: "2022",
      event: "Diploma in Mechanincal Engineering",
      description: "Done the Diploma in Mechanical engineering with First Class Distinction."
    },
    {
      year: "2019",
      event: "SSC",
      description: "Passed SSC examination with 1st class distinction."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* About Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-engineer-blue">
              About Me
            </h2>
            <div className="h-1 w-20 bg-engineer-yellow mb-8"></div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                I am Abhay Natthu Phirke, a passionate Mechanical Engineer with expertise in design, 
                manufacturing, and process optimization. Throughout my academic and professional journey, 
                I've developed strong problem-solving abilities and a keen eye for innovation.
              </p>
              <p>
                My technical foundation spans across CAD modeling, simulation analysis, and programming, 
                allowing me to approach engineering challenges from multiple perspectives. I believe 
                in creating sustainable, efficient solutions that make a real-world impact.
              </p>
              <p>
                With experience at Cummins India Ltd. and various project endeavors, I've honed my 
                skills in fatigue testing, vibration analysis, and thermal simulations. My goal is 
                to continue pushing boundaries in mechanical design and engineering solutions.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-2">
              <Book className="text-engineer-blue" size={20} />
              <span className="font-medium">B.Tech - Mechanical Engineering, Pune Institute of Technology</span>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-engineer-blue">Education & Experience Timeline</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="timeline-line"></div>
              
              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative pl-10 md:pl-0">
                    <div className="timeline-circle" style={{ top: "0px" }}></div>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}`}>
                      <div className="flex items-center gap-2 mb-2 text-engineer-blue font-medium">
                        <Calendar size={16} className={index % 2 === 0 ? 'md:order-first' : 'md:order-last'} />
                        <span>{event.year}</span>
                      </div>
                      <h4 className="font-bold mb-1">{event.event}</h4>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
