import { title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-6 py-10 px-6 md:px-0">
        <div className="max-w-2xl bg-white dark:bg-neutral-900 shadow-lg p-6 rounded-lg">
          <h1 className={title()}>Sobre Mim</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Me chamo <strong>Calebe</strong> e atuo como desenvolvedor web e mobile, com experiência
            em criação de soluções digitais eficientes, acessíveis e com foco em performance. Também
            trabalho com estratégias de <strong>trade</strong> e sou apaixonado por tecnologia,
            design e inovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full mt-8">
          <div className="bg-white dark:bg-neutral-900 shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">🛠 Tecnologias</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Next.js, React, React Native</li>
              <li>Node.js, Firebase, Supabase</li>
              <li>MySQL, PostgreSQL</li>
              <li>TailwindCSS, HeroUI, Styled Components</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-900 shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">🚀 Objetivo</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Meu objetivo é entregar projetos de alto impacto que gerem valor real para empresas e
              pessoas. Gosto de unir tecnologia com estratégia para criar experiências digitais que
              funcionem bem e tenham propósito.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-900 shadow-lg p-6 rounded-lg md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">📈 Um pouco mais sobre mim</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Comecei na programação por hobbie e acabou se tornando a minha atividade, hoje eu
              busco me aprofundar nas tecnologias que estudo, sempre buscando evoluir e aprender com
              cada projeto. Sou disciplinado, gosto de resolver problemas e estou sempre em busca de
              melhorar tanto tecnicamente quanto estrategicamente, seja codando, testando novas
              ideias ou operando no mercado financeiro.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
