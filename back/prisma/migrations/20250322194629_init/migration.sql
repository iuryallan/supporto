/*
  Warnings:

  - The values [ADOLECENTE] on the enum `Faixa_etaria` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Faixa_etaria_new" AS ENUM ('CRIANÇA', 'ADOLESCENTE', 'JOVEM', 'ADULTO', 'IDOSO');
ALTER TABLE "Profissional" ALTER COLUMN "faixas_etarias" TYPE "Faixa_etaria_new"[] USING ("faixas_etarias"::text::"Faixa_etaria_new"[]);
ALTER TYPE "Faixa_etaria" RENAME TO "Faixa_etaria_old";
ALTER TYPE "Faixa_etaria_new" RENAME TO "Faixa_etaria";
DROP TYPE "Faixa_etaria_old";
COMMIT;
