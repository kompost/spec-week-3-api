/*
  Warnings:

  - You are about to alter the column `rating` on the `Cereal` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Cereal` MODIFY `rating` VARCHAR(191) NOT NULL;
