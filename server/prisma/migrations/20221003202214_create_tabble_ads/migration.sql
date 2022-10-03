-- CreateTable
CREATE TABLE `ads` (
    `id` VARCHAR(191) NOT NULL,
    `gamesId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `yearsPlaying` INTEGER NOT NULL,
    `discord` VARCHAR(191) NOT NULL,
    `weekDays` VARCHAR(191) NOT NULL,
    `hourStart` INTEGER NOT NULL,
    `hourEnd` INTEGER NOT NULL,
    `useVoiceChannel` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ads` ADD CONSTRAINT `ads_gamesId_fkey` FOREIGN KEY (`gamesId`) REFERENCES `games`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
