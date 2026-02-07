import { Menu, X, GraduationCap, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Releases', href: '#releases' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-effect shadow-xl py-3 border-b border-light/30' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" onClick={(e) => handleNavClick(e, '#home')}>
            <div className={`p-2 rounded-xl bg-gradient-to-br from-primary to-secondary transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg`}>
              <GraduationCap className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-gradient hover:scale-105 transition-transform inline-block">Eduvora</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              );
            })}
            <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 flex items-center gap-2 border border-primary/20">
              <Sparkles size={16} />
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isOpen 
                  ? 'text-primary bg-primary/10 rotate-90' 
                  : 'text-secondary hover:text-primary hover:bg-primary/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="glass-effect rounded-2xl p-4 space-y-2 shadow-xl border border-light/30 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <button className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border border-primary/20">
              <Sparkles size={16} />
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
