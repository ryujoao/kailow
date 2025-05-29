/*
  Warnings:

  - Added the required column `userId` to the `Login` table without a default value. This is not possible if the table is not empty.
  - Made the column `publicarId` on table `publicarperfil` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `publicarperfil` DROP FOREIGN KEY `PublicarPerfil_publicarId_fkey`;

-- AlterTable
ALTER TABLE `login` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `publicarperfil` MODIFY `publicarId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `EditarPerfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Login` ADD CONSTRAINT `Login_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PublicarPerfil` ADD CONSTRAINT `PublicarPerfil_publicarId_fkey` FOREIGN KEY (`publicarId`) REFERENCES `Publicar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
