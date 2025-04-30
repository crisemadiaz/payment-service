const paymentModel=require('../models/paymentModel');

//crear nuevo pago
const createPayment = (req, res) => {
    const {order_id, amount, payment_method, status} = req.body;

    //validación básica
    if(!order_id || !amount || !payment_method || !status){
        return res.status(400).json({error: 'Campos requeridos: order_id, amount, payment_method, status'});
    }

    //crear pago
    paymentModel.createPayment(order_id, amount, payment_method, status, (err, result) => {
        if(err) return res.status(500).json({error: 'Error al crear el pago'});
        res.status(201).json({message: 'Pago creado con éxito', paymentId: result.insertedId});
    });
};

//obtener todos los pagos
const getAllPayments = (req, res) => {
    paymentModel.getAllPayments((err, results) =>{
        if(err) return res.status(500).json({error: 'Error al obtener los pagos'});
        res.status(200).json({payments: results});
    });
;}

//obtener pago por id
const getPaymentById = (req, res) => {
    const { id } = req.params;

    //validar id
    if(!id){
        return res.status(400).json({error: 'ID del pago es requerido'});
    }

    paymentModel.getPaymentById(id, (err, result) => {
        if(err) return res.status(500).json({error: 'Error al obtener el pago'});
        if(result.length === 0) return res.status(400).json({error: 'Pago no encontrado'});
        res.status(200).json({order: result[0]});
    });
};

//modificar pago
const updatePayment = (req, res) => {
    const { id } = req.params;
    const {order_id, amount, payment_method, status} = req.body;

    //validación básica
    if(!order_id || !amount || !payment_method || !status){
        return res.status(400).json({error: 'Los campos order_id, amount, payment_method, status son requeridos'});
    }

    paymentModel.updatePayment(id, order_id, amount, payment_method, status, (err, result) => {
        if(err) return res.status(500).json({error: 'Error al modificar el paago'});
        if(result.affectedRows === 0) return res.status(400).json({error: 'Pago no encontrado'});

        res.status(200).json({message: 'Pago modificado con éxito'});
    });
};

//eliminar pago
const deletePayment = (req, res) => {
    const { id } = req.params;

    //validar id
    if(!id){
        return res.status(400).json({error: 'El ID del pago es requerido'});
    }

    paymentModel.deletePayment(id, (err, result) => {
        if (err) return res.status(500).json({error: 'Error al eliminar el pago'});
        if (result.affectedRows === 0) return res.status(400).json({error: 'No se encontró el pago'});

        res.status(200).json({message: 'Pago eliminado correctamente'});
    });
};

module.exports = {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePayment,
    deletePayment
};