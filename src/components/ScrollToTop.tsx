import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { lenisInstance } from './SmoothScrollProvider';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = lenisInstance ? lenisInstance.scroll : window.scrollY;
      setIsVisible(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 bg-white shadow-card-hover rounded-full hover:shadow-glass hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 text-navy-800" />
    </button>
  );
}
