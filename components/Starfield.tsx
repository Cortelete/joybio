
import React, { useState, useEffect } from 'react';

interface Star {
  id: number;
  style: React.CSSProperties;
}

const Starfield: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = 50;
      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.5 + 0.2;
        newStars.push({
          id: i,
          style: {
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 8px #fff, 0 0 12px #fff, 0 0 16px #ffd700',
            animationDelay: `${Math.random() * 5}s`,
            // @ts-ignore
            '--twinkle-opacity': opacity,
          },
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {stars.map((star) => (
        <div key={star.id} style={star.style} className="animate-twinkle" />
      ))}
    </div>
  );
};

export default Starfield;
