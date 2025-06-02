
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, Palette, Cog, MessageCircle, RotateCcw, Brain, Sparkles, Zap, Building2, Play } from 'lucide-react';

const SuperpowersSection = () => {
  const [currentPanel, setCurrentPanel] = useState(0);

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
  };

  const prevPanel = () => {
    setCurrentPanel((prev) => (prev - 1 + panels.length) % panels.length);
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="editorial-heading text-5xl md:text-6xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Superpowers for the Creative Mind
            </h2>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="editorial-body text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg"
                disabled={currentPanel === 0}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex space-x-2">
                {panels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPanel(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentPanel ? 'bg-gray-800 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPanel}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg"
                disabled={currentPanel === panels.length - 1}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPanel * 100}%)` }}
              >
                {panels.map((panel) => (
                  <div key={panel.id} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${panel.bgGradient} p-12 text-white min-h-[400px] flex items-center`}>
                      <div className="grid md:grid-cols-2 gap-12 w-full">
                        <div>
                          <div className={`w-16 h-16 ${panel.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                            <panel.icon className={`w-8 h-8 ${panel.iconColor}`} />
                          </div>
                          <h3 className="text-4xl font-bold mb-4">{panel.stage}</h3>
                          <h4 className="text-xl font-semibold mb-6 opacity-90">{panel.superpower}</h4>
                          <p className="text-lg opacity-80 leading-relaxed">{panel.description}</p>
                        </div>
                        <div className="flex flex-col justify-center">
                          <h5 className="text-lg font-semibold mb-4 opacity-90">Popular Tools</h5>
                          <div className="space-y-3">
                            {panel.tools.map((tool, index) => (
                              <div key={tool} className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                  <Zap className="w-4 h-4" />
                                </div>
                                <span className="text-lg font-medium">{tool}</span>
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

          {/* Mobile Stack */}
          <div className="lg:hidden space-y-6">
            {panels.map((panel) => (
              <div key={panel.id} className={`bg-gradient-to-br ${panel.bgGradient} p-8 text-white rounded-2xl`}>
                <div className={`w-12 h-12 ${panel.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <panel.icon className={`w-6 h-6 ${panel.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{panel.stage}</h3>
                <h4 className="text-lg font-semibold mb-4 opacity-90">{panel.superpower}</h4>
                <p className="opacity-80 mb-4">{panel.description}</p>
                <div className="flex flex-wrap gap-2">
                  {panel.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="scroll-reveal">
          <h3 className="editorial-heading text-3xl md:text-4xl text-center mb-12 text-gray-800">
            Specialized AI Applications
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className={`bg-gradient-to-br ${useCase.bgGradient} p-8 rounded-2xl text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4">
                    <useCase.icon className="w-32 h-32" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <useCase.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{useCase.title}</h4>
                      <p className="text-lg opacity-80">{useCase.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">{useCase.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3">Key Tools:</h5>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3">Examples:</h5>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm opacity-90">{example}</span>
                        </li>
                      ))}
                    </ul>
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
