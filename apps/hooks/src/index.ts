import express from "express";
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

app.post("/webhook/catch/:userId/:cascadeId", async (req, res) => {
  const userId = req.params.userId;
  const cascadeId = req.params.cascadeId;
  let cascade;
  try {
    cascade = await prisma.cascade.create({
      data: {
        triggerId: "webhook",
      },
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.status(500).send("Error processing webhook");
  }

  try {
    await prisma.cascadeRun.create({
      data: {
        cascadeId: cascade?.id,
        status: "pending",
        metadata: { userId: "" + userId },
      },
    });
  } catch (error) {
    console.error("Error saving to database:", error);
    res.status(500).send("Error saving to database");
  }
  res.status(200).send("Webhook received and data saved to database.");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
