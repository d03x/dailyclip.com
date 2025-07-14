-- CreateTable
CREATE TABLE "Topics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "slug" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Topics_pkey" PRIMARY KEY ("id")
);
