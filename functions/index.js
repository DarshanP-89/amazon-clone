const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51LOAwAArJnNnGs7MBkpReN6alee8O5NR3OR5J3rOvjhPIkaipQnwbdgdOSEEGLiqPM4uRAksFtQD6K373TNTyvuX00aNrr3Tmu');

//API


//-App Config
const app = express();


//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API Routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment received for the amount of>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//-Listen Commands 
exports.api = functions.https.onRequest(app)

//Example Endpoint
// http://localhost:5001/clone-c1802/us-central1/api