import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/games/", async (req, res) => {
  const game = await prisma.games.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return res.json(game);
});

app.get("/games/:id/ads", async (req, res) => {
  const gamesId = req.params.id;

  const ads = await prisma.ads.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gamesId: gamesId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(ads);
});

app.listen(3000);
