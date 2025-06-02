
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    const element = document.getElementById('future-toolkit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/90 to-purple-900/90">
      {/* Enhanced tech background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-float animate-glow blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full animate-pulse-tech blur-2xl" style={{ animationDelay: '4s' }}></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Modern tech headline */}
        <h1 
          className={`editorial-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-white">Design Meets</span>{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>

        {/* Enhanced subheadline */}
        <p 
          className={`editorial-body text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Explore how AI is transforming the way designers create, think, and build the future.
        </p>

        {/* Tech-inspired CTA */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="tech-button text-lg px-10 py-6 font-space-grotesk font-semibold group relative overflow-hidden"
          >
            <div className="flex items-center">
              <Sparkles className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Explore the AI Design Toolkit
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Button>
        </div>

        {/* Modern tech visualization */}
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="tech-card p-12 md:p-16 relative overflow-hidden">
            {/* Background tech elements */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
            
            <div className="flex items-center justify-center space-x-16 relative z-10">
              {/* Designer representation */}
              <div className="flex flex-col items-center space-y-6 group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full border-2 border-white animate-pulse-tech"></div>
                </div>
                <span className="text-xl font-bold text-slate-700 font-space-grotesk">Designer</span>
              </div>

              {/* Connection visualization */}
              <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse-tech"></div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse-tech" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse-tech" style={{ animationDelay: '1s' }}></div>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse-tech" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>
              </div>

              {/* AI representation */}
              <div className="flex flex-col items-center space-y-6 group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-glow"></div>
                </div>
                <span className="text-xl font-bold text-slate-700 font-space-grotesk">AI Tool</span>
              </div>
            </div>

            {/* Enhanced output visualization */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="h-8 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg animate-pulse-tech"></div>
                <div className="h-8 bg-gradient-to-r from-purple-200 to-purple-300 rounded-lg animate-pulse-tech" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-8 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg animate-pulse-tech" style={{ animationDelay: '0.4s' }}></div>
                <div className="h-8 bg-gradient-to-r from-purple-200 to-blue-200 rounded-lg animate-pulse-tech" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg animate-pulse-tech" style={{ animationDelay: '0.8s' }}></div>
                <div className="h-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg animate-pulse-tech" style={{ animationDelay: '1s' }}></div>
                <div className="h-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg animate-pulse-tech" style={{ animationDelay: '1.2s' }}></div>
              </div>
              <p className="text-lg text-slate-600 mt-8 font-bold font-space-grotesk">Enhanced Creative Output</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
