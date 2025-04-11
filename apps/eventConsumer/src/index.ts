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
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      console.log("Received message from Kafka:", {
        topic,
        partition,
        value: message.value?.toString(),
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await consumer.commitOffsets([
        {
          topic: "feri-events",
          partition: partition,
          offset: `${parseInt(message.offset) + 1}`,
        },
      ]);
      console.log("Offsets committed");
    },
  });
}
main();

app.listen(8040, () => {
  console.log("Server is running on http://localhost:8040");
});
