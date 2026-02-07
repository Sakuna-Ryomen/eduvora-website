import { GraduationCap, Github, Heart, Mail, ExternalLink, Sparkles, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-dark via-secondary to-dark text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-light rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg">
                <GraduationCap size={32} className="text-white" />
              </div>
              <span className="text-3xl font-bold text-gradient">Eduvora</span>
            </div>
            <p className="text-white/70 mb-6 text-lg leading-[1.8] max-w-md">
              Academic management that doesn't suck. Real-time tech, clean design, actually works.
            </p>
            <div className="flex items-center gap-2 text-white/70 mb-6">
              <span>Built with</span>
              <Heart size={18} className="text-error fill-current animate-pulse" />
              <span>by students</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-primary/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-6 border border-white/10"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:contact@eduvora.com" 
                className="p-3 bg-white/10 hover:bg-primary/20 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-6 border border-white/10"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="text-primary" size={20} />
              <span className="text-gradient">Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Features', 'Releases'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code2 className="text-primary" size={20} />
              <span className="text-gradient">Project</span>
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                v1.4.0 Live
              </li>
              <li>Feb 7, 2026</li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Production Ready
              </li>
              <li>React Native + Expo</li>
              <li className="pt-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-primary transition-all duration-300 group font-semibold"
                >
                  <Github size={20} />
                  View Source
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="glass-effect rounded-3xl p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">15K+</div>
                <div className="text-sm text-white/60 font-medium">Lines</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">85+</div>
                <div className="text-sm text-white/60 font-medium">Components</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">12</div>
                <div className="text-sm text-white/60 font-medium">Test Suites</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">68%</div>
                <div className="text-sm text-white/60 font-medium">Coverage</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">38</div>
                <div className="text-sm text-white/60 font-medium">Days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-center md:text-left">
              © {currentYear} Eduvora. Made for students who deserve better tools.
            </p>
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                Jan 1 – Feb 7, 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
