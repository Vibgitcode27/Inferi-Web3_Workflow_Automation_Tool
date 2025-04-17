-- First create the column without the NOT NULL constraint
ALTER TABLE "Feri" ADD COLUMN "userId" INTEGER;

-- Update existing records with a default user ID (create this user first if needed)
-- This assumes you have a user with ID 1 in your database
UPDATE "Feri" SET "userId" = 1 WHERE "userId" IS NULL;

-- Now add the NOT NULL constraint
ALTER TABLE "Feri" ALTER COLUMN "userId" SET NOT NULL;

-- Finally add the foreign key constraint
ALTER TABLE "Feri" ADD CONSTRAINT "Feri_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;