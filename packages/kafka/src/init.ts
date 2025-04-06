import { admin } from "./client";

const topicToCreate = "my-topic";

export const initKafka = async () => {
  try {
    await admin.connect();
    console.log("[Kafka] Connected to broker");

    const existingTopics = await admin.listTopics();
    console.log("[Kafka] Existing topics:", existingTopics);

    const topicExists = existingTopics.includes(topicToCreate);

    if (topicExists) {
      console.log(
        `[Kafka] Topic "${topicToCreate}" already exists. Skipping creation.`
      );
    } else {
      await admin.createTopics({
        topics: [
          {
            topic: topicToCreate,
            numPartitions: 3,
            replicationFactor: 1,
          },
        ],
        waitForLeaders: true,
      });
      console.log(`[Kafka] Topic "${topicToCreate}" created successfully.`);
    }
  } catch (error) {
    console.error("[Kafka] Error initializing Kafka:", error);
  } finally {
    await admin.disconnect();
    console.log("[Kafka] Disconnected from broker");
  }
};

if (require.main === module) {
  initKafka();
}
