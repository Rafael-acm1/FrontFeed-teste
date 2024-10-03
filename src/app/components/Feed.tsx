import Post from "./Post";
import { useEffect, useState } from "react";
import { getAll } from "../services/postsService";

interface Post {
  id: number;
  Titulo: string;
  Descricao: string;
  Link: string | null;
  imageFile?: { url: string };
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getAll();
        console.log("Resposta completa da API:", response);

        if (response && response.data) {
          setPosts(response.data);
        } else {
          console.error("Formato inesperado da resposta:", response);
        }
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl text-blue-800 font-bold text-center mb-8">
        Feed de Postagens
      </h1>

      <div className="flex flex-col gap-6">
        {posts?.map((post) => (
          <Post
            key={post.id}
            title={post.Titulo}
            link={post.Link}
            imageFile={post?.imageFile?.url}
            description={post.Descricao}
          />
        ))}
      </div>
    </div>
  );
}
