
import React, { useState } from 'react';
import WhatsAppModal from './WhatsAppModal';

interface FooterProps {
  clientName: string;
  devWhatsApp: string;
}

const Footer: React.FC<FooterProps> = ({ clientName, devWhatsApp }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full text-center p-4 bg-black/30 backdrop-blur-sm mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 w-full max-w-xs mx-auto text-xs sm:text-sm bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Quer um site incrível como esse? Fale comigo! 🚀
        </button>
        <p className="text-xs text-yellow-100/50">
          Desenvolvido por{' '}
          <a 
            href="https://www.instagram.com/inteligenciarte.ia/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold hover:text-yellow-100 transition-colors"
          >
            InteligenciArte.IA ✨
          </a>
        </p>
      </footer>
      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        clientName={clientName}
        devWhatsApp={devWhatsApp}
      />
    </>
  );
};

export default Footer;
