/* eslint-disable jsx-a11y/media-has-caption */
'use client';
import { button as buttonStyles } from '@heroui/theme';
import { useEffect, useState } from 'react';
import { Card, CardFooter, Button, Link } from '@heroui/react';

import { getAllProjects } from '@/lib/portifolio';
import { GithubIcon } from '@/components/icons';

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
    <div
      className="bg-white dark:bg-gray-900
    shadow-md transition-all duration-300 p-3 m-3 rounded-lg"
    >
      <h1 className="text-3xl font-bold text-left mb-8">Meus Projetos</h1>

      {loading ? (
        <p className="text-center">Carregando projetos...</p>
      ) : projects.length === 0 ? (
        <p className="text-center">Nenhum projeto disponível.</p>
      ) : (
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const mediaItems = [
              ...(Array.isArray(project.image_url) ? project.image_url : []),
              ...(project.video_url ? [project.video_url] : []),
            ];
            const currentIndex = activeSlide[project.id] || 0;

            return (
              <li key={project.id} className="flex flex-col">
                <Card
                  isFooterBlurred
                  className="border-none w-full h-[300px] relative overflow-hidden"
                  radius="lg"
                >
                  <div className="relative w-full h-full min-h-[300px]">
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
                                className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 rounded-lg ${
                                  isActive
                                    ? 'opacity-100 z-10 pointer-events-auto'
                                    : 'opacity-0 z-0 pointer-events-none'
                                }`}
                                src={item}
                              />
                            ) : (
                              <img
                                key={`${project.id}-img-${index}`}
                                alt={project.title}
                                className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-500 rounded-lg ${
                                  isActive
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
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-black/50 px-2 py-1 rounded-full z-20"
                              onClick={() => handleSlide(project.id, 'prev', mediaItems.length)}
                            >
                              ◀
                            </button>
                            <button
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-black/50 px-2 py-1 rounded-full z-20"
                              onClick={() => handleSlide(project.id, 'next', mediaItems.length)}
                            >
                              ▶
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

                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 bg-slate-400/60">
                    <p className="text-medium text-white/80 truncate max-w-[70%] text-left">
                      {project.title}
                    </p>
                    {project.link && (
                      <Button
                        as="a"
                        className="text-tiny text-white bg-black/30"
                        color="default"
                        href={project.link}
                        radius="lg"
                        size="sm"
                        target="_blank"
                        variant="flat"
                      >
                        Visualizar
                      </Button>
                    )}
                  </CardFooter>
                </Card>

                <div className="mt-2 px-1 text-left">
                  {project.description && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
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
      )}
    </div>
  );
}
