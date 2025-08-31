
import React from 'react';

interface LinkButtonProps {
  href: string;
  text: string;
  icon: JSX.Element;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full bg-black/30 border border-yellow-500/30 text-yellow-100 rounded-lg shadow-md hover:shadow-yellow-500/20 hover:shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="flex items-center justify-start p-3 sm:p-4">
        <div className="w-8 text-yellow-400 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <span className="flex-grow text-center text-sm sm:text-base font-semibold tracking-wide pr-8">
          {text}
        </span>
      </div>
    </a>
  );
};

export default LinkButton;
