import express from "express";
import cors from "cors";
import { PrismaClient } from "../../../packages/database/generated/client";
import { producer, kafka } from "../../../packages/kafka/src/client";

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

async function main() {
  await producer.connect();
  while (1) {
    const pendingRows = await prisma.feriOutbox.findMany({
      where: {
        status: "pending",
      },
      orderBy: {
        createdAt: "asc",
      },
      take: 10,
    });

    if (!pendingRows) {
      console.log("No pending rows found");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      continue;
    } else {
      await producer.send({
        topic: "feri-events",
        messages: pendingRows.map((row) => ({
          value: row.feriRunId,
        })),
      });
      console.log("Sent messages to Kafka:", pendingRows);
      await prisma.feriOutbox.deleteMany({
        where: {
          id: {
            in: pendingRows.map((row) => row.id),
          },
        },
      });
      console.log("Sent messages to Kafka:", pendingRows);
    }
  }
}
main();

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
