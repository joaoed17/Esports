import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/games/", async (req, res) => {
  // O CÓDIGO ABAIXO CRIA UM GAME NO BANCO, DESCOMENTE ESSA LINHA PARA CRIAR UM GAME E RETORNAR O ARRAY DE GAMES
  // await prisma.games.create({
  //   data: {
  //     name: 'tesste',
  //     bannerUrl: 'https://i.pinimg.com/originals/f8/f3/01/f8f301698392ee89abd583fe98c83a54.jpg',
  //   },
  // })
  const game = await prisma.games.findMany();
  return res.json(game);
});

app.listen(3000);
