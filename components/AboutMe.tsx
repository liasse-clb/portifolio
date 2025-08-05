import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { WorkIng } from './buttons';

export default function AboutMeSection() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="py-16 px-4 text-white">
      <div
        className="max-w-2xl bg-gray-900/30 backdrop-blur-[20px] shadow-lg rounded-xl p-4 text-center"
        data-aos="fade-up"
      >
        <FaUserTie className="text-primary-500 text-4xl mb-4 mx-auto" />

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Prazer, Calebe.</h2>

        <p className="text-md md:text-lg  text-white leading-relaxed">
          Sou desenvolvedor web e mobile focado em criar soluções que geram impacto real.  
          Acredito que um bom projeto não nasce apenas de código mas de escuta, visão de negócio e uma entrega feita com clareza, estratégia e propósito.
        </p>

        <p className="text-md md:text-lg text-white mt-4 leading-relaxed">
          Trabalho com tecnologias modernas, comunicação transparente e foco total no seu resultado.  
          Se você busca alguém confiável, direto e comprometido, estou pronto pra fazer parte da sua jornada.
        </p>
        <p className="text-lg font-bold text-white mt-4 leading-relaxed">
            Iai? Let&apos; Work Together ?
        </p>
        <WorkIng />
      </div>
    </section>
  );
}
