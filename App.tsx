import React, { useState, useEffect } from 'react';
import { BIBLE_VERSES, LINKS } from './constants';
import Starfield from './components/Starfield';
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [verseIndex, setVerseIndex] = useState(0);
  const [isLogo1, setIsLogo1] = useState(true);

  useEffect(() => {
    const verseIntervalId = setInterval(() => {
      setVerseIndex((prevIndex) => (prevIndex + 1) % BIBLE_VERSES.length);
    }, 5000);
    return () => clearInterval(verseIntervalId);
  }, []);

  useEffect(() => {
    const logoIntervalId = setInterval(() => {
      setIsLogo1((prev) => !prev);
    }, 5000);
    return () => clearInterval(logoIntervalId);
  }, []);

  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = isLogo1 ? '/logo.png' : '/logo2.png';
    }
  }, [isLogo1]);

  const handleLogoClick = () => {
    setIsLogo1((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient"></div>
      <Starfield />
      
      <div className="relative z-10 w-full max-w-md mx-auto">
        <img
          src="/outubrorosa.png"
          alt="Outubro Rosa"
          className="absolute top-0 left-0 w-16 h-auto z-20 transform -translate-x-3 -translate-y-1 -rotate-12"
          aria-label="Campanha Outubro Rosa"
        />
        <div className="w-full bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl shadow-yellow-500/10 border border-yellow-500/20 overflow-hidden">
          <div className="p-6 sm:p-8 flex flex-col items-center">
            <Profile 
              currentVerse={BIBLE_VERSES[verseIndex]} 
              logoSrc={isLogo1 ? '/logo.png' : '/logo2.png'}
              onLogoClick={handleLogoClick}
            />

            <div className="w-full flex flex-col items-center gap-4 mt-8">
              {LINKS.map((link) => (
                <LinkButton key={link.href} href={link.href} text={link.text} icon={link.icon} />
              ))}
            </div>
          </div>

          <Footer clientName="Joyci Almeida" devWhatsApp="5541988710303" />
        </div>
      </div>
    </main>
  );
};

export default App;
