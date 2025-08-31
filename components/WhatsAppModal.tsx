
import React, { useState, useEffect } from 'react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientName: string;
  devWhatsApp: string;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, clientName, devWhatsApp }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      const message = `Olá, vi o link da ${clientName} e quero um site igual! Meu nome é ${userName}.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${devWhatsApp}&text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      onClose();
      setUserName('');
    }
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 border border-yellow-500/50 rounded-xl shadow-2xl p-6 w-full max-w-sm text-white relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-up 0.3s ease-out' }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent animate-gradient font-elegant">
          Fale com o Desenvolvedor
        </h2>
        <p className="text-center text-sm text-gray-300 mb-6">
          Para criar sua mensagem personalizada, por favor, insira seu nome abaixo.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Seu nome"
            required
            className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Enviar Mensagem 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

// Keyframes for modal animation
const modalAnimation = `
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.3s ease-out;
  }
`;

const modalStyleSheet = document.createElement("style");
modalStyleSheet.innerText = modalAnimation;
document.head.appendChild(modalStyleSheet);

export default WhatsAppModal;
