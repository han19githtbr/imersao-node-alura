import { getAllPosts, criarPost } from "../models/postsModel.js";
import fs from "fs";

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

export async function postarNovoPost(req, res) {
  const novoPost = req.body;
  try {
    const postCriado = await criarPost(novoPost);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export async function uploadImagem(req, res) {
  //const novoPost = req.body;
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    const postCriado = await criarPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}
