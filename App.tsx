
import React, { useState, useEffect } from 'react';
import { BIBLE_VERSES, LINKS } from './constants';
import Starfield from './components/Starfield';
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [verseIndex, setVerseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVerseIndex((prevIndex) => (prevIndex + 1) % BIBLE_VERSES.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient"></div>
      <Starfield />
      
      <div className="relative z-10 w-full max-w-md mx-auto bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl shadow-yellow-500/10 border border-yellow-500/20 overflow-hidden">
        <div className="p-6 sm:p-8 flex flex-col items-center">
          <Profile currentVerse={BIBLE_VERSES[verseIndex]} />

          <div className="w-full flex flex-col items-center gap-4 mt-8">
            {LINKS.map((link) => (
              <LinkButton key={link.href} href={link.href} text={link.text} icon={link.icon} />
            ))}
          </div>
        </div>

        <Footer clientName="Joyci Almeida" devWhatsApp="5541988710303" />
      </div>
    </main>
  );
};

export default App;
