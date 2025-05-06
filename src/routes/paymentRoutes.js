const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

//ruta de prueba
router.get('/ping', (req, res) => {
    res.json({mesesage: 'pong desde Payment Service'});
});

//crear pago
router.post('/', paymentController.createPayment);

//obtener todos los pagos
router.get('/', paymentController.getAllPayments);

//obtener pago por id
router.get('/:id', paymentController.getPaymentById);

//modificar pago
router.put('/:id', paymentController.updatePayment);

//eliminar pago
router.delete('/:id', paymentController.deletePayment);

module.exports = router;
