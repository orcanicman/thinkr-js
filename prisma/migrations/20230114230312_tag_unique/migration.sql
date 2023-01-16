/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Profile_tag_key" ON "Profile"("tag");
