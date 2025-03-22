/*
  Warnings:

  - You are about to drop the column `valor` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `valor` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Paciente" DROP COLUMN "valor";

-- AlterTable
ALTER TABLE "Profissional" ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;
