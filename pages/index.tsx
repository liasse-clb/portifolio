"use client";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import { useEffect, useState } from "react";

import { FileIcon, WhatsappIcon } from "@/components/icons";
import { AdaptabilityIcon, CleanCodeIcon, CommunicationIcon, LearningIcon, MysqlIcon, NextIcon, NodeIcon, SupabaseIcon } from "@/components/secondary-icons";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { getLatestProject } from "@/pages/lib/portifolio";
import { Link } from "@heroui/link";
import { Card, CardFooter, Button } from "@heroui/react";
import ProjectsPage from "./auth/projects";

export default function IndexPage() {
  const [latestProject, setLatestProject] = useState<any>(null);

  useEffect(() => {
    async function fetchLatest() {
      const data = await getLatestProject();
      setLatestProject(data);
    }
    fetchLatest();
  }, []);

  return (
    <DefaultLayout>
      <section className="w-full flex-wrap h-auto bg-cover bg-center bg-no-repeat flex flex-row p-2 sm:aling-center">
        <div className="bg-white dark:bg-gray-900/70 p-4 rounded-xl mt-10 w-72 sm:w-80 shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 mx-auto flex flex-col items-start">
          <Image
            alt="Foto da minha pessoa(dono do portifólio)"
            className="rounded-full border-white border-medium self-center mb-4 shadow-md"
            height={150}
            src="/Calebe.jpeg"
            width={150}
          />
          <p className="text-gray-700 dark:text-gray-100">Calebe Liasse - Dev Web & Mobile</p>
          <br />
          <div>
            <p className="text-gray-500 dark:text-gray-300">
              Sou totalmente comprometido com o desenvolvimento de sites e aplicativos
              profissionais totalmente voltados para resolver os seus problemas.
            </p>
            <p className="text-gray-500 dark:text-gray-300">Me chame agora mesmo para uma reunião! 👇</p>
          </div>
          <div className="flex gap-3 mt-3 flex-wrap">
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
              <GithubIcon size={25} />
              GitHub
            </Link>
            <Link
              isExternal
              className={`${buttonStyles({ color: "primary", variant: "shadow", radius: "full" })}`}
              href="/auth/projects"
            >
              <FileIcon />
              Veja Meus Projetos
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900/70 p-5 rounded-xl mt-10 w-72 sm:w-80 shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 mx-auto flex flex-col items-start">
          <p className="text-lg">Projeto mais recente</p>

          {latestProject ? (
            <>
              <Card className="w-full h-[200px] mt-2 relative overflow-hidden" radius="lg">
                <div className="relative w-full h-full">
                  {latestProject.image_url?.[0]?.includes(".mp4") ? (
                    <video
                      src={latestProject.image_url[0]}
                      controls
                      className="object-cover w-full h-full rounded-lg"
                    />
                  ) : (
                    <img
                      src={latestProject.image_url[0]}
                      alt={latestProject.title}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  )}
                </div>
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 bg-slate-400/60">
                  <p className="text-medium text-white/80 truncate max-w-[70%] text-left">
                    {latestProject.title}
                  </p>
                  {latestProject.link && (
                    <Button
                      className="text-tiny text-white bg-black/30"
                      color="default"
                      radius="lg"
                      size="sm"
                      variant="flat"
                      as="a"
                      href={latestProject.link}
                      target="_blank"
                    >
                      Visualizar
                    </Button>
                  )}
                </CardFooter>
              </Card>

              {latestProject.description && (
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {latestProject.description}
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-gray-400">Carregando projeto...</p>
          )}

          {latestProject?.github_link && (
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full", color: "default" })}
              href={latestProject.github_link}
            >
              <GithubIcon size={25} />
              Ver no GitHub
            </Link>
          )}
        </div>

        <div className="bg-white dark:bg-gray-900/70 p-6 rounded-xl mt-10 w-72 sm:w-80 shadow-md md:shadow-lg lg:shadow-xl transition-all duration-300 mx-auto flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Competências</h2>

          <div className="flex items-center gap-2">
            <NextIcon />
            <span>Next.js, React e TailwindCSS</span>
          </div>

          <div className="flex items-center gap-2">
            <NodeIcon />
            <span>Node.js, Javascript</span>
          </div>

          <div className="flex items-center gap-2">
            <MysqlIcon />
            <span>MySQL - PostgreeSQL</span>
          </div>

          <div className="flex items-center gap-2">
            <SupabaseIcon />
            <span>Supabase - Firestore</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" />
              <path d="M9 16h2v1H9v-1z" />
            </svg>
            <span>React Native e Expo</span>
          </div>

          <div className="flex items-center gap-2">
            <GithubIcon />
            <span>Git & GitHub</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Soft skills</h2>
          <div className="flex items-center gap-2">
            <CleanCodeIcon />
            <span>Código limpo</span>
          </div>
          <div className="flex items-center gap-2">
            <CommunicationIcon />
            <span>Boa comunicação</span>
          </div>
          <div className="flex items-center gap-2">
            <AdaptabilityIcon />
            <span>Adaptabilidade e boa convivência</span>
          </div>
          <div className="flex items-center gap-2">
            <LearningIcon />
            <span>Aprendizado constante</span>
          </div>
        </div>
      </section>

      <div className="mt-10 aling-center text-center">
        <ProjectsPage />
      </div>
    </DefaultLayout>
  );
}
