
const WhyNowSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal">
          <h2 className="editorial-heading text-4xl md:text-5xl mb-12 text-center text-slate-900">
            Why Now?
          </h2>
        </div>

        <div className="scroll-reveal">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <p className="editorial-body text-lg md:text-xl leading-relaxed text-slate-700 mb-8">
              The creative landscape is undergoing its most significant transformation since the digital revolution. 
              Machine Learning isn't just another tool—it's becoming a creative partner that understands context, 
              anticipates needs, and amplifies human imagination. Today's design students are witnessing the evolution 
              from static software to intelligent systems that learn, adapt, and inspire.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ai-blue-400 to-ai-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-semibold font-space-grotesk">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 font-space-grotesk">From Static to Smart</h3>
                  <p className="text-slate-600 text-sm">Tools that adapt to your creative process</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-ai-purple-400 to-ai-purple-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-semibold font-space-grotesk">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 font-space-grotesk">From Manual to Magical</h3>
                  <p className="text-slate-600 text-sm">Automating repetition, amplifying creativity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
