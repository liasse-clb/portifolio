import { FaArchive, FaHome, FaInfo, FaPhone, FaUser } from 'react-icons/fa';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Portifólio',
  description: 'Meu portifólio pessoal para exibir meus trabalhos e projetos',
  navItems: [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Contato',
      href: '/contact',
    },
    {
      label: 'Trabalhos',
      href: '/auth/projects',
    },
    {
      label: 'Sobre',
      href: '/about',
    },
  /*{
      label: 'Admin',
      href: '/auth/login',
    },*/
  ],
  navMenuItems: [
    {
      label: 'Inicio',
      href: '/',
      icon: FaHome,
    },
    {
      label: 'Contato',
      href: '/contact',
      icon: FaPhone,
    },
    {
      label: 'Trabalhos',
      href: '/auth/projects',
      icon: FaArchive,
    },
    {
      label: 'Sobre',
      href: '/about',
      icon: FaInfo,
    },
    /*{
      label: 'Admin',
      href: '/auth/login',
      icon: FaUser,
    },*/
  ],
  links: {
    github: 'https://github.com/liasse-clb',
    docs: 'https://heroui.com',
    instagram: 'https://www.instagram.com/liasse.lbs/',
    linkedin: 'https://www.linkedin.com/in/calebe-liasse-71488430b/',
    whatsapp: 'https://wa.me/5571988932163?text=Quero%20uma%20reuni%C3%A3o%20com%20voc%C3%AA!',
  },
};
