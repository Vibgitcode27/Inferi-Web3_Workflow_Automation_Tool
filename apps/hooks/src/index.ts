import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "../../../packages/database/generated/client";

const prisma = new PrismaClient();
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("Hello from the server!");
});

app.post(
  "/webhook/catch/:userId/:feriId",
  async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const feriId = req.params.feriId;

    try {
      const feriData = await prisma.feri.findFirst({
        where: { id: feriId },
      });

      console.log("Feri data:", feriData);

      if (!feriData) {
        res.status(404).send("Feri not found");
        return;
      }

      await prisma.$transaction(async (tx) => {
        const run = await tx.feriRun.create({
          data: {
            feriId: feriData.id,
            status: "pending",
            metadata: { userId },
          },
        });

        await tx.feriOutbox.create({
          data: {
            feriRunId: run.id,
            status: "pending",
            metadata: { userId },
          },
        });
      });

      res.status(200).send("Webhook received and data saved to database.");
    } catch (error) {
      console.error("Error processing webhook or saving to DB:", error);
      if (!res.headersSent) {
        res.status(500).send("Internal Server Error");
      }
    }
  }
);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
