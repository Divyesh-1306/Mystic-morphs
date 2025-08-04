import { useState } from 'react';
import MagicalLoadingScreen from '@/components/MagicalLoadingScreen';
import MysticMorphsPage from '@/components/MysticMorphsPage';
import MagicalParticles from '@/components/MagicalParticles';
import CursorTrail from '@/components/CursorTrail';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading ? (
        <MagicalLoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        
          </div>
          <MysticMorphsPage />
          <MagicalParticles />
          <CursorTrail />
        </>
      )}
    </div>
  );
};

export default Index;
