# Requirements Document - Libranga

## Introduction

This document serves as the requirements document for the development of a manga blog. It aims to define the features, requirements, and constraints of the project, as well as the client's expectations. 😊

## Objective

The objective of the project is to create a blog that is accessible to all visitors, with specific features for registered users. The blog will allow users to view manga articles, create their own articles, and modify/delete them. It will also include an authentication system, search functionality, and categorization of articles. 📚

## Functional Requirements

1. Article Viewing 😄
   - Non-logged-in visitors should be able to view all articles on the blog without any restrictions. 📖

2. Article Creation/Modification/Deletion 😃
   - Registered and logged-in users should be able to create new articles.
   - Users should be able to modify and delete their own articles. ✏️🗑️

3. Authentication System 🔐
   - The blog should include an authentication system with login and registration functionalities.
   - Users' passwords should be securely stored using appropriate encryption mechanisms. 🔒

4. Administrator Access 👑
   - A specific administrator access should be implemented to manage articles and users.
   - Administrators should be able to delete or modify any article and delete any user. 🛠️

5. Article Presentation 📝
   - Each article should present a preview of the text, with a link to the full article.
   - Articles should display the author's name, creation date, and category. 🗓️📌

6. Search Bar 🔍
   - Users should be able to search for articles by name or category. 🔎

7. Article Categorization 🗂️
   - Users should be able to categorize their articles during creation by choosing from predefined categories. 📂

# User Stories

- As a user, I want to be able to register and log in.
- As a user, I want to be able to update my profile information.
- As a user, I want to be able to delete my profile.

- As a user, I want to be able to create an article.
- As a user, I want to be able to modify an article.
- As a user, I want to be able to delete an article.

- As an administrator, I want to be able to create an article on behalf of a user.
- As an administrator, I want to be able to modify an article created by a user.
- As an administrator, I want to be able to delete an article created by a user.

- As an administrator, I want to be able to modify a user's profile.
- As an administrator, I want to be able to delete a user's profile.

- As an administrator, I want to be able to create a category
- As an administrator, I want to be able to modify a category.
- As an administrator, I want to be able to delete a category.


# MCD

