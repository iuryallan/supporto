/*
  Warnings:

  - Added the required column `email_contato` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `especialidade` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "email_contato" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profissional" ADD COLUMN     "especialidade" TEXT NOT NULL;
