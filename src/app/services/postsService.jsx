import api from "./api";

export async function getAll() {
  try {
    const { data } = await api.get("/posts");
    return data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return null;
  }
}
