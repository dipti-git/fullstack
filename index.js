// Importing Express Library

const express = require('express');

//Creating express app instance
//(main server object that listens for requests and response)
const app = express();

// defined the PORT where server will run
const PORT = 3000;
//allows API to read JSON data in the body of POST and PUT requests
app.use(express.json());

//Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the API 101!!!')
});

app.get('/books', (req, res) => res.json([
    { id: 1, title: 'The Courage to be disliked' },
    { id: 2, title: "Let Them By Mel Robbins" }
]));

app.post('/books', (req, res) => res.status(201).send('Book Added'));

app.put('/books/:id', (req, res) => res.send(`Book with ID ${req.params.id} updated`));


app.delete('/books/:id', (req, res) => res.send(`Book with ID ${req.params.id} deleted`));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

