
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Enhanced AI-inspired background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-ai-blue-200 to-ai-purple-200 rounded-full opacity-60 animate-float animate-glow blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-ai-purple-200 to-ai-cyan-200 rounded-full opacity-50 animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-ai-cyan-200 to-ai-blue-200 rounded-full opacity-40 animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-20 h-20 bg-gradient-to-br from-ai-blue-300 to-ai-purple-300 rounded-full opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Enhanced main headline with modern typography */}
        <h1 
          className={`editorial-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Design Meets{' '}
          <span className="ai-gradient-text">
            Intelligence
          </span>
        </h1>

        {/* Updated subheadline with better typography */}
        <p 
          className={`editorial-body text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Explore how AI is transforming the way designers create, think, and build.
        </p>

        {/* Enhanced Call-to-Action Button */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="text-lg px-8 py-6 ai-gradient-primary hover:scale-105 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group font-space-grotesk font-medium"
          >
            Explore the AI Design Toolkit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Enhanced abstract illustration with new color scheme */}
        <div 
          className={`relative max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center justify-center space-x-12">
              {/* Designer representation with AI-inspired styling */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-ai-blue-400 to-ai-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-ai-cyan-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <span className="text-lg font-semibold text-slate-700 font-space-grotesk">Designer</span>
              </div>

              {/* Enhanced connection visualization with AI colors */}
              <div className="flex items-center space-x-3">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-ai-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-ai-blue-400 to-ai-purple-400"></div>
                    <div className="w-3 h-3 bg-ai-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-ai-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-ai-purple-400 to-ai-cyan-400"></div>
                    <div className="w-3 h-3 bg-ai-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-ai-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-ai-cyan-400 to-ai-blue-400"></div>
                    <div className="w-3 h-3 bg-ai-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                  </div>
                </div>
              </div>

              {/* AI tool representation with enhanced AI-inspired styling */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-ai-purple-500 to-ai-purple-700 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-ai-cyan-400 to-ai-blue-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-lg font-semibold text-slate-700 font-space-grotesk">AI Tool</span>
              </div>
            </div>

            {/* Enhanced creative output representation with AI color palette */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="h-6 bg-gradient-to-r from-ai-blue-200 to-ai-blue-300 rounded animate-pulse"></div>
                <div className="h-6 bg-gradient-to-r from-ai-purple-200 to-ai-purple-300 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-6 bg-gradient-to-r from-ai-cyan-200 to-ai-cyan-300 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <div className="h-6 bg-gradient-to-r from-ai-blue-200 to-ai-purple-200 rounded animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-4 bg-gradient-to-r from-ai-purple-100 to-ai-blue-100 rounded animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                <div className="h-4 bg-gradient-to-r from-ai-cyan-100 to-ai-purple-100 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="h-4 bg-gradient-to-r from-ai-blue-100 to-ai-cyan-100 rounded animate-pulse" style={{ animationDelay: '1.2s' }}></div>
              </div>
              <p className="text-sm text-slate-600 mt-6 font-medium font-space-grotesk">Enhanced Creative Output</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
