/*
  Warnings:

  - A unique constraint covering the columns `[appId]` on the table `AvailableActions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appId]` on the table `AvailableTrigger` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `appId` to the `AvailableActions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AvailableActions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appId` to the `AvailableTrigger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AvailableTrigger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableActions" ADD COLUMN     "appId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "AvailableTrigger" ADD COLUMN     "appId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AvailableActions_appId_key" ON "AvailableActions"("appId");

-- CreateIndex
CREATE UNIQUE INDEX "AvailableTrigger_appId_key" ON "AvailableTrigger"("appId");
