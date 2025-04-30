const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

//crear pago
router.post('/payments', paymentController.createPayment);

//obtener todos los pagos
router.get('/payments', paymentController.getAllPayments);

//obtener pago por id
router.get('/payments:id', paymentController.getPaymentById);

//modificar pago
router.put('/payments/:id', paymentController.updatePayment);

//eliminar pago
router.delete('/payments/:id', paymentController.deletePayment);

//ruta de prueba
router.get('ping', (req, res) => {
    res.json({mesesage: 'pong desde Payment Service'});
});

module.exports = router;
