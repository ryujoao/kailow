/*
  Warnings:

  - You are about to drop the column `publicarPerfilId` on the `publicar` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `publicar` DROP FOREIGN KEY `Publicar_publicarPerfilId_fkey`;

-- AlterTable
ALTER TABLE `publicar` DROP COLUMN `publicarPerfilId`;

-- AlterTable
ALTER TABLE `publicarperfil` ADD COLUMN `publicarId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `PublicarPerfil` ADD CONSTRAINT `PublicarPerfil_publicarId_fkey` FOREIGN KEY (`publicarId`) REFERENCES `Publicar`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
