// packages/kafka/src/client.ts
import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "inferi",
  brokers: ["localhost:9092"],
});

export const admin = kafka.admin();
export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "inferi-group" });