![image](https://github.com/MiDeVShK/Libranga/assets/90903947/5c4ae828-5651-4432-98d7-d8d2a7826901)

# MLD

![image](https://github.com/MiDeVShK/Libranga/assets/90903947/3775292a-a788-4222-b736-1c44f18503ae)

# Endpoints


## Front

## Back
| URL                                | HTTP   | CONTROLLER         | METHOD         | DESCRIPTION                       |
|------------------------------------|--------|--------------------|----------------|-----------------------------------|
| /api/homepage                      | GET    | HomeController     | getAllData     | Get all the homepage's needs      |
|                                    |        |                    |                |                                   |
|                                    |        | USER               |                |                                   |
| /api/user/all                     | GET    | userController     | getAllUsers    | Get all users' data               |
| /api/user/:id                      | GET    | userController     | getUser        | Get a user's info                 |
| /api/user/create               | POST  | userController     | createUser     | Create a user's info              |
| /api/user/:id/update               | PATCH  | userController     | updateUser     | Update a user's info              |
| /api/user/:id/delete               | DELETE | userController     | deleteUser     | Delete a user's account           |
|                                    |        |                    |                |                                   |
|                                    |        | ARTICLE            |                |                                   |
| /api/article/all                   | GET    | articleController  | getAllArticles | Get all articles' data            |
| /api/article/:id                   | GET    | articleController  | getArticle     | Get an article's data             |
| /api/article/create                | POST   | articleController  | createArticle  | Create an article                  |
| /api/article/:id/update            | PATCH  | articleController  | updateArticle  | Update an article                  |
| /api/article/:id/delete            | DELETE | articleController  | deleteArticle  | Delete an article                  |
|                                    |        |                    |                |                                   |
|                                    |        | COMMENT            |                |                                   |
| /api/comment/all                   | GET    | commentController  | getAllComments | Get all comments' data             |
| /api/comment/:id                   | GET    | commentController  | getComment     | Get a comment                      |
| /api/comment/create                | POST   | commentController  | createComment  | Create a comment                   |
| /api/comment/:id/update            | PATCH  | commentController  | updateComment  | Update a comment                   |
| /api/comment/:id/delete            | DELETE | commentController  | deleteComment  | Delete a comment                   |
|                                    |        |                    |                |                                   |
|                                    |        | CATEGORY           |                |                                   |
| /api/category/all                  | GET    | categoryController | getAllCategories | Get all categories' data         |
| /api/category/:id                  | GET    | categoryController | getCategory    | Get a category                     |
| /api/category/create               | POST   | categoryController | createCategory | Create a category                  |
| /api/category/:id/update           | PATCH  | categoryController | updateCategory | Update a category                  |
| /api/category/:id/delete           | DELETE | categoryController | deleteCategory | Delete a category                  |
|                                    |        |                    |                |                                   |
|                                    |        | ADMIN              |                |                                   |
| /api/admin/user/:id/promote         | PATCH  | adminController    | promoteUser     | Promote a user as an admin          |
| /api/admin/user/:id/demote         | PATCH  | adminController    | demoteUser     | Demote a user as an admin          |
| /api/admin/user/:id/update         | PATCH  | adminController    | updateUser     | Update a user as an admin          |
| /api/admin/article/:id/update      | PATCH  | adminController    | updateArticle  | Update an article as an admin      |
| /api/admin/article/:id/delete      | DELETE  | adminController    | deleteArticle  | Delete an article as an admin      |
| /api/admin/user/:id/delete         | DELETE | adminController    | deleteUser     | Delete a user as an admin          |
| /api/admin/comment/:id/delete      | DELETE | adminController    | deleteComment  | Delete a comment as an admin       |


# Data Dictionary
| DATA         | TYPE        | CONSTRAINTS                        | DESCRIPTION                |
|--------------|-------------|------------------------------------|----------------------------|
|              |             |                                    |                            |
|              |             | TABLE USER                         |                            |
| user_id      | INTEGER     | PRIMARY KEY                        | User's ID                  |
| pseudo       | TEXT        | NOT NULL                           | User's pseudo              |
| firstname    | TEXT        | NOT NULL                           | User's firstname           |
| lastname     | TEXT        | NOT NULL                           | User's lastname            |
| email        | TEXT        | VALID EMAIL FORMAT                  | User's email               |
| password     | TEXT        | NOT NULL                           | Hashed user's password     |
| age          | INTEGER     | NOT NULL                           | User's age                 |
| role         | INTEGER     | NOT NULL                           | User's role (1: user, 2: admin) |
| created_at   | TIMESTAMPTZ | NOT NULL, DEFAULT NOW()            | User's creation date       |
| updated_at   | TIMESTAMPTZ |                                    | User's update date         |
|              |             |                                    |                            |
|              |             | TABLE ARTICLES                     |                            |
| article_id   | INTEGER     | PRIMARY KEY                        | Article's ID               |
| title        | TEXT        | NOT NULL                           | Article's title            |
| content      | TEXT        | NOT NULL                           | Article's content          |
| like         | INTEGER     |                                    | Number of likes            |
| edited       | BOOLEAN     |                                    | Indicates if article is edited |
| user_id      | INTEGER     | REFERENCE "user"("user_id")        | Link to the creator's ID   |
| created_at   | TIMESTAMPTZ | NOT NULL, DEFAULT NOW()            | Article's creation date    |
| updated_at   | TIMESTAMPTZ |                                    | Article's update date      |
|              |             |                                    |                            |
|              |             | TABLE COMMENT                      |                            |
| comment_id   | INTEGER     | PRIMARY KEY                        | Comment's ID               |
| title        | TEXT        | NOT NULL                           | Comment's title            |
| content      | TEXT        | NOT NULL                           | Comment's content          |
| like         | INTEGER     |                                    | Number of likes            |
| user_id      | INTEGER     | REFERENCE "user"("user_id")        | Link to the creator's ID   |
| article_id   | INTEGER     | REFERENCE "article"("article_id")  | Link to the article's ID   |
| created_at   | TIMESTAMPTZ | NOT NULL, DEFAULT NOW()            | Comment's creation date    |
| updated_at   | TIMESTAMPTZ |                                    | Comment's update date      |
|              |             |                                    |                            |
|              |             | TABLE CATEGORY                     |                            |
| category_id  | INTEGER     | PRIMARY KEY                        | Category's ID              |
| name         | TEXT        | NOT NULL                           | Category's name            |
| limit        | INTEGER     | NOT NULL                           | Age limit for the category |
| created_at   | TIMESTAMPTZ | NOT NULL, DEFAULT NOW()            | Category's creation date   |
| updated_at   | TIMESTAMPTZ |                                    | Category's update date     |



## Non-functional Requirements

1. Backend Technology: The backend development will be done using the Express framework. 💻

2. Security: While security will be addressed later, appropriate measures should be implemented to protect information. 🛡️

3. Deployment: Application deployment will be performed at a later stage, once development is complete. 🚀

4. User Interface: No specific design requirements have been mentioned at this time. 🎨

