/*
  Warnings:

  - You are about to drop the column `contactId` on the `Tag` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_ContactToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ContactToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ContactToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);
INSERT INTO "new_Tag" ("id", "value") SELECT "id", "value" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE UNIQUE INDEX "Tag_value_key" ON "Tag"("value");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ContactToTag_AB_unique" ON "_ContactToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ContactToTag_B_index" ON "_ContactToTag"("B");
