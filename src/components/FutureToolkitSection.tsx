
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { User, Bot, Palette, Heart, Compass, ExternalLink, Sparkles, Zap } from 'lucide-react';

const FutureToolkitSection = () => {
  const [quoteVisible, setQuoteVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuoteVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const teamRoles = [
    {
      icon: User,
      title: "The Human Designer",
      description: "Sets creative vision and makes strategic decisions",
      bgGradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Zap,
      title: "The Prompt Engineer",
      description: "Translates creative ideas into AI-understandable language",
      bgGradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Bot,
      title: "The Visual AI Assistant",
      description: "Generates, iterates, and refines visual concepts rapidly",
      bgGradient: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Heart,
      title: "The Emotion Mapper",
      description: "Analyzes emotional impact and user behavioral patterns",
      bgGradient: "from-red-500 to-orange-500",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Compass,
      title: "The Experience Curator",
      description: "Orchestrates seamless multi-touchpoint user journeys",
      bgGradient: "from-indigo-500 to-purple-500",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  const aiTools = [
    { name: "Midjourney", url: "https://midjourney.com", category: "Image Generation" },
    { name: "Adobe Firefly", url: "https://firefly.adobe.com", category: "Creative Suite AI" },
    { name: "RunwayML", url: "https://runwayml.com", category: "Video & Animation" },
    { name: "Figma AI", url: "https://figma.com", category: "Design Systems" },
    { name: "DALL·E", url: "https://openai.com/dall-e-3", category: "AI Art" }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-20">
          <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            The Future Designer's Toolkit
          </h2>
        </div>

        {/* Bold Quote */}
        <div className="scroll-reveal mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote 
              className={`editorial-heading text-3xl md:text-4xl lg:text-5xl leading-tight transition-all duration-1000 ${
                quoteVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                "The best designers won't be replaced by AI — they'll lead it."
              </span>
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>

        {/* Team of the Future */}
        <div className="scroll-reveal mb-24">
          <h3 className="editorial-heading text-3xl md:text-4xl text-center mb-4 text-gray-100">
            Team of the Future
          </h3>
          <p className="editorial-body text-lg text-center text-gray-400 max-w-3xl mx-auto mb-16">
            The AI-powered design team isn't about replacing humans—it's about amplifying human creativity 
            through intelligent collaboration.
          </p>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {teamRoles.map((role, index) => (
              <div 
                key={role.title}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:border-gray-600"
              >
                <div className={`w-16 h-16 ${role.iconBg} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <role.icon className={`w-8 h-8 ${role.iconColor}`} />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-center text-gray-100">{role.title}</h4>
                <p className="text-sm text-gray-400 text-center leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Stack */}
          <div className="lg:hidden space-y-4">
            {teamRoles.map((role, index) => (
              <div 
                key={role.title}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 flex items-center space-x-4"
              >
                <div className={`w-12 h-12 ${role.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <role.icon className={`w-6 h-6 ${role.iconColor}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-gray-100">{role.title}</h4>
                  <p className="text-sm text-gray-400">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Try it Yourself */}
        <div className="scroll-reveal">
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="editorial-heading text-3xl md:text-4xl mb-4 text-gray-100">
                Your Turn to Experiment
              </h3>
              
              <p className="editorial-body text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start prompting. Start iterating. Start collaborating.
              </p>

              <div className="mb-8">
                <h4 className="font-semibold text-lg mb-4 text-gray-200">Popular AI Tools to Explore:</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {aiTools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 hover:border-gray-500 rounded-full px-4 py-2 transition-all duration-200 flex items-center space-x-2"
                    >
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white">{tool.name}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-gray-200" />
                    </a>
                  ))}
                </div>
              </div>

              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="https://midjourney.com" target="_blank" rel="noopener noreferrer">
                  Explore AI Tools
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Fade-out phrase */}
        <div className="scroll-reveal text-center mt-24 opacity-60">
          <p className="editorial-body text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            AI doesn't design. You do. It just helps you get there faster.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureToolkitSection;
