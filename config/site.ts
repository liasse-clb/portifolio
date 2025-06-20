export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Portifólio",
  description: "Meu portifólio pessoal para exibir meus trabalhos e projetos",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Contato",
      href: "/contact",
    },
    {
      label: "Trabalhos",
      href: "/auth/projects",
    },
    {
      label: "Sobre",
      href: "/about",
    },
    {
      label: "Admin",
      href: "/auth/login",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Contato",
      href: "/contact",
    },
    {
      label: "Trabalhos",
      href: "/auth/projects",
    },
    {
      label: "Sobre",
      href: "/about",
    },
    {
      label: "Admin",
      href: "/auth/login",
    },
  ],
  links: {
    github: "https://github.com/liasse-clb",
    twitter: "https://x.com/Liasse16",
    docs: "https://heroui.com",
    instagram: "https://www.instagram.com/liasse.lbs/",
    linkedin: "https://www.linkedin.com/in/calebe-liasse-71488430b/",
    whatsapp: "https://wa.me/5571988932163?text=Quero%20uma%20reuni%C3%A3o%20com%20voc%C3%AA!",
  },
};
