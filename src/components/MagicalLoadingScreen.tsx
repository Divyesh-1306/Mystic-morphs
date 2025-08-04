import { useState, useEffect } from 'react';
import magicalDoor from '@/assets/magical-door.jpg';
import castleBackground from '@/assets/castle-background.jpg';

interface MagicalLoadingScreenProps {
  onComplete: () => void;
}

const MagicalLoadingScreen = ({ onComplete }: MagicalLoadingScreenProps) => {
  const [phase, setPhase] = useState<'loading' | 'opening' | 'zooming' | 'complete'>('loading');
  const [doorAnimation, setDoorAnimation] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase('opening');
      setDoorAnimation(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setPhase('zooming');
    }, 4500);

    const timer3 = setTimeout(() => {
      setPhase('complete');
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Castle Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${castleBackground})` }}
      >
        <div className="absolute inset-0 bg-magical-deep/60"></div>
      </div>

      {/* Fog Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-magical-deep via-transparent to-magical-deep opacity-70"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-magical-glow rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Door Container */}
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        <div className="relative w-96 h-[600px] transform-gpu">
          
          {/* Magical Rings */}
          {phase !== 'loading' && (
            <>
              <div className="absolute inset-0 border-4 border-magical-glow rounded-full animate-spell-ring"></div>
              <div className="absolute inset-0 border-2 border-primary rounded-full animate-spell-ring" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 border-1 border-magical-light rounded-full animate-spell-ring" style={{ animationDelay: '1s' }}></div>
            </>
          )}

          {/* Door Halves */}
          <div className="relative w-full h-full">
            {/* Left Door Half */}
            <div 
              className={`absolute top-0 left-0 w-1/2 h-full bg-cover bg-left border-r-2 border-magical-glow/30 origin-left transition-transform duration-2000 ease-in-out ${
                doorAnimation ? 'animate-door-left' : ''
              }`}
              style={{ 
                backgroundImage: `url(${magicalDoor})`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-door opacity-50"></div>
            </div>

            {/* Right Door Half */}
            <div 
              className={`absolute top-0 right-0 w-1/2 h-full bg-cover bg-right border-l-2 border-magical-glow/30 origin-right transition-transform duration-2000 ease-in-out ${
                doorAnimation ? 'animate-door-right' : ''
              }`}
              style={{ 
                backgroundImage: `url(${magicalDoor})`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-door opacity-50"></div>
            </div>

            {/* Magical Glow Behind Door */}
            {phase === 'opening' && (
              <div className="absolute inset-0 bg-gradient-to-r from-magical-glow via-primary to-magical-glow opacity-60 animate-fade-in-up">
                <div className="absolute inset-0 bg-magical-glow/20 animate-magical-pulse"></div>
              </div>
            )}
          </div>

          {/* Loading Text */}
          {phase === 'loading' && (
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
              <p className="text-primary font-magical text-xl tracking-wider animate-magical-pulse">
                Summoning Magic...
              </p>
            </div>
          )}

          {/* Zoom Effect */}
          {phase === 'zooming' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-magical-glow/50 to-magical-glow animate-zoom-through"></div>
          )}
        </div>
      </div>

      {/* Additional Magical Effects */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-magical-deep to-transparent"></div>
      
      {/* Torches Effect */}
      <div className="absolute top-1/4 left-10 w-4 h-12 bg-gradient-to-t from-orange-600 to-yellow-400 rounded-full animate-pulse opacity-80"></div>
      <div className="absolute top-1/3 right-10 w-4 h-12 bg-gradient-to-t from-orange-600 to-yellow-400 rounded-full animate-pulse opacity-80" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 left-16 w-4 h-12 bg-gradient-to-t from-orange-600 to-yellow-400 rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-16 w-4 h-12 bg-gradient-to-t from-orange-600 to-yellow-400 rounded-full animate-pulse opacity-80" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default MagicalLoadingScreen;