import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaCommentDots } from "react-icons/fa";
import { DocsLink, DocsLink2 } from "./buttons";

export default function Testimonial() {
    useEffect(() => {
        AOS.init({
            duration: 600, // duração da animação
            once: true,    // anima apenas uma vez
        });
    }, []);
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center gap-8 px-4 py-8 md:py-24">

            {/* Coluna das imagens (feedbacks) */}
            <div className="flex-1 flex flex-col gap-2 p-2 max-w-full md:max-w-md">
                {[
                    { src: "/1.webp", w: "w-56", align: "self-end" },
                    { src: "/2.webp", w: "w-56", align: "self-start" },
                    { src: "/3.webp", w: "w-48", align: "self-start" },
                    { src: "/4.webp", w: "w-56", align: "self-end" },
                    { src: "/5.webp", w: "w-56", align: "self-end" },
                    { src: "/6.webp", w: "w-56", align: "self-start" },
                    { src: "/7.webp", w: "w-32", align: "self-end" },
                    { src: "/8.webp", w: "w-56", align: "self-end" },
                ].map((msg, index) => (
                    <img
                        key={index}
                        src={msg.src}
                        alt={`mensagem ${index + 1}`}
                        data-aos="fade-up"
                        data-aos-delay={300 * (index + 1)}
                        className={`${msg.w} ${msg.align}`}
                    />
                ))}
            </div>

            {/* Coluna do texto */}
            <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex-1 max-w-2xl text-white text-center md:text-left items-center md:items-start"
            >
                <h2 className="text-3xl md:text-4xl mb-4 font-bold flex flex-wrap justify-center md:justify-start gap-2">
                    <span data-aos="fade-up" data-aos-delay="300">Feedback</span>
                    <span data-aos="fade-up" data-aos-delay="600">Em</span>
                    <span data-aos="fade-up" data-aos-delay="900">Tempo</span>
                    <span data-aos="fade-up" data-aos-delay="1000">Real</span>
                    <FaCommentDots
                        data-aos="fade-up"
                        data-aos-delay="1300"
                        className="text-primary-500"
                    />
                </h2>
                <p className="text-base md:text-2xl font-light text-white leading-tight text-center md:text-start">
                    O seu feedback é essencial para o meu trabalho. Cada etapa do desenvolvimento
                    é apresentada em tempo real, garantindo transparência total e permitindo ajustes
                    imediatos. Meu foco vai além de um site bonito: quero entregar uma ferramenta eficaz,
                    que gere resultados reais, atraia leads qualificados e impulsione o crescimento do seu negócio.
                </p>
                <br />
                <DocsLink2 />
            </div>
        </div>

    )
}