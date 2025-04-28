import { useState } from "react";
import { Download, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-engineer-blue text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-engineer-yellow mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto opacity-90">
            Let's connect and discuss how my engineering expertise can contribute to your projects.
            I'm open to collaboration, consultation, and new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-engineer-blue">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-engineer-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-engineer-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-engineer-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-engineer-blue"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-engineer-blue">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a href="mailto:abhay.phirke@example.com" className="opacity-90 hover:text-engineer-yellow transition-colors">
                      abhay.phirke@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-engineer-blue">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <a href="tel:+918668863478" className="opacity-90 hover:text-engineer-yellow transition-colors">
                      +91-8668863478
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-engineer-blue">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/abhayphirke" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="opacity-90 hover:text-engineer-yellow transition-colors"
                    >
                      linkedin.com/in/abhayphirke
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0">
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <p className="mb-4 opacity-90">
                Get a comprehensive view of my skills, experience, and qualifications.
              </p>
              <a 
                href="/Abhay Natthu Phirke Resume.pdf" 
                download="Abhay Natthu Phirke Resume.pdf"
                className="btn bg-engineer-yellow text-engineer-blue hover:bg-white inline-flex items-center"
              >
              <Download size={18} className="mr-2" />
              Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-3">Let's Connect and Innovate Together</h3>
          <p className="max-w-3xl mx-auto opacity-90">
            Whether you're looking for engineering consultation, project collaboration, 
            or just want to discuss innovative ideas in mechanical engineering, 
            I'm always open to meaningful connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
