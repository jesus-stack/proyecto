const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51K1WGSFrzYsUbyY051AiRmiCJXSuWEaDggDTGSLJnZu9zfEAopb7CBz5tJahXvZ5OhPzlQPYNw9VdyF3hDpPEm5b00dpbUpwqA');


router.post('/', async (req, res)=>{
console.log(req.body);
const customers = await stripe.customers.create({
    email: req.body.pago.email,
    source: req.body.pago.id
});

const pago = await stripe.charges.create({
amount: req.body.cantidad*100,
currency:'usd',
customer: customers.id,
description: 'pago tiquetes'
})
});

module.exports = router;