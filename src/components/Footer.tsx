
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#" className="text-2xl font-bold">
              Abhay<span className="text-engineer-yellow">.</span>
            </a>
            <p className="mt-2 text-gray-400">
              Mechanical Engineer | Innovator | Problem Solver
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop} 
              className="bg-engineer-blue hover:bg-engineer-blue/80 p-3 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Abhay Natthu Phirke. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed with passion and expertise
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
