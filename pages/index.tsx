'use client';
import Image from 'next/image';

import ProjectsPage from './auth/projects';

import WhatsappLink, { GitHubLink, DocsLink, LinkedinLink, InContact } from '@/components/buttons';
import DefaultLayout from '@/layouts/default';
import Skills from '@/components/skills';
import Testimonial from '@/components/testimonial';
import FocusSession from '@/components/focus';
import AboutMeSection from '@/components/AboutMe';
import HowToWork from '@/components/HowToWork';

export default function IndexPage() {

  return (
    <DefaultLayout>
      <section className="w-full flex-wrap justify-center gap-6 flex flex-row">
        <div className="bg-gray-900/35 backdrop-blur-[3px] p-6 rounded-xl mt-10 max-w-[600px] w-[700px] m-2 shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 flex flex-col">
          <Image
            alt="Foto da minha pessoa(dono do portifólio)"
            className="rounded-full border-white border-medium w-4/5 md:w-2/4 self-center mb-4 shadow-md"
            height={150}
            src="/Calebe.webp"
            width={150}
          />
          <p className=" dark:text-gray-100 text-center text-xl md:text-2xl font-bold">
            Calebe Liasse - Dev Web & Mobile
          </p>
          <br />
          <div>
            <p className="dark:text-gray-200 text-center text-md md:text-xl leading-5">
              Desenvolvedor web e mobile focado em transformar ideias em produtos reais. <br />
              Crio sites e apps personalizados para autônomos e pequenas empresas que querem atrair mais
              clientes online. Me chame agora mesmo para uma reunião! 👇
            </p>
          </div>
          <div className="flex gap-3 mt-3 flex-wrap justify-center">
            <WhatsappLink />
            <GitHubLink />
            <DocsLink />
          </div>
        </div>
        <div className="bg-gray-900/35 backdrop-blur-[3px] p-4 text-center m-2 rounded-xl mt-10 max-w-[600px] shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 flex flex-col">
          <Image
            alt="Minha imagem"
            src={'/Banner.webp'}
            width={200}
            height={60}
            className="w-full rounded-md"
          />
          <p className="font-extrabold text-white text-center text-2xl">O que eu faço?</p>
          <p className="md:text-md text-sm leading-5 text-white">
            Desenvolvimento web e mobile com foco em conversão, design e performance.
            Eu me empenho para entregar projetos bonitos e úteis, mas principalmente em
            trazer resultado real e uma solução para o seu problema ou sua dor.
            Eu crio e integro sistemas, trabalho com bancos de dados, experiência de
            usuário, estou preparado para atender você e os seus clientes.<br />
            Entre em contato comigo pelo <span className='text-blue-500 font-bold'>Linkedin</span> ou <span className='font-bold text-green-400'>Whatsapp</span>
          </p>
          <div className='flex gap-3 mt-2 flex-wrap justify-center'>
            <WhatsappLink />
            <LinkedinLink />
          </div>

        </div>
      </section>
      <section className='w-full flex flex-col justify-center mt-4 md:mt-32 lg:mt-56'>
        <Testimonial />
      </section>
      {/*<section className="mt-10 flex w-full justify-center">
        <FocusSession />
      </section>*/}
      <section>
        <div className="flex flex-col justify-center mt-6 p-4">
          <p className="text-base md:text-2xl font-light text-white leading-tight text-center">Precisa agora de uma solução que resolva a parada ? <br />Entre em contato comigo!</p>
          <InContact />
        </div>
      </section>
      <section className="mt-10 flex w-full justify-center">
        <AboutMeSection />
      </section>
      <section className="mt-6 flex w-full justify-center">
        <HowToWork />
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
