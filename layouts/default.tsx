import { Link } from '@heroui/link';

import { Head } from './head';

import { Navbar } from '@/components/navbar';
import { GithubIcon, InstagramIcon, LinkedInIcon } from '@/components/icons';
import { siteConfig } from '@/config/site';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto flex-grow pt-16">{children}</main>
      <footer className="w-full bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Calebe Liasse. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-3">
            <Link
              isExternal
              className="hover:text-danger transition-colors"
              href={siteConfig.links.github}
              title="GitHub"
            >
              <GithubIcon />
              GitHub
            </Link>
            <Link
              isExternal
              className="hover:text-danger transitio-colors"
              href={siteConfig.links.instagram}
              title="Instagram"
            >
              <InstagramIcon />
              Instagram
            </Link>
            <Link
              isExternal
              className="hover:text-danger transition-colors"
              href={siteConfig.links.linkedin}
              title="LinkedIn"
            >
              <LinkedInIcon />
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
