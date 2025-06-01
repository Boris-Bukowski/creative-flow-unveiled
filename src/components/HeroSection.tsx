
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main headline */}
        <h1 
          className={`editorial-heading text-5xl md:text-7xl lg:text-8xl mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Design Meets{' '}
          <span className="bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`editorial-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          How Machine Learning is shaping the next generation of creators
        </p>

        {/* Abstract illustration placeholder */}
        <div 
          className={`relative max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200">
            <div className="flex items-center justify-center space-x-8">
              {/* Designer representation */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">Designer</span>
              </div>

              {/* Connection/collaboration indicator */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-4 h-0.5 bg-gray-300"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-4 h-0.5 bg-gray-300"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* AI tool representation */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-600">AI Tool</span>
              </div>
            </div>

            {/* Creative output representation */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
                <div className="h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded"></div>
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
              </div>
              <p className="text-xs text-gray-500 mt-4">Co-created output</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
