
import React from 'react';

interface ProfileProps {
  currentVerse: string;
}

const Profile: React.FC<ProfileProps> = ({ currentVerse }) => {
  return (
    <>
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-yellow-500/50 p-1 shadow-lg bg-black/50">
        <img 
          src="/logo.png" 
          alt="Joyci Almeida Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h1 className="mt-4 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent animate-gradient font-elegant tracking-wider">
        Joyci Almeida
      </h1>
      <div className="mt-3 h-12 flex items-center justify-center">
        <p 
          key={currentVerse} 
          className="text-sm sm:text-base text-center text-yellow-100/80 animate-fade-in px-4 font-light"
          style={{ animation: 'fade-in 0.8s ease-in-out' }}
        >
          "{currentVerse}"
        </p>
      </div>
    </>
  );
};

// Add keyframes for fade-in animation to index.html or a global style tag
// For simplicity, we can add it here as an example but it should be in index.html
const fadeInAnimation = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.8s ease-in-out;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = fadeInAnimation;
document.head.appendChild(styleSheet);


export default Profile;
