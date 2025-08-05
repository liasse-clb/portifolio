import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import { WorkIng } from './buttons';

export default function AboutMeSection() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="py-4 m-3 text-white">
      <div
        className="max-w-2xl bg-gray-900/30 backdrop-blur-[3px] shadow-lg rounded-xl p-6 text-center"
        data-aos="fade-up"
      >
        <Image
          src={'/perfil.webp'}
          width={280}
          height={280}
          alt={'foto de perfl'}
          className="rounded-full border-2 max-w-3xl m-auto border-white"
        />

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Prazer, eu sou o Calebe</h2>

        <p className="text-sm md:text-lg text-white leading-5">
          Comecei aqui por hobbie, mas o que começõu como brincadeira hoje é a minha oportunidade de mudar de vida. Não só a minha, mas a de quem me confia um projeto.
          Vi no código uma forma de criar coisas que resolvem, que transformam e que conectam pessoas com seus objetivos.
        </p>

        <p className="text-sm md:text-lg text-white mt-4 leading-5">
          Hoje, mais do que escrever código, eu escuto, entendo e construo. Cada projeto é uma troca real.
          Curto trabalhar com quem valoriza clareza, verdade e resultado, sem enrolação, com entrega.
        </p>

        <p className="text-sm md:text-lg text-white mt-4 leading-5 font-medium">
          Se você quer alguém que realmente se importe com o que está construindo e não só com prazos e pixels
          acho que a gente pode trabalhar muito bem juntos.
        </p>

        <p className="text-lg font-bold text-white mt-6 leading-5">
          Iai, Let&apos;s Work Together ?
        </p>
        <WorkIng />
      </div>
    </section>
  );
}
