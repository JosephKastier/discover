-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brewery" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "abv" REAL NOT NULL,
    "ibu" INTEGER,
    "description" TEXT,
    "imageUrl" TEXT,
    "position" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Beer_position_key" ON "Beer"("position");

-- CreateIndex
CREATE INDEX "Beer_position_idx" ON "Beer"("position");
