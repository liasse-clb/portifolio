import { supabase } from "@/pages/lib/supabase";
import { v4 as uuidv4 } from "uuid";

const BUCKET_NAME = "portifolio-uploads"; 

export async function uploadFile(file: File): Promise<string | null> {
  if (!file) return null;
  console.log(file, "não passou")

  const fileExt = file.name.split(".").pop();
  const filePath = `${uuidv4()}.${fileExt}`; // nome único seguro

  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    console.error("Erro ao fazer upload:", uploadError.message);
    return null;
  }

  const { data: publicUrlData, error: urlError } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  if (urlError || !publicUrlData?.publicUrl) {
    console.error("Erro ao obter URL pública:", urlError?.message);
    return null;
  }

  return publicUrlData.publicUrl;
}

export async function createProject({
  title,
  description,
  image_url,
  video_url,
  link,
  github_link,
}: {
  title: string;
  description?: string;
  image_url?: string[]; // <-- aqui
  video_url?: string | null;
  link?: string;
  github_link?: string;
}) {
  try {
    const { data, error } = await supabase.from("portfolio_projects").insert([
      {
        title,
        description: description ?? "",
        image_url: image_url ?? [],
        video_url: video_url ?? null,
        link: link ?? "",
        github_link: github_link ?? "",
      },
    ]);

    if (error) return { success: false, error: error.message };
    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}


export async function getAllProjects() {
  const { data, error } = await supabase
    .from("portfolio_projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar projetos:", error.message);
    return [];
  }

  return data;
}

export async function updateProject(
  id: string,
  updates: {
    title?: string;
    description?: string;
    image_url?: string | null;
    video_url?: string | null;
    link?: string;
  }
) {
  const { data, error } = await supabase
    .from("portfolio_projects")
    .update(updates)
    .eq("id", id);

  if (error) {
    console.error("Erro ao atualizar projeto:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function deleteProjectById(id: string) {
  const { error } = await supabase
    .from("portfolio_projects")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Erro ao deletar projeto:", error.message);
    return false;
  }

  return true;
}

export async function getLatestProject() {
  const { data, error } = await supabase
    .from("portfolio_projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) throw new Error(error.message);
  return data?.[0] || null;
}