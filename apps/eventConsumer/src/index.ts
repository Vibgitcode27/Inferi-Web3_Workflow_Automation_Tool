import express from "express";
import cors from "cors";
import { PrismaClient } from "../../../packages/database/generated/client";
import { kafka, consumer } from "../../../packages/kafka/src/client";

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

async function main() {
  await consumer.connect();
  await consumer.subscribe({ topic: "feri-events", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("Received message from Kafka:", message);
    },
  });
}
main();

app.listen(8040, () => {
  console.log("Server is running on http://localhost:8040");
});
