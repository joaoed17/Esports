/*
  Warnings:

  - You are about to alter the column `weekDays` on the `ads` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `ads` MODIFY `weekDays` JSON NOT NULL;
