/*
  Warnings:

  - You are about to alter the column `mfr` on the `Cereal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to alter the column `type` on the `Cereal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - A unique constraint covering the columns `[name]` on the table `Cereal` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Cereal` MODIFY `mfr` ENUM('A', 'G', 'K', 'N', 'P', 'Q', 'R') NOT NULL,
    MODIFY `type` ENUM('C', 'H') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Cereal_name_key` ON `Cereal`(`name`);
