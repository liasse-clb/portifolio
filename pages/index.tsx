'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link } from '@heroui/link';

import ProjectsPage from './auth/projects';

import WhatsappLink, { GitHubLink, DocsLink, LinkedinLink } from '@/components/buttons';
import DefaultLayout from '@/layouts/default';
import Skills from '@/components/skills';
import Testimonial from '@/components/testimonial';
import FocusSession from '@/components/focus';
import AboutMeSection from '@/components/AboutMe';

export default function IndexPage() {

  return (
    <DefaultLayout>
      <section className="w-full flex-wrap justify-center gap-6 flex flex-row">
        <div className="bg-gray-900/15 backdrop-blur-[3px] p-4 rounded-xl mt-10 max-w-[600px] md:w-[700px] shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 flex flex-col">
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
            <p className="dark:text-gray-200 text-center text-lg md:text-xl leading-5">
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
        <div className="bg-gray-900/15 backdrop-blur-[3px] p-4 text-center rounded-xl mt-10 max-w-[520px] md:w-[700px] shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 flex flex-col">
          <Image
            alt="Minha imagem"
            src={'/Banner.webp'}
            width={200}
            height={60}
            className="w-full rounded-md"
          />
          <p className="font-extrabold text-white text-center text-2xl">O que eu faço?</p>
          <p className="text-md leading-5 text-white">
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
      <section className='w-full bg-transparent flex flex-col justify-center mt-4 md:mt-56'>
        <Testimonial />
        <FocusSession />
      </section>
      <section className="flex w-full justify-center mt-20">
        <Skills />
      </section>
      <section className="mt-10 flex w-full justify-center">
        <AboutMeSection />
      </section>
      <div className="mt-16 aling-center text-center">
        <ProjectsPage />
      </div>
      
    </DefaultLayout>
  );
}
