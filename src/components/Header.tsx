
import { Home, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Why Now', id: 'why-now' },
    { label: 'Creative Journey', id: 'creative-journey' },
    { label: 'Superpowers', id: 'superpowers' },
    { label: 'Future Toolkit', id: 'future-toolkit' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Link with enhanced typography */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 text-slate-900 hover:text-ai-blue-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-semibold font-space-grotesk">Design Meets Intelligence</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-ai-blue-600 transition-colors font-medium font-space-grotesk relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-ai-blue-500 to-ai-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-ai-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-2 py-2 text-slate-700 hover:text-ai-blue-600 hover:bg-slate-50 rounded transition-colors font-medium font-space-grotesk"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
