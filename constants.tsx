
import React from 'react';
import type { Link } from './types';

// Icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);

const BookMarkedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><path d="m9 9.5 2 2 4-4"></path></svg>
);

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.94-2.03-4.35-1.72-6.72.31-2.4 1.52-4.63 3.42-6.12 2.01-1.56 4.6-2.22 7.12-1.88.07 1.54.02 3.08.01 4.63-.69-.1-1.39-.12-2.09-.07-.52.04-.98.24-1.4.55-.57.43-1.02 1.05-1.25 1.75-.25.78-.25 1.58-.02 2.34.22.72.63 1.39 1.22 1.88.81.65 1.83.99 2.89.92.93-.06 1.83-.44 2.53-1.09.87-.82 1.34-1.9 1.34-2.98.01-1.49.01-2.98.01-4.48z"></path></svg>
);

export const BIBLE_VERSES: string[] = [
  "O Senhor é o meu pastor; nada me faltará. - Salmos 23:1",
  "Tudo posso naquele que me fortalece. - Filipenses 4:13",
  "O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos. - Provérbios 16:9",
  "Porque para Deus nada é impossível. - Lucas 1:37",
  "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. - Provérbios 3:5",
  "O Senhor é a minha luz e a minha salvação; a quem temerei? - Salmos 27:1",
  "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia. - Salmos 46:1",
  "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor. - Jeremias 29:11",
  "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós. - 1 Pedro 5:7",
  "O choro pode durar uma noite, mas a alegria vem pela manhã. - Salmos 30:5",
  "Esforçai-vos, e ele fortalecerá o vosso coração, vós todos que esperais no Senhor. - Salmos 31:24",
  "Mas os que esperam no Senhor renovarão as forças. - Isaías 40:31",
  "Porque a palavra de Deus é viva, e eficaz. - Hebreus 4:12",
  "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará. - Salmos 91:1",
  "Em todo tempo ama o amigo; e na angústia nasce o irmão. - Provérbios 17:17",
  "O temor do Senhor é o princípio da sabedoria. - Provérbios 9:10",
  "Porque onde estiver o vosso tesouro, aí estará também o vosso coração. - Mateus 6:21",
  "E conhecereis a verdade, e a verdade vos libertará. - João 8:32",
  "O amor é paciente, o amor é bondoso. - 1 Coríntios 13:4",
  "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus. - Romanos 8:28"
];

export const LINKS: Link[] = [
  {
    href: "https://www.instagram.com/luxury.joycialmeida/",
    text: "Instagram Luxury",
    icon: <InstagramIcon />,
  },
  {
    href: "https://luxbio.vercel.app/",
    text: "Luxury Studio de Beleza",
    icon: <GlobeIcon />,
  },
  {
    href: "https://luxacademy.vercel.app/",
    text: "Adquira o Curso de Lash",
    icon: <BookOpenIcon />,
  },
  {
    href: "https://catalogolux.vercel.app/",
    text: "Catálogo Luxury",
    icon: <BookMarkedIcon />,
  },
  {
    href: "https://www.tiktok.com/@joydealmeida",
    text: "TikTok",
    icon: <TikTokIcon />,
  }
];
