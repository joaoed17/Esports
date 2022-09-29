import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/games/", async (req, res) => {
  const game = await prisma.games.findMany();
  return res.json(game);
});

app.listen(3000);
