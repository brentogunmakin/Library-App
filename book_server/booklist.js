let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var book = require('./db_handler/book.js');

let app = express();

let connectionport = 3000;

let mongoUrl = 'mongodb://database/docker_test';
mongoose.connect(mongoUrl, {server: {reconnectTries: Number.MAX_VALUE}});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/bookviewer'));

app.use(bodyParser());

app.get('/api/books', (req, res) => {
    book.find({}, (err, books) => {
        if (err) {
            res.render('error');
        }
        res.render('book-display', {data: books});
    });
})

console.log(`Listening on port ${connectionport}...\n`);
app.listen(connectionport)