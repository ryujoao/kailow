/*
  Warnings:

  - Added the required column `userId` to the `EditarPerfil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `editarperfil` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `login` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Login` ADD CONSTRAINT `Login_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EditarPerfil` ADD CONSTRAINT `EditarPerfil_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
