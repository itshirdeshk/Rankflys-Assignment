-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "option3" TEXT NOT NULL,
    "option4" TEXT NOT NULL,
    "correct" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
