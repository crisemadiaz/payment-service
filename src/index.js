const express = require('express');
const cors = require('cors');
require('dotenv').config();
const paymentRoutes = require('./routes/paymentRoutes');
require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/app/payment', paymentRoutes);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () =>{
    console.log(`Payment Service escuchando en el puerto ${PORT}`);
});