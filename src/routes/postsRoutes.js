import express from "express";
import {
  getPostById,
  ListPosts,
  postarNovoPost,
  uploadImagem,
  atualizarNovoPost,
} from "../controllers/postsController.js";
import multer from "multer";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  // devolver json para o front-end
  // Habilita o parsing de JSON no corpo das requisições
  app.use(express.json());
  app.use(cors(corsOptions));
  // Rota para obter todos os posts
  app.get("/posts", ListPosts);

  // Rota para criar um novo post
  app.post("/posts", postarNovoPost);

  // Rota para obter um post específico pelo ID
  app.get("/posts/:id", getPostById);

  // Rota para upload de imagens
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
