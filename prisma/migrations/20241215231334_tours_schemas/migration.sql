-- CreateEnum
CREATE TYPE "PackageType" AS ENUM ('TEMPLATE', 'TOUR');

-- CreateEnum
CREATE TYPE "ParticipantType" AS ENUM ('STAFF', 'PARTICIPANT');

-- CreateTable
CREATE TABLE "TourPackage" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "pricePerPerson" DECIMAL(65,30) NOT NULL,
    "difficulty" TEXT[],
    "description" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "requirements" TEXT[],
    "destination" TEXT NOT NULL,
    "recommendedClothing" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "packageType" "PackageType" NOT NULL,
    "initialDeposit" TEXT NOT NULL,
    "policyLink" TEXT NOT NULL,
    "paymentMethods" TEXT[],
    "remainingPaymentDeadline" TEXT NOT NULL,
    "fullPaymentRequirement" TEXT NOT NULL,
    "departureLocation" TEXT NOT NULL,
    "departureTime" TEXT NOT NULL,
    "returnTime" TEXT NOT NULL,
    "includes" TEXT[],
    "gallery" TEXT[],
    "participantsLimit" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TourPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Itinerary" (
    "id" SERIAL NOT NULL,
    "stop" TEXT NOT NULL,
    "activities" TEXT[],
    "tourPackageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Itinerary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "tourPackageId" INTEGER NOT NULL,
    "participantType" "ParticipantType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Itinerary" ADD CONSTRAINT "Itinerary_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_tourPackageId_fkey" FOREIGN KEY ("tourPackageId") REFERENCES "TourPackage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
