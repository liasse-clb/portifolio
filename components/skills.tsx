import { FaAward, FaCheckCircle, FaCommentDots, FaFileCode, FaRecycle, FaRegEye, FaTools } from "react-icons/fa";
import { JsIcon, ReactIcon, GitIcon, GitHubIcon, MySqlIcon, TypeScriptIcon, NodeIcon, TailWindIcon, NextIcon, PostGreeSQlIcon, SupabaseIcon, ExpoIcon } from "./skill-icons";
import { FloatIcon } from "./Floaticons";

export default function Skills() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-ful">
            <div className="flex flex-row flex-wrap justify-center gap-6 max-w-[600px] text-center text-white">
                <p className="md:text-4xl text-2xl font-bold w-full">
                    Hard Skills
                </p>
                <FloatIcon><div className="w-20 md:w-36"><JsIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><NodeIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><ReactIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><MySqlIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><TypeScriptIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><TailWindIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><NextIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><PostGreeSQlIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><SupabaseIcon /></div></FloatIcon>
                <FloatIcon><div className="w-24 md:w-36"><ExpoIcon /></div></FloatIcon>
                <FloatIcon>
                    <div className="w-24 md:w-36">
                        <ReactIcon />
                        <p className="mt-0 font-bold md:text-lg text-tiny text-blue-400">React native</p>
                    </div>
                </FloatIcon>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-6 max-w-[600px] text-center text-white">
                <p className="md:text-4xl text-2xl font-bold w-full">
                    Soft Skills
                </p>
                <FloatIcon><div className="w-20 md:w-36"><GitHubIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><GitIcon /></div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><FaFileCode className="w-full h-auto text-red-500" />
                    <p className="font-bold md:text-lg text-tiny mt-1 text-white leading-none">Código Limpo</p>
                </div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><FaCommentDots className="w-full h-auto text-white" />
                    <p className="font-bold md:text-lg text-tiny mt-1 text-white leading-none">Boa Comunicação</p>
                </div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><FaAward className="w-full h-auto text-yellow-600" />
                    <p className="font-bold md:text-lg text-tiny mt-1 text-white leading-none">Proatividade</p>
                </div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><FaRegEye className="w-full h-auto text-orange-200" />
                    <p className="font-bold md:text-lg text-tiny mt-1 text-white leading-none">Visão de Negócio</p>
                </div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><FaCheckCircle className="w-full h-auto text-green-400" />
                    <p className="font-bold md:text-lg text-tiny mt-1 text-white leading-none">Flexibilidade</p>
                </div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><FaTools className="w-full h-auto text-white" />
                    <p className="font-bold md:text-lg text-tiny mt-1 text-white leading-none">capacidade de adaptação</p>
                </div></FloatIcon>
                <FloatIcon><div className="w-20 md:w-36"><FaRecycle className="w-full h-auto text-warning" />
                    <p className="font-bold md:text-lg text-tiny mt-1 text-white leading-none">Resiliência</p>
                </div></FloatIcon>
            </div>
        </div>
    )
}
