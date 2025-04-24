const express = require('express');
const router = express.Router();
const paymentController = require('../controller/payment.controller');

router.post('/create-payment-intent', paymentController.createPaymentIntent);

module.exports = router;
