const express = require('express');
const body_parser = require('body-parser');
const bodyParser = require('body-parser');
const userRouter = require("./router/user.route");
const supplier = require("./router/supplier.route")
const addproduct = require("./router/addProduct.route")


require('./config/db');
const app =express();





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/',userRouter);
app.use('/',supplier);
app.use('/',addproduct);


app.get('/api/', (req, res) => {
    res.json({ message: 'Hello from the app.js route! '});

});

module.exports = app;