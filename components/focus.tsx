import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TrueFocus from "@/components/Truefocus";
import { InContact } from "./buttons";

export default function ProblemSolutionSection() {
    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    const problemas = [
        "Acredita que um site profissional aumentaria suas vendas e transmitiria profissionalismo?",
        "Você sente que seu site não representa a qualidade do seu negócio?",
        "Perde vendas porque seus clientes desistem antes de concluir o pedido.",
        "Seu site é lento, desatualizado ou não funciona bem no celular.",
        "Precisa de alguém que resolva, mas já teve experiências frustrantes com freelancers.",
        "Você não entende de tecnologia e acaba ficando refém de quem desenvolve.",
    ];

    const solucoes = [
        "Eu criarei um site que de fato represente resultado e profissionalismo",
        "Crio sites modernos, responsivos e com visual profissional que refletem sua marca.",
        "Melhoro a usabilidade para que o cliente encontre o que precisa e finalize a compra.",
        "Implemento velocidade, segurança e performance com foco total na experiência mobile.",
        "Trabalho com feedback em tempo real e entregas visuais para você acompanhar cada etapa.",
        "Falo a sua língua: sem tecnicês, com explicações claras e decisões conjuntas.",
    ];


    return (
        <section className="py-12 px-4 bg-transparent">
            <div className="max-w-6xl mx-auto leading-none text-wrap text-white">
                <div className="text-[2rem]">
                    <TrueFocus
                    sentence="Foco Na Solução"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="red"
                    animationDuration={1}
                    pauseBetweenAnimations={0.5}
                />
                </div>   
                <div className="flex flex-col md:flex-row gap-8 mt-8">
                    {/* Problemas */}
                    <div className="flex-1 bg-gray-900/15 backdrop-blur-[3px] shadow-md rounded-lg p-6" data-aos="fade-right">
                        <h3 className="text-xl font-semibold text-red-500 mb-4 flex items-center gap-2">
                            <FaTimesCircle /> Problemas mais comuns
                        </h3>
                        <ul className="space-y-4">
                            {problemas.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-tiny md:text-lg leading-tight text-white">
                                    <FaTimesCircle className="text-red-500 w-5 h-5 mt-1 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Soluções */}
                    <div className="flex-1 bg-gray-900/15 backdrop-blur-[3px] shadow-md rounded-lg p-6" data-aos="fade-left">
                        <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> Minhas soluções
                        </h3>
                        <ul className="space-y-4">
                            {solucoes.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-tiny md:text-lg leading-tight text-white">
                                    <FaCheckCircle className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center mt-6 m-auto">
                <p className="text-base md:text-2xl font-light text-white leading-tight text-center">Precisa agora de uma solução que resolva a parada ? <br />Entre em contato comigo!</p>
                <InContact />
            </div>
        </section>
    );
}
