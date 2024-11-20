import express from "express";
import { getPostById, ListPosts } from "../controllers/postsController.js";

const routes = (app) => {
  // devolver json para o front-end
  // Habilita o parsing de JSON no corpo das requisições
  app.use(express.json());

  // Rota para obter todos os posts
  app.get("/posts", ListPosts);

  // Rota para obter um post específico pelo ID
  app.get("/posts/:id", getPostById);
};

export default routes;
