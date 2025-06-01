
const WhyNowSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal">
          <h2 className="editorial-heading text-4xl md:text-5xl mb-12 text-center">
            Why Now?
          </h2>
        </div>

        <div className="scroll-reveal">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
            <p className="editorial-body text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
              The creative landscape is undergoing its most significant transformation since the digital revolution. 
              Machine Learning isn't just another tool—it's becoming a creative partner that understands context, 
              anticipates needs, and amplifies human imagination. Today's design students are witnessing the evolution 
              from static software to intelligent systems that learn, adapt, and inspire.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-semibold">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">From Static to Smart</h3>
                  <p className="text-gray-600 text-sm">Tools that adapt to your creative process</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-semibold">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">From Manual to Magical</h3>
                  <p className="text-gray-600 text-sm">Automating repetition, amplifying creativity</p>
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
