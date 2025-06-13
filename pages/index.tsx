import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";

// import Projects from "./projects";

import { WhatsappIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="w-full h-auto bg-cover bg-center bg-no-repeat flex flex-row p-2 sm:aling-center">
        <div
          className="
    bg-white dark:bg-gray-900 p-4 rounded-xl mt-10 
    w-72 sm:w-80
    shadow-md md:shadow-lg lg:shadow-xl 
    transition-all duration-300 
    mx-auto
    flex flex-col items-start
  "
        >
          <Image
            alt={"minha foto"}
            className="rounded-full border-white border-medium self-center mb-4"
            height={150}
            src={"/calebe.jpg"}
            width={150}
          />
          <p className=" text-gray-700 dark:text-gray-100">
            Calebe Liasse - Dev Web & Mobile
          </p>
          <br />
          <div>
            <p className=" text-gray-400 dark:text-gray-300">
              Desenvolvimento de sites e aplicativos personalizados para
              presença digital profissional.
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <Link
              isExternal
              className={`${buttonStyles({
                color: "success",
                radius: "full",
                variant: "shadow",
              })} !text-white`}
              href={siteConfig.links.whatsapp}
            >
              <WhatsappIcon /> Whatsapp
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded-xl mt-10 w-72 sm:w-80 shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 mx-auto flex flex-col items-start">
          <p className="text-lg">Projeto mais recente</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded-xl mt-10 w-72 sm:w-80 shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 mx-auto flex flex-col items-start">
          <p>Competências</p>
        </div>
      </section>
      <div className="mt-10 aling-center text-center">{/*<Projects />*/}</div>
    </DefaultLayout>
  );
}
