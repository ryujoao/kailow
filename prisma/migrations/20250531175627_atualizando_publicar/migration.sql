/*
  Warnings:

  - You are about to drop the column `titulo` on the `publicar` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `publicarperfil` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `publicar` DROP COLUMN `titulo`;

-- AlterTable
ALTER TABLE `publicarperfil` DROP COLUMN `titulo`;
