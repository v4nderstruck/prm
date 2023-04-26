/*
  Warnings:

  - Added the required column `taskId` to the `Reminder` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reminder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "when" DATETIME NOT NULL,
    "noteId" TEXT NOT NULL,
    "contactId" INTEGER,
    "taskId" TEXT NOT NULL,
    CONSTRAINT "Reminder_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reminder_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Reminder_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reminder" ("contactId", "id", "noteId", "when") SELECT "contactId", "id", "noteId", "when" FROM "Reminder";
DROP TABLE "Reminder";
ALTER TABLE "new_Reminder" RENAME TO "Reminder";
CREATE UNIQUE INDEX "Reminder_noteId_key" ON "Reminder"("noteId");
CREATE UNIQUE INDEX "Reminder_taskId_key" ON "Reminder"("taskId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
