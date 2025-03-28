import express from "express";
import cors from "cors";
import { PrismaClient } from "../../../packages/database/generated/client";

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

async function main() {
  while (1) {
    const pendingRows = await prisma.cascadeRun.findMany({
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
      pendingRows.forEach((row) => {});
      //logic to send to kafka here
      // will implement this after I add kafka package to the monorepo
    }
  }
}
main();

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
