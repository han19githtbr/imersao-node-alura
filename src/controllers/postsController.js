import getAllPosts from "../models/postsModel.js";

export async function ListPosts(req, res) {
  const posts = await getAllPosts();
  res.status(200).json(posts);
}

// Função para buscar o índice de um post pelo ID
function buscarPostPorID(id) {
  // Utiliza o método findIndex para encontrar o índice do post com o ID correspondente
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

export async function getPostById(req, res) {
  // Obtém o ID do post a partir dos parâmetros da rota
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
}
