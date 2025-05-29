/*
  Warnings:

  - Added the required column `userId` to the `Publicar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `publicar` ADD COLUMN `publicarPerfilId` INTEGER NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `PublicarPerfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `legenda` VARCHAR(191) NOT NULL,
    `anexar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Publicar` ADD CONSTRAINT `Publicar_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicar` ADD CONSTRAINT `Publicar_publicarPerfilId_fkey` FOREIGN KEY (`publicarPerfilId`) REFERENCES `PublicarPerfil`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
