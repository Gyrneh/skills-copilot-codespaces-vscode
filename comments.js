//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

//Use body parser to parse request body
app.use(bodyParser.json());

//Create array to store comments
let comments = [];

//Create POST endpoint to add comments
app.post('/comments', (req, res) => {
    comments.push(req.body);
    console.log(req.body);
    res.status(201).send(req.body);
});

//Create GET endpoint to get comments
app.get('/comments', (req, res) => {
    res.status(200).send(comments);
});

//Start server
app.listen(port, () => console.log(`Server started on port ${port}`));