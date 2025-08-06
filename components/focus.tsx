import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import TrueFocus from "@/components/Truefocus";

export default function ProblemSolutionSection() {

    const problemas = [
        "Acredita que um site profissional aumentaria suas vendas e transmitiria profissionalismo?",
        "Você sente que seu site não representa a qualidade do seu negócio?",
        "Perde vendas porque seus clientes desistem antes de concluir o pedido.",
        "Seu site é lento, desatualizado ou não funciona bem no celular.",
        "Precisa de alguém que resolva, mas já teve experiências frustrantes com freelancers.",
        "Você não entende de tecnologia e acaba ficando refém de quem desenvolve.",
    ];

    const solucoes = [
        "Eu criarei um site que de fato represente resultado e profissionalismo.",
        "Crio sites modernos, responsivos e com visual profissional que refletem sua marca.",
        "Melhoro a usabilidade para que o cliente encontre o que precisa e finalize a compra.",
        "Implemento velocidade, segurança e performance com foco total na experiência mobile.",
        "Trabalho com feedback em tempo real e entregas visuais para você acompanhar cada etapa.",
        "Falo a sua língua: sem tecnicês, com explicações claras e decisões conjuntas.",
    ];

    return (
        <section className="py-8 px-4 bg-transparent">
            <div className="text-white">
                <div>
                   <TrueFocus
                        sentence="FOCO NA SOLUÇÃO"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="red"
                        animationDuration={1}
                        pauseBetweenAnimations={0.5}
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-900/50 backdrop-blur-[2px]rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-red-500 mb-4 flex items-center gap-2">
                            <FaTimesCircle /> Problemas mais comuns
                        </h3>
                        <ul className="space-y-4">
                            {problemas.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white leading-tight">
                                    <FaTimesCircle className="text-red-500 w-4 h-4 flex-shrink-0 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-900/50 backdrop-blur-[2px] rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-green-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> Minhas soluções
                        </h3>
                        <ul className="space-y-4">
                            {solucoes.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white leading-tight">
                                    <FaCheckCircle className="text-green-500 w-4 h-4 flex-shrink-0 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
