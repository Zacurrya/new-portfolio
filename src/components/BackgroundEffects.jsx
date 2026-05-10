import { useEffect, useRef } from "react";
import useScene from '@hooks/useScene';

const BackgroundEffects = () => {
  const blurRef = useRef();
  const { activeScene } = useScene();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blurRef.current) return;
      const gradient = `radial-gradient(circle 300px at ${e.clientX}px ${e.clientY}px, transparent 0%, black 100%)`;
      blurRef.current.style.maskImage = gradient;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); 

  return (
    <>
      {/* -- MAIN SCREEN EFFECTS -- */}
      {activeScene === 'main' && (
        <>
          {/* -- blur overlay -- */}
          <div
            ref={blurRef}
            className="fixed inset-0 -z-10"
            style={{ backdropFilter: 'blur(4px)' }}
          />

          {/* neon light overlay */}
          {activeScene === 'main' && (
            <div className="fixed inset-0 neon-overlay -z-10 pointer-events-none" />
          )}
        </>
      )}
    </>
  );
};

export default BackgroundEffects;