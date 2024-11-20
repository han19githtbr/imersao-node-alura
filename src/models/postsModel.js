import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados utilizando a string de conexão fornecida no ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export default async function getAllPosts() {
  // Seleciona o banco de dados e a coleção "posts"
  const db = conexao.db("imersao-node-alura");
  const colecao = db.collection("posts");
  // Retorna todos os documentos da coleção como um array
  return colecao.find().toArray();
}
