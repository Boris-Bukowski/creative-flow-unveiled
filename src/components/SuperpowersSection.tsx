
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, Palette, Cog, MessageCircle, RotateCcw, Brain, Sparkles, Zap, Building2, Play, ArrowRight } from 'lucide-react';

const SuperpowersSection = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentPanel((prev) => (prev + 1) % panels.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const panels = [
    {
      id: 'inspiration',
      icon: Lightbulb,
      stage: 'Inspiration',
      superpower: 'Generate visual concepts from simple prompts',
      description: 'AI-powered moodboards, style explorations, and instant visual references that understand your creative intent.',
      tools: ['Midjourney', 'DALL·E', 'Stable Diffusion'],
      bgGradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 'ideation',
      icon: Palette,
      stage: 'Ideation',
      superpower: 'Smart layouts, visual variants, predictive mockups',
      description: 'Intelligent design systems that suggest optimal layouts, color schemes, and typography combinations.',
      tools: ['Figma AI', 'Adobe Sensei', 'Framer AI'],
      bgGradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'execution',
      icon: Cog,
      stage: 'Execution',
      superpower: 'Auto-fills, background removal, fast rendering',
      description: 'Automated production tasks that handle repetitive work while you focus on creative decisions.',
      tools: ['Remove.bg', 'Photoshop AI', 'Canva Magic'],
      bgGradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 'feedback',
      icon: MessageCircle,
      stage: 'Feedback',
      superpower: 'Heatmap analysis, emotion detection, A/B testing',
      description: 'AI-powered insights that predict user behavior and emotional response to your designs.',
      tools: ['Hotjar AI', 'Maze Analytics', 'UserTesting AI'],
      bgGradient: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 'iteration',
      icon: RotateCcw,
      stage: 'Iteration',
      superpower: 'Versioning, style transfer, batch creative adjustments',
      description: 'Intelligent iteration tools that learn from your design decisions and accelerate refinement cycles.',
      tools: ['GitHub Copilot', 'Abstract AI', 'Figma Variables'],
      bgGradient: 'from-indigo-500 to-purple-500',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    }
  ];

  const useCases = [
    {
      title: 'AI for Spatial Thinkers',
      subtitle: 'Architecture & Product Design',
      description: 'How architects & product designers use generative design & simulation tools to explore countless possibilities and optimize for performance, sustainability, and aesthetics.',
      tools: ['Autodesk Generative', 'Rhino Grasshopper', 'nTopology'],
      icon: Building2,
      bgGradient: 'from-slate-700 to-gray-800',
      examples: [
        'Generative building layouts that optimize for natural light',
        'Product forms that balance weight and structural integrity',
        'Parametric facades that respond to environmental conditions'
      ]
    },
    {
      title: 'AI in Motion',
      subtitle: 'Animation & Game Creation',
      description: 'How animators & game creators leverage AI for 3D modeling, character rigs, and dynamic environments that adapt and evolve in real-time.',
      tools: ['RunwayML', 'Unity ML Agents', 'Blender AI'],
      icon: Play,
      bgGradient: 'from-purple-700 to-pink-800',
      examples: [
        'AI-generated character animations from motion capture',
        'Procedural world generation with intelligent terrain',
        'Dynamic lighting that responds to gameplay emotion'
      ]
    }
  ];

  const nextPanel = () => {
    setCurrentPanel((prev) => (prev + 1) % panels.length);
    setIsAutoPlaying(false);
  };

  const prevPanel = () => {
    setCurrentPanel((prev) => (prev - 1 + panels.length) % panels.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-20">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="editorial-heading text-5xl md:text-6xl bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Superpowers for Creatives
            </h2>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="editorial-body text-xl text-slate-600 max-w-3xl mx-auto">
            Machine Learning doesn't replace creativity—it amplifies it. See how AI enhances every stage of your design workflow.
          </p>
        </div>

        {/* Workflow Panels */}
        <div className="scroll-reveal mb-24">
          {/* Desktop Horizontal Scroll */}
          <div className="hidden lg:block relative">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevPanel}
                className="w-14 h-14 tech-card flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
              >
                <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors" />
              </button>
              
              <div className="flex items-center space-x-3">
                {panels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentPanel(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`transition-all duration-300 ${
                      index === currentPanel 
                        ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full' 
                        : 'w-3 h-3 bg-slate-300 rounded-full hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPanel}
                className="w-14 h-14 tech-card flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
              >
                <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors" />
              </button>
            </div>

            <div className="tech-card overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentPanel * 100}%)` }}
              >
                {panels.map((panel) => (
                  <div key={panel.id} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${panel.bgGradient} p-12 text-white min-h-[400px] flex items-center relative overflow-hidden`}>
                      {/* Background tech pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-12 w-full relative z-10">
                        <div>
                          <div className={`w-20 h-20 ${panel.iconBg} rounded-3xl flex items-center justify-center mb-8 shadow-xl`}>
                            <panel.icon className={`w-10 h-10 ${panel.iconColor}`} />
                          </div>
                          <h3 className="text-4xl font-bold mb-4 font-space-grotesk">{panel.stage}</h3>
                          <h4 className="text-xl font-semibold mb-6 opacity-90">{panel.superpower}</h4>
                          <p className="text-lg opacity-80 leading-relaxed">{panel.description}</p>
                        </div>
                        <div className="flex flex-col justify-center">
                          <h5 className="text-lg font-semibold mb-6 opacity-90 font-space-grotesk">Popular Tools</h5>
                          <div className="space-y-4">
                            {panel.tools.map((tool, index) => (
                              <div key={tool} className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Zap className="w-5 h-5" />
                                </div>
                                <span className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">{tool}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Interactive Cards */}
          <div className="lg:hidden space-y-4">
            {panels.map((panel, index) => (
              <div 
                key={panel.id} 
                className={`tech-card transition-all duration-500 cursor-pointer ${
                  currentPanel === index ? 'scale-105 shadow-xl' : 'hover:scale-102'
                }`}
                onClick={() => {
                  setCurrentPanel(index);
                  setIsAutoPlaying(false);
                }}
              >
                <div className="p-6 relative overflow-hidden">
                  {/* Background gradient for active panel */}
                  {currentPanel === index && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${panel.bgGradient} opacity-10`}></div>
                  )}
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className={`w-16 h-16 ${panel.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      currentPanel === index ? 'scale-110 shadow-lg' : ''
                    }`}>
                      <panel.icon className={`w-8 h-8 ${panel.iconColor}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-slate-900 font-space-grotesk">{panel.stage}</h3>
                      <h4 className="text-lg font-semibold mb-3 text-slate-700">{panel.superpower}</h4>
                      <p className="text-slate-600 mb-4">{panel.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {panel.tools.map((tool) => (
                          <span key={tool} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <ArrowRight className={`w-5 h-5 text-slate-400 transition-all duration-300 ${
                      currentPanel === index ? 'text-blue-500 transform translate-x-1' : ''
                    }`} />
                  </div>

                  {/* Active indicator bar */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${panel.bgGradient} transition-all duration-500 ${
                    currentPanel === index ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="scroll-reveal">
          <h3 className="editorial-heading text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Specialized AI Applications
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className={`tech-card relative overflow-hidden group hover:scale-105 transition-all duration-500`}>
                <div className={`bg-gradient-to-br ${useCase.bgGradient} p-8 text-white relative z-10`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute top-4 right-4">
                      <useCase.icon className="w-32 h-32" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                        <useCase.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold font-space-grotesk">{useCase.title}</h4>
                        <p className="text-lg opacity-80">{useCase.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg opacity-90 mb-6 leading-relaxed">{useCase.description}</p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 font-space-grotesk">Key Tools:</h5>
                      <div className="flex flex-wrap gap-2">
                        {useCase.tools.map((tool) => (
                          <span key={tool} className="px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-4 font-space-grotesk">Examples:</h5>
                      <ul className="space-y-3">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm opacity-90">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperpowersSection;
