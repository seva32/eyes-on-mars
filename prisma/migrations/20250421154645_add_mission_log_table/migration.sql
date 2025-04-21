-- CreateTable
CREATE TABLE "MissionLog" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "MissionLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LogPhotos" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_LogPhotos_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "MissionLog_slug_key" ON "MissionLog"("slug");

-- CreateIndex
CREATE INDEX "_LogPhotos_B_index" ON "_LogPhotos"("B");

-- AddForeignKey
ALTER TABLE "MissionLog" ADD CONSTRAINT "MissionLog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LogPhotos" ADD CONSTRAINT "_LogPhotos_A_fkey" FOREIGN KEY ("A") REFERENCES "FavoritePhoto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LogPhotos" ADD CONSTRAINT "_LogPhotos_B_fkey" FOREIGN KEY ("B") REFERENCES "MissionLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
