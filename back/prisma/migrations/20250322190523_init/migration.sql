/*
  Warnings:

  - You are about to drop the column `faixa_etaria` on the `Profissional` table. All the data in the column will be lost.
  - Added the required column `valor` to the `Atendimento` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Faixa_etaria" AS ENUM ('CRIANÇA', 'ADOLECENTE', 'JOVEM', 'ADULTO', 'IDOSO');

-- AlterTable
ALTER TABLE "Atendimento" ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Profissional" DROP COLUMN "faixa_etaria",
ADD COLUMN     "faixas_etarias" "Faixa_etaria"[];
