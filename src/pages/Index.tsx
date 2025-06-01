
import { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import WhyNowSection from '../components/WhyNowSection';
import CreativeJourneySection from '../components/CreativeJourneySection';
import SuperpowersSection from '../components/SuperpowersSection';
import ScrollCue from '../components/ScrollCue';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize scroll reveal animation
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyNowSection />
      <CreativeJourneySection />
      <SuperpowersSection />
      <ScrollCue />
    </div>
  );
};

export default Index;
