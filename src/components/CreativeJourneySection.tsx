
import { Lightbulb, Palette, Cog, MessageCircle, RotateCcw, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const CreativeJourneySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Lightbulb,
      title: "Inspiration",
      description: "AI-powered mood boards and visual references",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Palette,
      title: "Ideation", 
      description: "Smart brainstorming with ML assistance",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Cog,
      title: "Execution",
      description: "Automated workflows and intelligent tools",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Feedback",
      description: "AI-driven insights and user analytics",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: RotateCcw,
      title: "Iteration",
      description: "Machine learning-enhanced refinement",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="scroll-reveal text-center mb-20">
          <h2 className="editorial-heading text-5xl md:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            The Creative Journey
          </h2>
          <p className="editorial-body text-xl text-slate-600 max-w-3xl mx-auto">
            The timeless process enhanced by intelligent systems that understand your creative intent
          </p>
        </div>

        {/* Desktop Circular Flow */}
        <div className="hidden lg:block scroll-reveal">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Central hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-lg font-space-grotesk">AI</span>
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse-slow"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Steps positioned in circle */}
            {steps.map((step, index) => {
              const angle = (index * 72) - 90; // 360/5 = 72 degrees between each step
              const radius = 140;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={step.title}
                  className={`absolute transition-all duration-500 ${
                    activeStep === index ? 'scale-110 z-20' : 'scale-100 z-10'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 80px)`,
                    top: `calc(50% + ${y}px - 80px)`,
                  }}
                >
                  <div className={`tech-card p-6 w-40 h-40 flex flex-col items-center justify-center text-center relative overflow-hidden ${
                    activeStep === index ? 'shadow-2xl border-blue-500/50' : ''
                  }`}>
                    {/* Background gradient */}
                    {activeStep === index && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}></div>
                    )}
                    
                    <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center mb-3 relative z-10 transition-transform duration-300 ${
                      activeStep === index ? 'scale-110' : ''
                    }`}>
                      <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-sm mb-1 font-space-grotesk relative z-10">{step.title}</h3>
                    <p className="text-xs text-slate-600 relative z-10">{step.description}</p>
                    
                    {/* Step indicator */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Interactive Cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className={`scroll-reveal tech-card transition-all duration-500 cursor-pointer ${
                activeStep === index ? 'scale-105 shadow-xl' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="p-6 relative overflow-hidden">
                {/* Background gradient for active step */}
                {activeStep === index && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}></div>
                )}
                
                <div className="flex items-center space-x-4 relative z-10">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    activeStep === index ? 'scale-110 shadow-lg' : ''
                  }`}>
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-slate-900 mb-2 font-space-grotesk">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  
                  <ArrowRight className={`w-5 h-5 text-slate-400 transition-all duration-300 ${
                    activeStep === index ? 'text-blue-500 transform translate-x-1' : ''
                  }`} />
                </div>

                {/* Active indicator bar */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color} transition-all duration-500 ${
                  activeStep === index ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Loop indicator */}
        <div className="scroll-reveal text-center mt-16">
          <div className="inline-flex items-center space-x-3 tech-card px-8 py-4">
            <RotateCcw className="w-6 h-6 text-blue-500 animate-pulse" />
            <span className="font-medium text-slate-700 font-space-grotesk">Continuous Intelligence Loop</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeJourneySection;
