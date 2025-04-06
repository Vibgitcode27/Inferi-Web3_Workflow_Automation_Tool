// packages/kafka/src/client.ts
import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"], // replace with docker name like 'kafka:9092' if needed
});

export const admin = kafka.admin();
export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "my-group" });
