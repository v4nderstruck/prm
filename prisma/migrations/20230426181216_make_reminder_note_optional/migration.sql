/*
  Warnings:

  - You are about to drop the column `noteId` on the `Reminder` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reminder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "when" DATETIME NOT NULL,
    "contactId" INTEGER,
    "taskId" TEXT NOT NULL,
    CONSTRAINT "Reminder_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Reminder_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reminder" ("contactId", "id", "taskId", "when") SELECT "contactId", "id", "taskId", "when" FROM "Reminder";
DROP TABLE "Reminder";
ALTER TABLE "new_Reminder" RENAME TO "Reminder";
CREATE UNIQUE INDEX "Reminder_taskId_key" ON "Reminder"("taskId");
CREATE TABLE "new_Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "noteContactId" INTEGER,
    "portraitId" INTEGER,
    "reminderId" TEXT,
    CONSTRAINT "Note_noteContactId_fkey" FOREIGN KEY ("noteContactId") REFERENCES "Contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Note_portraitId_fkey" FOREIGN KEY ("portraitId") REFERENCES "Contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Note_reminderId_fkey" FOREIGN KEY ("reminderId") REFERENCES "Reminder" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Note" ("id", "note", "noteContactId", "portraitId", "summary", "title") SELECT "id", "note", "noteContactId", "portraitId", "summary", "title" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
CREATE UNIQUE INDEX "Note_portraitId_key" ON "Note"("portraitId");
CREATE UNIQUE INDEX "Note_reminderId_key" ON "Note"("reminderId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
