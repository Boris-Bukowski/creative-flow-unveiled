
const WhyNowSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal">
          <h2 className="editorial-heading text-5xl md:text-6xl mb-16 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Why Now?
          </h2>
        </div>

        <div className="scroll-reveal">
          <div className="tech-card p-10 md:p-16 relative overflow-hidden">
            {/* Tech background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <p className="editorial-body text-xl md:text-2xl leading-relaxed text-slate-700 mb-12">
                The creative landscape is undergoing its most significant transformation since the digital revolution. 
                Machine Learning isn't just another tool—it's becoming a creative partner that understands context, 
                anticipates needs, and amplifies human imagination.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg font-space-grotesk">01</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2 font-space-grotesk">From Static to Smart</h3>
                    <p className="text-slate-600">Tools that adapt to your creative process</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg font-space-grotesk">02</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2 font-space-grotesk">From Manual to Magical</h3>
                    <p className="text-slate-600">Automating repetition, amplifying creativity</p>
                  </div>
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
