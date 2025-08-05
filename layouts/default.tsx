import { Link } from '@heroui/link';

import { Head } from './head';

import { Navbar } from '@/components/navbar';
import { WhatsappIcon, InstagramIcon, LinkedInIcon, GithubIcon } from '@/components/icons';
import { siteConfig } from '@/config/site';
import Particles from '@/components/Particles';
import Image from 'next/image';
import { button as buttonStyles } from '@heroui/theme';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={500}
          particleSpread={3}
          speed={0.07}
          particleBaseSize={30}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Head />
      <Navbar />
      <main>{children}</main>
      <footer className="w-full bg-black/80 backdrop-blur-sm text-gray-300 mt-16 border-t border-gray-700 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-2 py-8 flex flex-row flex-wrap gap-10 md:gap-20 justify-center">
          {/* Seção Sobre */}
          <Image
            src={'/perfil.webp'}
            width={150}
            height={150}
            alt={'foto de perfl'}
            className="rounded-full border-2 h-40 w-40 border-white md:m-0 m-auto"
          />
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Sobre</h3>
            <p className="text-sm mt-5 leading-relaxed text-gray-400 w-[30ch]">
              Sou Calebe Liasse, desenvolvedor Web & Mobile, apaixonado por tecnologia e soluções
              criativas. Transformo ideias em produtos digitais eficientes e modernos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/auth/projects" className="text-white">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white">
                  Sobre Mim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Conecte-se</h3>
            <section className="m-auto   grid grid-cols-2 gap-4">
              <Link
                isExternal
                className={`${buttonStyles({
                  color: 'success',
                  radius: 'full',
                  variant: 'shadow',
                })} !text-white`}
                href={siteConfig.links.whatsapp}
              >
                <WhatsappIcon /> Whatsapp
              </Link>
              <Link
                isExternal
                className={`${buttonStyles({
                  color: 'danger',
                  radius: 'full',
                  variant: 'shadow',
                })} !text-white`}
                href={siteConfig.links.instagram}
              >
                <InstagramIcon /> Instagram
              </Link>
              <Link
                isExternal
                className={`${buttonStyles({
                  color: 'primary',
                  radius: 'full',
                  variant: 'shadow',
                })} !text-white`}
                href={siteConfig.links.linkedin}
              >
                <LinkedInIcon /> LinkedIn
              </Link>
              <Link
                isExternal
                className={`${buttonStyles({
                  radius: 'full',
                  variant: 'shadow',
                })} !text-black bg-white`}
                href={siteConfig.links.github}
              >
                <GithubIcon /> GitHub
              </Link>
            </section>
          </div>
        </div>

        <div className="w-full h-px bg-gray-700" />

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-white">Calebe Liasse</span>. Todos os direitos
            reservados.
          </p>
          <p className="mt-3 sm:mt-0">
            Feito com <span className="text-red-500">❤</span> usando{' '}
            <span className="font-semibold text-white">Next.js + Supabase</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
