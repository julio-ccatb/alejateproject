-- CreateEnum
CREATE TYPE "Role" AS ENUM ('NOT_VERIFIED', 'ADMIN', 'EDITOR', 'OPERATOR', 'READER', 'VIEWER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role"[] DEFAULT ARRAY['NOT_VERIFIED']::"Role"[];
