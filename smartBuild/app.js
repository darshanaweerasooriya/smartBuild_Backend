const express = require('express');
const body_parser = require('body-parser');
const bodyParser = require('body-parser');


const app =express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the app.js route! '});

});

module.exports = app;