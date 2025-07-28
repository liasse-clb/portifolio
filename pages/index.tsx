'use client';
import { button as buttonStyles } from '@heroui/theme';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link } from '@heroui/link';

import ProjectsPage from './auth/projects';

import { FileIcon, WhatsappIcon } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { GithubIcon } from '@/components/icons';
import DefaultLayout from '@/layouts/default';
import { getLatestProject } from '@/lib/portifolio';
import Skills from '@/components/skills';

export default function IndexPage() {
  const [latestProject, setLatestProject] = useState<any>(null);

  useEffect(() => {
    async function fetchLatest() {
      const data = await getLatestProject();

      setLatestProject(data);
    }
    fetchLatest();
  }, []);

  return (
    <DefaultLayout>
      <section className="w-full flex-wrap justify-center gap-6 flex flex-row">
        <div className="bg-gray-900/70 p-4 rounded-xl mt-10 w-72 md:w-[500px] shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 flex flex-col">
          <Image
            alt="Foto da minha pessoa(dono do portifólio)"
            className="rounded-full border-white border-medium w-4/5 md:w-2/4 self-center mb-4 shadow-md"
            height={150}
            src="/Calebe.webp"
            width={150}
          />
          <p className=" dark:text-gray-100 text-center text-xl font-semibold">
            Calebe Liasse - Dev Web & Mobile
          </p>
          <br />
          <div>
            <p className="dark:text-gray-200 text-center text-lg leading-5">
              Sou totalmente comprometido com o desenvolvimento de sites e aplicativos profissionais
              totalmente voltados para resolver os seus problemas. Me chame agora mesmo para uma
              reunião! 👇
            </p>
          </div>
          <div className="flex gap-3 mt-3 flex-wrap justify-center">
            <Link
              isExternal
              className={`${buttonStyles({
                color: 'success',
                radius: 'full',
                variant: 'shadow',
              })} !text-white text-lg`}
              href={siteConfig.links.whatsapp}
            >
              <WhatsappIcon /> Whatsapp
            </Link>
            <Link
              isExternal
              className={`${buttonStyles({ variant: 'bordered', radius: 'full' })}
              href={siteConfig.links.github} text-lg text-white`}
            >
              <GithubIcon size={25} />
              GitHub
            </Link>
            <Link
              isExternal
              className={`${buttonStyles({ color: 'primary', variant: 'shadow', radius: 'full' })} text-white text-center`}
              href="/auth/projects"
            >
              <FileIcon />
              Veja Meus Projetos
            </Link>
          </div>
        </div>
        <div className="bg-gray-900/70 p-4 rounded-xl mt-10 w-72 md:w-[500px] shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 flex flex-col items-start">
          <Image
            alt="Minha imagem"
            src={'/Banner.webp'}
            width={200}
            height={60}
            className="w-full rounded-md"
          />
          <p className="text-md leading-5 dark:text-white">
            Tenho o sonho de ser um Dev ativo e cheio de experiência, por isso fiz este portifólio
            para ver o meu progresso ao longo do tempo. Irei publicar cada vez mais trabalhos aqui e
            acompanhar toda a minha caminhada como desenvolvedor. Este website é o registro da minha
            carreira e quero usa-lo para demonstrar o meu valor.
          </p>
        </div>
      </section>
      <section className="flex w-full justify-center mt-20">
        <Skills />
      </section>
      <div className="mt-16 aling-center text-center">
        <ProjectsPage />
      </div>
    </DefaultLayout>
  );
}
