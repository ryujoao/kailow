/*
  Warnings:

  - You are about to drop the `editarperfil` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `editarperfil`;
