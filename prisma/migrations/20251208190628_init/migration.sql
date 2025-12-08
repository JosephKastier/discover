-- CreateTable
CREATE TABLE "Beer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brewery" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "abv" DOUBLE PRECISION NOT NULL,
    "ibu" INTEGER,
    "description" TEXT,
    "imageUrl" TEXT,
    "position" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Beer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Beer_position_key" ON "Beer"("position");

-- CreateIndex
CREATE INDEX "Beer_position_idx" ON "Beer"("position");
