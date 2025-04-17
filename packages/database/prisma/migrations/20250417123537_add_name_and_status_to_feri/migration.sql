-- First add columns without NOT NULL constraints
ALTER TABLE "Feri" ADD COLUMN "name" TEXT;
ALTER TABLE "Feri" ADD COLUMN "status" BOOLEAN;

-- Update existing records with default values
UPDATE "Feri" SET "name" = 'Customer Support Workflow', "status" = true;

-- Now add the NOT NULL constraints
ALTER TABLE "Feri" ALTER COLUMN "name" SET NOT NULL;
ALTER TABLE "Feri" ALTER COLUMN "status" SET NOT NULL;