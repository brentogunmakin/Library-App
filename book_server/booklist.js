const express = require('express');


const app = express();

const connectionport = 3000;

app.use(express.json());

app.get('/api/books', (req, res) => {

})

app.get('/api/books/:bookID', (req, res) => {
    
})