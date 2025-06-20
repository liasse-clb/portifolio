import { supabase } from "./supabase";

export const getProjects = async () => {
  const { data, error } = await supabase
    .from("Calebe") 
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Erro ao buscar projetos:", error)
    return []
  }

  return data
}
