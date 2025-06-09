-- DropForeignKey
ALTER TABLE `login` DROP FOREIGN KEY `Login_userId_fkey`;

-- DropForeignKey
ALTER TABLE `publicar` DROP FOREIGN KEY `Publicar_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `verificado` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `Login` ADD CONSTRAINT `Login_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicar` ADD CONSTRAINT `Publicar_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
