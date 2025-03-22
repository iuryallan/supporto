/*
  Warnings:

  - You are about to drop the column `valor` on the `Atendimento` table. All the data in the column will be lost.
  - Added the required column `valor` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Atendimento" DROP COLUMN "valor";

-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;
