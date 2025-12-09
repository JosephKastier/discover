-- CreateTable
CREATE TABLE "BeerTest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "link" TEXT,
    "beerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BeerTest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BeerTest_beerId_idx" ON "BeerTest"("beerId");

-- AddForeignKey
ALTER TABLE "BeerTest" ADD CONSTRAINT "BeerTest_beerId_fkey" FOREIGN KEY ("beerId") REFERENCES "Beer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
