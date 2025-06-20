"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  createProject,
  getAllProjects,
  deleteProjectById,
  uploadFile,
  updateProject,
} from "../../lib/portifolio";

import useProtectedRoute from "@/pages/hooks/useProtectRoute";
import { myAppHook } from "../context/AppUtils";
import { useLogout } from "@/pages/lib/logout";
import { Navbar } from "@/components/navbar";

export default function AdminPage() {
  useProtectedRoute();
  const logout = useLogout();
  const { userProfile } = myAppHook();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [github_link, setgithub_link] = useState("");
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editLink, setEditLink] = useState("");

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (err) {
        toast.error("Erro ao carregar projetos");
        console.error("Erro getAllProjects:", err);
      }
    }
    loadProjects();
  }, []);

  const handleCreate = async () => {
    if (!title.trim()) {
      toast.error("O título é obrigatório");
      return;
    }

    let uploadedImages: string[] = [];
    let video_url: string | null = null;

    try {
      if (imageFiles.length > 0) {
        toast.loading("Enviando imagens...");
        const uploads = await Promise.all(
          imageFiles.map((file) => uploadFile(file))
        );
        toast.dismiss();
        uploadedImages = uploads.filter(Boolean) as string[];

        if (uploadedImages.length === 0) {
          toast.error("Erro ao enviar imagens");
          return;
        }
      }

      if (videoFile) {
        toast.loading("Enviando vídeo...");
        video_url = await uploadFile(videoFile);
        toast.dismiss();
        if (!video_url) throw new Error("Erro ao enviar vídeo");
      }

      const result = await createProject({
        title,
        description,
        link,
        github_link,
        image_url: uploadedImages,
        video_url,
      });

      if (result?.success) {
        toast.success("Projeto criado com sucesso!");
        setTitle("");
        setDescription("");
        setLink("");
        setImageFiles([]);
        setVideoFile(null);

        const updatedProjects = await getAllProjects();
        setProjects(updatedProjects);
      } else {
        toast.error(result?.error || "Erro ao criar projeto");
      }
    } catch (err: any) {
      toast.dismiss();
      toast.error(err.message || "Erro inesperado");
      console.error("Erro ao criar projeto:", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const success = await deleteProjectById(id);
      if (success) {
        setProjects((prev) => prev.filter((proj) => proj.id !== id));
        toast.success("Projeto excluído com sucesso");
      } else {
        toast.error("Erro ao excluir projeto");
      }
    } catch (err) {
      toast.error("Erro ao excluir projeto");
      console.error("Erro deleteProjectById:", err);
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const updatedFields = {
        title: editTitle,
        description: editDescription,
        link: editLink,
      };

      const result = await updateProject(id, updatedFields);

      if (result?.success) {
        toast.success("Projeto atualizado");
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === id ? { ...project, ...updatedFields } : project
          )
        );
        setEditingProjectId(null);
      } else {
        toast.error(result?.error || "Erro ao atualizar");
      }
    } catch (err: any) {
      toast.error(err.message || "Erro inesperado");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-900 p-4 rounded-xl mt-10 shadow-md flex flex-col items-center">
          <Image
            alt="minha foto"
            className="rounded-full border-white border-medium mb-4 shadow-md"
            height={100}
            src="/Calebe.jpeg"
            width={100}
          />
          <h1 className="text-2xl font-bold">Painel de Admin</h1>
          {userProfile && <p className="mt-2">Bem-vindo, {userProfile.email}</p>}
          <button
            onClick={logout}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Sair
          </button>
        </div>

        <div className="mt-10 p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <h2 className="text-xl font-semibold mb-4">Criar Novo Projeto</h2>
          <input
            type="text"
            placeholder="Título *"
            className="w-full mb-2 p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            className="w-full mb-2 p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="url"
            placeholder="Link"
            className="w-full mb-2 p-2 rounded"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            type="url"
            placeholder="Link do GitHub"
            className="w-full mb-2 p-2 rounded"
            value={github_link}
            onChange={(e) => setgithub_link(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setImageFiles(Array.from(e.target.files || []))}
          />
          {imageFiles.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-2">
              {imageFiles.map((img, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(img)}
                  alt={`Preview ${i + 1}`}
                  className="w-full h-auto rounded"
                />
              ))}
            </div>
          )}
          <input
            type="file"
            accept="video/*"
            className="w-full mb-2"
            onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
          />
          {videoFile && (
            <video
              controls
              className="w-full h-auto rounded mb-2"
              src={URL.createObjectURL(videoFile)}
            />
          )}
          <button
            onClick={handleCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Criar Projeto
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Projetos Criados</h2>
          <ul className="space-y-4">
            {projects.map((project: any) => (
              <li
                key={project.id}
                className="p-4 bg-white dark:bg-gray-800 rounded shadow flex flex-col"
              >
                {editingProjectId === project.id ? (
                  <div>
                    <input
                      className="w-full mb-2 p-2 rounded"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea
                      className="w-full mb-2 p-2 rounded"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                    />
                    <input
                      className="w-full mb-2 p-2 rounded"
                      value={editLink}
                      onChange={(e) => setEditLink(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUpdate(project.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        Salvar
                      </button>
                      <button
                        onClick={() => setEditingProjectId(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-600"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <strong>{project.title}</strong>
                    <p>{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {project.link}
                      </a>
                    )}
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-300 underline"
                      >
                        Ver código no GitHub
                      </a>
                    )}

                    {Array.isArray(project.image_url) &&
                      project.image_url.map((img: string, i: number) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${project.title} ${i + 1}`}
                          className="w-full h-auto rounded mt-2"
                        />
                      ))}
                    {project.video_url && (
                      <video
                        controls
                        className="w-full h-auto rounded mt-2"
                        src={project.video_url}
                      />
                    )}
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => {
                          setEditingProjectId(project.id);
                          setEditTitle(project.title);
                          setEditDescription(project.description || "");
                          setEditLink(project.link || "");
                        }}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Excluir
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
