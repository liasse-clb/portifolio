import DefaultLayout from '@/layouts/default';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-6 py-10 px-6 md:px-0">
        <div className="max-w-xl bg-white dark:bg-neutral-900 shadow-lg rounded-lg">
          <div className="w-full">
            <Image
              alt={'Foto da minha pessoa(dono do portifólio)'}
              className="self-center mb-4 w-full shadow-md rounded-lg"
              height={150}
              src={'/Calebe2.webp'}
              width={150}
            />
          </div>
          <p className=" text-gray-700 dark:text-gray-100 text-center p-4 leading-none">
            Sou um profissional em desenolvimento, mas estou dando passos largos para a minha
            liberdade e realização profissional, tendo o objetivo de criar algo que seja realmente
            útil, afinal não quero criar sistemas, sites e apps que sejam inúteis ou pouco úteis,
            mas quero que meus projetos e que todo o código que venho construindo sejam úteis e que
            resolvam problemas reais. Quero a cada dia ter uma apredizado que me edifique e que
            possa me transformar em alguém responsável e profissional. Não me preocupo com o que os
            outros estão fazendo, apenas em ser melhor do que sou agora, apenas quero seguir meu
            caminho sem ligar se os outros possuem mais do que eu ou se são melhores, apenas quero
            ser autentico e real.
          </p>
          <p className=" text-gray-700 dark:text-gray-100 text-center p-4 leading-none">
            Tenho sonho, propósito e visão, já possuo tudo para fazer dar certo. Comecei na
            programação front-end apenas como uma brincadeira, comecei a brincar com HTML e CSS,
            depois me interessei em ir além, pois vi potencial e me identifiquei muito. <br />
            Hoje, consigo integrar APIs, bancos de dados (Bancos com acesso a servidor ou banco
            online como Supabase), implemento lógica de programação, mas acima de tudo eu firmei o
            meu coração nisto, por esses motivos venho me dedicando dia após dia e noite após noite,
            com o objetivo de melhorar ao longo do tempo. Somente desejo aproveitar o máximo de
            minha jornada e se der tudo errado irei recomeçar tudo de novo com novo plano ou
            estratégia, ou até mesmo nova direção, mas de forma alguma desistir
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
