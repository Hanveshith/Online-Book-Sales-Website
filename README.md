# Online Book Sales Website

Welcome to the Online Book Sales Website! This platform allows users to browse, purchase, and manage a wide range of books from our extensive catalog. Whether you're an avid reader or looking to explore new titles, our website offers a seamless and user-friendly experience.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation Instructions](#installation-instructions)
   - [Dependencies](#dependencies)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
5. [Running the Application](#running-the-application)
   - [Frontend](#frontend)
   - [Backend](#backend)
6. [Database Schema Explanation](#Database-Schema-Explanation)

---

## Overview

The Online Book Sales Website is a full-stack application developed with **React.js** for the frontend and **Node.js** with **Express.js** for the backend. The application interacts with a **MongoDB** database to manage user data and book inventory.

---

## Features

- **User Registration & Login**: Secure account creation and authentication for personalized experiences.
- **Browse Books**: Explore a diverse catalog with detailed information on each book.
- **Shopping Cart**: Add, update, or remove items with ease.
- **Order History**: Access and manage your past purchases at any time.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js & Express.js
- **Database**: MongoDB

---

## Installation Instructions

### Dependencies

To set up the project, you'll need to install dependencies for both the frontend and backend.

#### Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
npm install
```

#### Backend Setup

Navigate to the backend directory:

```bash
cd backend
npm install
```

## Running the Application
### Frontend
Once the dependencies are installed, start the frontend:
```bash
cd frontend
npm start
```
The frontend will be accessible at http://localhost:3000.

### Backend
Start the backend server:
```bash
cd backend
npm start
```
The backend will be running on http://localhost:5000.

---
### Database Schema Explanation
![Database Schema]([https://github.com/Hanveshith/Online-Book-Sales-Website/blob/main/Db.png]))

### Entities and Relationships
1. User
   - Id (PK): Primary Key
   - FirstName: User's first name
   - LastName: User's last name
   - Email: User's email address
   - Mobile: User's mobile number
   - State: User's state
   - City: User's city
   - Address: User's full address
   - CityPin: City pin code
   - Password: Encrypted password
   - Role: User role (e.g., admin, customer)
2. Books
      - Id (PK): Primary Key
      - BookTitle: Title of the book
      - BookDescription: Description of the book
      - BookAuthor: Author of the book
      - BookPublisher: Publisher of the book
      - BookCategories: Categories of the book
      - BookPrice: Price of the book
      - BookYear: Year of publication
      - BookLanguage: Language of the book
      - BookOfferPrice: Any special offers or discounts
      - BookRating: Rating of the book
      - Stock: Available stock of the book
3. Orders
   - Id (PK): Primary Key
   - id(User(fk)): Foreign Key linking to User
   - id(Book(fk)): Foreign Key linking to Books
   - Quantity: Number of books purchased
   - PaymentStatus: Status of the payment (e.g., pending, completed)
4. Cart
   - Id (PK): Primary Key
   - id(User(fk)): Foreign Key linking to User
   - id(Book(fk)): Foreign Key linking to Books
   - Quantity: Quantity of books in the cart
5. BookNotification
   - id (PK): Primary Key
   - id(User(fk)): Foreign Key linking to User
   - id(Book(fk)): Foreign Key linking to Books

## Explanation of Relationships
- User can place multiple Orders and have multiple Cart items.
- Each Order and Cart entry refers to a Book, ensuring that the relationship between books and transactions is maintained.
BookNotification acts as a relationship between users and books, likely to track notifications or alerts about book updates or promotions.


This schema forms the backbone of the Online Book Sales Website, allowing seamless management of user interactions, book listings, and order tracking.


