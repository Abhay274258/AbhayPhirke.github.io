
import { useEffect, useState } from "react";
import { Cog } from "lucide-react";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-engineer-blue to-blue-900"
    >
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-4 h-4 bg-engineer-yellow/20 rounded-full top-1/4 left-1/4 animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute w-3 h-3 bg-engineer-yellow/20 rounded-full top-3/4 left-1/3 animate-float" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute w-5 h-5 bg-engineer-yellow/20 rounded-full top-1/3 right-1/4 animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Enhanced Animated Gears */}
      <Cog 
        size={200} 
        className="gear-bg text-engineer-yellow/20 animate-gear-spin hover:text-engineer-yellow/30 transition-colors duration-300 top-20 -left-20"
      />
      <Cog 
        size={140} 
        className="gear-bg text-engineer-grey/30 animate-gear-spin-reverse hover:text-engineer-grey/40 transition-colors duration-300 top-40 left-40" 
      />
      <Cog 
        size={240} 
        className="gear-bg text-engineer-yellow/20 animate-gear-spin-reverse hover:text-engineer-yellow/30 transition-colors duration-300 -bottom-40 -right-20" 
      />
      <Cog 
        size={160} 
        className="gear-bg text-engineer-grey/30 animate-gear-spin hover:text-engineer-grey/40 transition-colors duration-300 bottom-60 right-40" 
      />

      {/* Enhanced Parallax Content */}
      <div 
        className="container mx-auto px-6 relative z-10"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Abhay Natthu Phirke
          </h1>
          <div 
            className="h-1 w-20 bg-engineer-yellow mx-auto mb-6 animate-fade-in" 
            style={{ animationDelay: "0.6s" }}
          ></div>
          <h2 
            className="text-xl md:text-2xl lg:text-3xl mb-10 text-white/90 font-light animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Mechanical Engineer | Innovator | Problem Solver
          </h2>
          <div 
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up" 
            style={{ animationDelay: "0.6s" }}
          >
            <a 
              href="#about" 
              className="btn btn-accent hover:scale-105 transform transition-transform duration-300"
            >
              Discover More
            </a>
            <a 
              href="#contact" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-engineer-blue hover:scale-105 transform transition-transform duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="scroll-indicator animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
