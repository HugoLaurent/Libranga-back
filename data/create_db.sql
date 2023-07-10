DROP TABLE IF EXISTS "comment";
DROP TABLE IF EXISTS "article";
DROP TABLE IF EXISTS "category";
DROP TABLE IF EXISTS "user";

CREATE TABLE IF NOT EXISTS "user" (
    "user_id" SERIAL PRIMARY KEY,
    "pseudo" VARCHAR(128),
    "firstname" VARCHAR(128),
    "lastname" VARCHAR(128),
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "age" INTEGER,
    "role" INTEGER
);

INSERT INTO "user" ("pseudo", "firstname", "lastname", "email", "password", "age", "role") VALUES
('shoume', 'hugo', 'laurent', 'fake@email.com', 'qsdqsdf554', 18, 1),
('Mikers', 'mike', 'mike', 'doublefake@email.com', 'qsdqsdf554', 16, 1),
('Devcont', 'romain', 'lecon', 'triplefake@email.com', 'qsdqsdf554', 52, 1);

CREATE TABLE IF NOT EXISTS "article" (
    "article_id" SERIAL PRIMARY KEY,
    "title" VARCHAR(128),
    "content" VARCHAR(255),
    "likes" INTEGER,
    "edited" BOOLEAN,
    "user_id" INTEGER
);

INSERT INTO "article" ("title", "content", "likes", "edited", "user_id") VALUES
('titre1', 'contenu1', 0, false, 1),
('titre2', 'contenu2', 0, false, 2),
('titre3', 'contenu3', 0, false, 3),
('titre4', 'contenu4', 0, false, 2),
('titre5', 'contenu5', 0, false, 2),
('titre6', 'contenu6', 0, false, 3),
('titre7', 'contenu7', 0, false, 3),
('titre8', 'contenu8', 0, false, 3),
('titre9', 'contenu9', 0, false, 3);

CREATE TABLE IF NOT EXISTS "comment" (
    "comment_id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255),
    "content" VARCHAR(255),
    "likes" INTEGER,
    "user_id" INTEGER,
    "article_id" INTEGER
);

INSERT INTO "comment" ("title", "content", "likes", "user_id", "article_id") VALUES
('titre1', 'contenu1', 0, 1, 1),
('titre2', 'contenu2', 0, 2, 2),
('titre3', 'contenu3', 0, 3, 3);

CREATE TABLE IF NOT EXISTS "category" (
    "category_id" SERIAL PRIMARY KEY,
    "name" VARCHAR(128),
    "limit" INTEGER
);

INSERT INTO "category" ("category_id", "name", "limit") VALUES
(1, 'categorie1', 3),
(2, 'categorie2', 3),
(3, 'categorie3', 3);
