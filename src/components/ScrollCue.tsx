
import { ArrowDown } from 'lucide-react';

const ScrollCue = () => {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="scroll-reveal">
          <h2 className="editorial-heading text-3xl md:text-4xl mb-8 text-gray-800">
            Where does AI step in?
          </h2>
          
          <div className="flex flex-col items-center space-y-6">
            <p className="editorial-body text-lg text-muted-foreground max-w-2xl">
              The next chapter of this story is being written by machine learning algorithms that understand creativity, 
              context, and the human desire to create something meaningful.
            </p>
            
            <div className="flex flex-col items-center space-y-4 animate-float">
              <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
                <ArrowDown className="w-6 h-6 text-gray-500" />
              </div>
              <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
                Continue Reading
              </span>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient fade */}
        <div className="mt-16 h-32 bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>
    </section>
  );
};

export default ScrollCue;
