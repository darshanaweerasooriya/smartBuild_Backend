const express = require('express');
const body_parser = require('body-parser');
const bodyParser = require('body-parser');
const userRouter = require("./router/user.route");
const supplier = require("./router/supplier.route")
const addproduct = require("./router/addProduct.route")
const paymentRoute = require("./router/payment.route")
const jobRoute = require("./router/jobPosting.router")
const workerRoute = require("./router/addWorkers.route")
const designRouter = require("./router/interiorDesign.router")
require('./config/db');
const app =express();





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/',userRouter);
app.use('/',supplier);
app.use('/',addproduct);
app.use('/api/payment', paymentRoute);
app.use('/',jobRoute);
app.use('/',workerRoute);
app.use('/',designRouter);


app.get('/api/', (req, res) => {
    res.json({ message: 'Hello from the app.js route! '});

});

module.exports = app; 