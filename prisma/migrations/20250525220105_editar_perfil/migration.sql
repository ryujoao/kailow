-- CreateTable
CREATE TABLE `EditarPerfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `curriculo` VARCHAR(191) NOT NULL,
    `imgUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
