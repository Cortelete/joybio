import React from 'react';

interface ProfileProps {
  currentVerse: string;
  logoSrc: string;
  onLogoClick: () => void;
}

const Profile: React.FC<ProfileProps> = ({ currentVerse, logoSrc, onLogoClick }) => {
  const isLogo2 = logoSrc === '/logo2.png';

  const logoContainerClasses = `
    w-28 h-28 sm:w-32 sm:h-32 
    cursor-pointer transition-transform duration-300 hover:scale-105
    ${isLogo2 
      ? '' 
      : 'rounded-full overflow-hidden border-2 border-yellow-500/50 p-1 shadow-lg bg-black/50'
    }
  `;

  const imageClasses = `
    w-full h-full object-cover animate-fade-in
    ${isLogo2 ? '' : 'rounded-full'}
  `;

  return (
    <>
      <div 
        className={logoContainerClasses.trim().replace(/\s+/g, ' ')}
        onClick={onLogoClick}
        role="button"
        aria-label="Trocar logo"
      >
        <img 
          key={logoSrc}
          src={logoSrc} 
          alt="Joyci Almeida Logo"
          className={imageClasses.trim().replace(/\s+/g, ' ')}
        />
      </div>
      <h1 className="mt-4 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent animate-gradient font-elegant tracking-wider">
        Joyci Almeida
      </h1>
      <div className="mt-3 h-12 flex items-center justify-center">
        <p 
          key={currentVerse} 
          className="text-sm sm:text-base text-center text-yellow-100/80 animate-fade-in px-4 font-light"
        >
          "{currentVerse}"
        </p>
      </div>
    </>
  );
};

const fadeInAnimation = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 0.8s ease-in-out;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = fadeInAnimation;
document.head.appendChild(styleSheet);


export default Profile;