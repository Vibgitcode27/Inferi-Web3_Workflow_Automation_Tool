-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_actionId_fkey";

-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_cascadeId_fkey";

-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_cascadeId_fkey";

-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_triggerId_fkey";

-- CreateTable
CREATE TABLE "CascadeRun" (
    "id" TEXT NOT NULL,
    "cascadeId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "CascadeRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CascadeOutbox" (
    "id" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "cascadeRunId" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "CascadeOutbox_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CascadeRun" ADD CONSTRAINT "CascadeRun_cascadeId_fkey" FOREIGN KEY ("cascadeId") REFERENCES "Cascade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CascadeOutbox" ADD CONSTRAINT "CascadeOutbox_cascadeRunId_fkey" FOREIGN KEY ("cascadeRunId") REFERENCES "CascadeRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "AvailableTrigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_cascadeId_fkey" FOREIGN KEY ("cascadeId") REFERENCES "Cascade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "AvailableActions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_cascadeId_fkey" FOREIGN KEY ("cascadeId") REFERENCES "Cascade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
