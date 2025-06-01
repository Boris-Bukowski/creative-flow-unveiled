
import { Lightbulb, Palette, Cog, MessageCircle, RotateCcw } from 'lucide-react';

const CreativeJourneySection = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Inspiration",
      description: "Gathering ideas and references"
    },
    {
      icon: Palette,
      title: "Ideation", 
      description: "Brainstorming and conceptualizing"
    },
    {
      icon: Cog,
      title: "Execution",
      description: "Bringing ideas to life"
    },
    {
      icon: MessageCircle,
      title: "Feedback",
      description: "Collecting insights and responses"
    },
    {
      icon: RotateCcw,
      title: "Iteration",
      description: "Refining and improving"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="editorial-heading text-4xl md:text-5xl mb-6">
            The Creative Journey
          </h2>
          <p className="editorial-body text-xl text-muted-foreground max-w-2xl mx-auto">
            The timeless process that every designer follows, waiting for intelligence to enhance each step
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block scroll-reveal">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Icon container */}
                  <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <step.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.title} className="scroll-reveal flex items-center space-x-4">
              <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <step.icon className="w-8 h-8 text-gray-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loop indicator */}
        <div className="scroll-reveal text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200">
            <RotateCcw className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Continuous Loop</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeJourneySection;
