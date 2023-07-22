DROP TABLE IF EXISTS "comment";
DROP TABLE IF EXISTS "article";
DROP TABLE IF EXISTS "category";
DROP TABLE IF EXISTS "user";

CREATE TABLE IF NOT EXISTS "user" (
    "user_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "pseudo" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "role" INTEGER NOT NULL DEFAULT 1
);



CREATE TABLE IF NOT EXISTS "article" (
    "article_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "manga" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "likes" INTEGER DEFAULT 0,
    "edited" BOOLEAN NOT NULL DEFAULT FALSE,
    "user_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL
);



CREATE TABLE IF NOT EXISTS "comment" (
    "comment_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "likes" INTEGER DEFAULT 0,
    "user_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,
    "pseudo" TEXT NOT NULL
);



CREATE TABLE IF NOT EXISTS "category" (
    "category_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "limit" INTEGER NOT NULL
);

