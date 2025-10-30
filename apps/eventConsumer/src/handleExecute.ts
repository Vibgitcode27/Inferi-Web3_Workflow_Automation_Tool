import { prisma } from ".";
import { executeNotion } from "./apps/notion";
import { executeSlack } from "./apps/slack";

export const handleExecute = async (feriRunId: string) => {
  try {
    console.log("Executing the workflow");

    const feriRun = await prisma.feriRun.findUniqueOrThrow({
      where: { id: feriRunId },
    });

    await prisma.feriRun.update({
      where: { id: feriRunId },
      data: { status: "IN_PROGRESS" },
    });

    const feriData = await prisma.feri.findUniqueOrThrow({
      where: { id: feriRun.feriId },
      include: {
        action: {
          include: {
            type: true,
          },
          orderBy: {
            sortingOrder: "asc",
          },
        },
      },
    });

    console.log("Executing the feriRun:", feriData);

    for (const action of feriData.action) {
      console.log(
        `Executing action: ${action.type.name} (${action.type.appId})`
      );

      await executeAction(action.type.appId, action.type.metadata);
    }

    await prisma.feriRun.update({
      where: { id: feriRunId },
      data: { status: "SUCCESS" },
    });

    console.log("All actions executed successfully!");
  } catch (error) {
    console.error("Workflow execution failed:", error);

    await prisma.feriRun.update({
      where: { id: feriRunId },
      data: {
        status: "FAILED",
        metadata: {
          error: error instanceof Error ? error.message : "Unknown error",
          failedAt: new Date().toISOString(),
        },
      },
    });
  }
};

// 4. Action executor - delegates based on appId
async function executeAction(appId: string, metadata: any) {
  switch (appId) {
    case "slack":
      await executeSlack(metadata);
      break;
    case "notion":
      await executeNotion(metadata);
      break;
    default:
      throw new Error(`Unknown action type: ${appId}`);
  }
}
