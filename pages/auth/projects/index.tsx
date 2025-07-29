'use client';
import { button as buttonStyles } from '@heroui/theme';
import { useEffect, useState } from 'react';
import { Card, Button, Link } from '@heroui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { getAllProjects } from '@/lib/portifolio';
import { GithubIcon } from '@/components/icons';
import Particles from '@/components/Particles';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState<Record<string, number>>({});

  useEffect(() => {
    async function fetchProjects() {
      const data = await getAllProjects();

      setProjects(data);
      setLoading(false);
    }

    fetchProjects();
  }, []);

  const handleSlide = (projectId: string, direction: 'prev' | 'next', total: number) => {
    setActiveSlide((prev) => {
      const current = prev[projectId] || 0;
      const newIndex = direction === 'next' ? (current + 1) % total : (current - 1 + total) % total;

      return { ...prev, [projectId]: newIndex };
    });
  };

  return (
    <div className='m-2'>
      <h1 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h1>
      <div
        className="bg-transparent w-full
    shadow-md transition-all duration-300 rounded-lg m-auto"
      >
        {loading ? (
          <p className="text-center">Carregando projetos...</p>
        ) : projects.length === 0 ? (
          <p className="text-center">Nenhum projeto disponível.</p>
        ) : (
          <div className='flex justify-center'>
            <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              {projects.map((project) => {
                const mediaItems = [
                  ...(Array.isArray(project.image_url) ? project.image_url : []),
                  ...(project.video_url ? [project.video_url] : []),
                ];
                const currentIndex = activeSlide[project.id] || 0;

                return (
                  <li key={project.id} className="flex flex-col items-center">
                    <Card
                      isFooterBlurred
                      className="border-none w-full max-w-[420px] h-full relative overflow-hidden"
                      radius="lg"
                    >
                      {/* FORÇANDO PROPORÇÃO RESPONSIVA */}
                      <div className="relative w-full aspect-[16/9]">
                        {mediaItems.length > 0 ? (
                          <>
                            <div className="relative w-full h-full">
                              {mediaItems.map((item: string, index: number) => {
                                const isActive = index === currentIndex;
                                const isVideo = item.includes('.mp4');

                                return isVideo ? (
                                  <video
                                    key={`${project.id}-video-${index}`}
                                    controls
                                    className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 rounded-lg ${isActive
                                      ? 'opacity-100 z-10 pointer-events-auto'
                                      : 'opacity-0 z-0 pointer-events-none'
                                      }`}
                                    src={item}
                                  />
                                ) : (
                                  <img
                                    key={`${project.id}-img-${index}`}
                                    alt={project.title}
                                    className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 rounded-lg ${isActive
                                      ? 'opacity-100 z-10 pointer-events-auto'
                                      : 'opacity-0 z-0 pointer-events-none'
                                      }`}
                                    src={item}
                                  />
                                );
                              })}
                            </div>

                            {mediaItems.length > 1 && (
                              <>
                                <button
                                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-black/50 p-1 rounded-full z-20"
                                  onClick={() => handleSlide(project.id, 'prev', mediaItems.length)}
                                >
                                  <FaArrowLeft className="size-5" />
                                </button>
                                <button
                                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-black/50 p-1 rounded-full z-20"
                                  onClick={() => handleSlide(project.id, 'next', mediaItems.length)}
                                >
                                  <FaArrowRight className="size-5" />
                                </button>
                              </>
                            )}
                          </>
                        ) : (
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                            Sem imagem ou vídeo
                          </div>
                        )}
                      </div>
                    </Card>

                    <div className="p-4 w-full max-w-[420px] bg-neutral-600/70 rounded-b-2xl text-center">
                      <p className="text-xl font-semibold text-white/80 truncate">
                        {project.title}
                      </p>
                      {project.link && (
                        <Button
                          as="a"
                          className="text-md text-white mt-2"
                          color="primary"
                          href={project.link}
                          radius="lg"
                          size="md"
                          target="_blank"
                          variant="shadow"
                        >
                          Visualizar
                        </Button>
                      )}
                      {project.description && (
                        <p className="text-md text-gray-200 my-3">
                          {project.description}
                        </p>
                      )}
                      {project.github_link && (
                        <Link
                          isExternal
                          className={buttonStyles({
                            variant: 'bordered',
                            radius: 'full',
                          })}
                          href={project.github_link}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <GithubIcon />
                          Ver no GitHub
                        </Link>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
