# Day 1 – Intro to REST API with Express.js

This project is a basic REST API built with **Node.js** and **Express.js**. It demonstrates how RESTful routes and HTTP methods work using a simple `/books` example.

---

##  What is an API?

An **API (Application Programming Interface)** is a way for different parts of software to talk to each other. In web development, **REST APIs** allow clients (like browsers or apps) to send and receive data over the internet using HTTP.

For example:  
A client sends a request ➝ the server responds with data or a message.

---

##  Common HTTP Methods

| Method | Purpose       | Example                     |
|--------|---------------|-----------------------------|
| GET    | Read data     | View a list of books        |
| POST   | Create data   | Add a new book              |
| PUT    | Update data   | Edit a book’s information   |
| DELETE | Delete data   | Remove a book               |

---

## Features in This Project

- Sets up a local Express.js server
- Handles basic routing for `/books`
- Demonstrates GET, POST, PUT, DELETE
- Uses JSON as the data format (no real database yet)

---

## API Endpoints
- Route	Method	Description
- /	GET	Returns a welcome message
- /books	GET	Returns a list of books
- /books	POST	Adds a book (dummy only)
- /books/:id	PUT	Updates a book by ID
- /books/:id	DELETE	Deletes a book by ID

##  Notes
- The server listens on port 3000
- JSON body parsing is enabled using express.json()
- This is a mock API — it doesn’t use a real database yet
- Data changes (POST/PUT/DELETE) are not persistent
