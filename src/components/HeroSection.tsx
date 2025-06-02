
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
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Enhanced background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 animate-float blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-25 animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Enhanced main headline */}
        <h1 
          className={`editorial-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Design Meets{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-gray-900 bg-clip-text text-transparent animate-pulse">
            Intelligence
          </span>
        </h1>

        {/* Updated subheadline */}
        <p 
          className={`editorial-body text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Explore how AI is transforming the way designers create, think, and build.
        </p>

        {/* Call-to-Action Button */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Explore the AI Design Toolkit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Enhanced abstract illustration */}
        <div 
          className={`relative max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <div className="flex items-center justify-center space-x-12">
              {/* Designer representation with enhanced styling */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-lg font-semibold text-gray-700">Designer</span>
              </div>

              {/* Enhanced connection visualization */}
              <div className="flex items-center space-x-3">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-gray-400"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-gray-400 to-blue-400"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                  </div>
                </div>
              </div>

              {/* AI tool representation with enhanced styling */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-lg font-semibold text-gray-700">AI Tool</span>
              </div>
            </div>

            {/* Enhanced creative output representation */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="h-6 bg-gradient-to-r from-blue-200 to-blue-300 rounded animate-pulse"></div>
                <div className="h-6 bg-gradient-to-r from-purple-200 to-purple-300 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <div className="h-6 bg-gradient-to-r from-blue-200 to-purple-200 rounded animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                <div className="h-4 bg-gradient-to-r from-gray-100 to-purple-100 rounded animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="h-4 bg-gradient-to-r from-blue-100 to-gray-100 rounded animate-pulse" style={{ animationDelay: '1.2s' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-6 font-medium">Enhanced Creative Output</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
