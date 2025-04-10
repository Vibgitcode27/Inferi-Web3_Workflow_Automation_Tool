/*
  Warnings:

  - You are about to drop the column `cascadeId` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `cascadeId` on the `Trigger` table. All the data in the column will be lost.
  - You are about to drop the `Cascade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CascadeOutbox` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CascadeRun` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[feriId]` on the table `Action` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[feriId]` on the table `Trigger` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `feriId` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feriId` to the `Trigger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_cascadeId_fkey";

-- DropForeignKey
ALTER TABLE "CascadeOutbox" DROP CONSTRAINT "CascadeOutbox_cascadeRunId_fkey";

-- DropForeignKey
ALTER TABLE "CascadeRun" DROP CONSTRAINT "CascadeRun_cascadeId_fkey";

-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_cascadeId_fkey";

-- DropIndex
DROP INDEX "Action_cascadeId_key";

-- DropIndex
DROP INDEX "Trigger_cascadeId_key";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "cascadeId",
ADD COLUMN     "feriId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "cascadeId",
ADD COLUMN     "feriId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Cascade";

-- DropTable
DROP TABLE "CascadeOutbox";

-- DropTable
DROP TABLE "CascadeRun";

-- CreateTable
CREATE TABLE "Feri" (
    "id" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeriRun" (
    "id" TEXT NOT NULL,
    "feriId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3)[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeriRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeriOutbox" (
    "id" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "feriRunId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeriOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Action_feriId_key" ON "Action"("feriId");

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_feriId_key" ON "Trigger"("feriId");

-- AddForeignKey
ALTER TABLE "FeriRun" ADD CONSTRAINT "FeriRun_feriId_fkey" FOREIGN KEY ("feriId") REFERENCES "Feri"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeriOutbox" ADD CONSTRAINT "FeriOutbox_feriRunId_fkey" FOREIGN KEY ("feriRunId") REFERENCES "FeriRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_feriId_fkey" FOREIGN KEY ("feriId") REFERENCES "Feri"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_feriId_fkey" FOREIGN KEY ("feriId") REFERENCES "Feri"("id") ON DELETE CASCADE ON UPDATE CASCADE;
