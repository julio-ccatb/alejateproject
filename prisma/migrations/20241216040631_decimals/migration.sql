/*
  Warnings:

  - The primary key for the `TourPackage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `pricePerPerson` on the `TourPackage` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - The `difficulty` column on the `TourPackage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `recommendedClothing` column on the `TourPackage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `initialDeposit` column on the `TourPackage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `departureTime` on the `TourPackage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `returnTime` on the `TourPackage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Dificulty" AS ENUM ('EASY', 'NORMAL', 'DIFICULT', 'HARD');

-- DropForeignKey
ALTER TABLE "Itinerary" DROP CONSTRAINT "Itinerary_tourPackageId_fkey";

-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_tourPackageId_fkey";

-- AlterTable
ALTER TABLE "Itinerary" ALTER COLUMN "tourPackageId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Participant" ALTER COLUMN "tourPackageId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "TourPackage" DROP CONSTRAINT "TourPackage_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "pricePerPerson" SET DATA TYPE DECIMAL(10,2),
DROP COLUMN "difficulty",
ADD COLUMN     "difficulty" "Dificulty" NOT NULL DEFAULT 'NORMAL',
DROP COLUMN "recommendedClothing",
ADD COLUMN     "recommendedClothing" TEXT[],
ALTER COLUMN "packageType" SET DEFAULT 'TOUR',
DROP COLUMN "initialDeposit",
ADD COLUMN     "initialDeposit" DECIMAL(10,2) NOT NULL DEFAULT 1000.00,
DROP COLUMN "departureTime",
ADD COLUMN     "departureTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "returnTime",
ADD COLUMN     "returnTime" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "TourPackage_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TourPackage_id_seq";

-- AddForeignKey
ALTER TABLE "Itinerary" ADD CONSTRAINT "Itinerary_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
