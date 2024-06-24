/*
  Warnings:

  - You are about to drop the column `link_drive` on the `File` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `File_link_drive_key` ON `File`;

-- AlterTable
ALTER TABLE `File` DROP COLUMN `link_drive`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `File_slug_key` ON `File`(`slug`);
