import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SpellCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'scroll' | 'parchment' | 'floating' | 'glitch';
}

const SpellCard = ({ children, className, delay = 0, variant = 'scroll' }: SpellCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getVariantClasses = () => {
    switch (variant) {
      case 'parchment':
        return 'bg-gradient-to-br from-amber-50/10 to-amber-100/5 border border-primary/30 shadow-magical';
      case 'floating':
        return 'bg-card/30 backdrop-blur-md border border-primary/20 shadow-glow animate-float';
      case 'glitch':
        return 'bg-card/20 backdrop-blur-sm border border-magical-glow/40 shadow-magical';
      default:
        return 'bg-card/40 backdrop-blur-sm border border-primary/30 shadow-magical';
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'rounded-xl p-8 transition-all duration-700 hover:scale-105 hover:shadow-glow group',
        getVariantClasses(),
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      <div className="relative">
        {children}
        
        {/* Magical sparkle effect on hover */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-magical-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default SpellCard;