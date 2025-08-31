import { FaArchive, FaHome, FaInfo, FaPhone, FaUser } from 'react-icons/fa';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Portifólio',
  description: 'Criação de sites e aplicativos web responsivos com foco em experiência do usuário. Veja meus projetos de desenvolvimento web e mobile, otimização de SEO da sua página, criação de páginas de alta conversão e desenvolvimento de aplicações web e mobile para empresas e auutonômos',
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
