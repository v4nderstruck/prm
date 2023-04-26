/*
  Warnings:

  - You are about to drop the column `key` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `reason` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `Dislike` table. All the data in the column will be lost.
  - You are about to drop the column `reason` on the `Dislike` table. All the data in the column will be lost.
  - Added the required column `what` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `why` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `what` to the `Dislike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `why` to the `Dislike` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Like" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "what" TEXT NOT NULL,
    "why" TEXT NOT NULL,
    "contactId" INTEGER,
    CONSTRAINT "Like_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Like" ("contactId", "id") SELECT "contactId", "id" FROM "Like";
DROP TABLE "Like";
ALTER TABLE "new_Like" RENAME TO "Like";
CREATE TABLE "new_Dislike" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "what" TEXT NOT NULL,
    "why" TEXT NOT NULL,
    "contactId" INTEGER,
    CONSTRAINT "Dislike_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Dislike" ("contactId", "id") SELECT "contactId", "id" FROM "Dislike";
DROP TABLE "Dislike";
ALTER TABLE "new_Dislike" RENAME TO "Dislike";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
