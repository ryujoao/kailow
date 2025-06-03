/*
  Warnings:

  - Added the required column `userId` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `login` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `description` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Publicar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `legenda` VARCHAR(191) NOT NULL,
    `anexar` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Login` ADD CONSTRAINT `Login_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicar` ADD CONSTRAINT `Publicar_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
