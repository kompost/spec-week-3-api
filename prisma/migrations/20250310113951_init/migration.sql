-- CreateTable
CREATE TABLE `Cereal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `mfr` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `calories` INTEGER NOT NULL,
    `protein` INTEGER NOT NULL,
    `fat` INTEGER NOT NULL,
    `sodium` INTEGER NOT NULL,
    `fiber` DOUBLE NOT NULL,
    `carbo` DOUBLE NOT NULL,
    `sugars` INTEGER NOT NULL,
    `potass` INTEGER NOT NULL,
    `vitamins` INTEGER NOT NULL,
    `shelf` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `cups` DOUBLE NOT NULL,
    `rating` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
