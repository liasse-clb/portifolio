import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch, FaLaptopCode, FaExchangeAlt, FaRocket } from 'react-icons/fa';

export default function HowToWork() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const etapas = [
    {
      icon: <FaSearch className="text-primary-500 text-4xl" />,
      title: '1. Entendimento do seu negócio',
      description:
        'Antes de qualquer linha de código, eu escuto. Entendo seu momento, seus objetivos e o que você realmente precisa para crescer.',
    },
    {
      icon: <FaExchangeAlt className="text-primary-500 text-4xl" />,
      title: '2. Alinhamento e proposta',
      description:
        'Normalmente eu crio um design em PDF totalmente gratuito para você imaginar como seria o seu website. Você pode solicitar um sem precisar de compromisso.',
    },
    {
      icon: <FaLaptopCode className="text-primary-500 text-4xl" />,
      title: '3. Desenvolvimento com feedbacks',
      description:
        'Crio tudo com transparência, apresentando o progresso visualmente. Você acompanha e aprova cada etapa com segurança.',
    },
    {
      icon: <FaRocket className="text-primary-500 text-4xl" />,
      title: '4. Entrega e acompanhamento',
      description:
        'Após finalizado, entrego o projeto otimizado, com suporte inicial e orientações para que você aproveite ao máximo a solução entregue.',
    },
  ];

  return (
    <section className="py-6 px-4  text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-aos="fade-up">
            Como eu trabalho
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Clareza, parceria e resultado. Essas são as bases do meu processo. Você participa, entende e acompanha cada passo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-[1px] p-6 rounded-lg shadow-md text-center"
              data-aos="fade-up"
              data-aos-delay={300 * index}
            >
              <div className="mb-4">{etapa.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{etapa.title}</h3>
              <p className="text-gray-300 text-sm md:text-lg sm:leading-tight leading-relaxed">{etapa.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
