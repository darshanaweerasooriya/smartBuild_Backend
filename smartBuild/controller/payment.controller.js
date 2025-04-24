const stripe = require('../config/stripe');
const Payment = require('../model/payment.model'); 

exports.createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            automatic_payment_methods: { enabled: true }, 
        });

        const paymentRecord = new Payment({ 
            paymentIntentId: paymentIntent.id,
            amount:          paymentIntent.amount,
            currency:        paymentIntent.currency,
            status:          paymentIntent.status,
        });

        await paymentRecord.save();

        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};