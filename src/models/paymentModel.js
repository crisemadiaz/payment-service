const db = require('../db');

//crear un nuevo pago
const createPayment = (order_id, amount, payment_method, status, callback) => {
    const sql='INSERT INTO payments (order_id, amount, payment_method, status) VALUES (?,?,?,?)';
    db.query(sql,[order_id, amount, payment_method, status], callback);
};

//obtener todos los pagos
const getAllPayments = (callback) => {
    const sql = 'SELECT * FROM payments';
    db.query(sql, callback);
};

//obtener pago por id
const getPaymentById = (id, callback) => {
    const sql = 'SELECT * FROM payments WHERE id=?';
    db.query(sql,[id], callback);
};

//actualizar pago por id
const updatePayment = (id, order_id, amount, payment_method, status, callback) => {
    const sql = 'UPDATE payments SET order_id = ?, amount = ?, payment_method = ?, status = ? WHERE id = ?';
    db.query(sql, [order_id, amount, payment_method, status], callback);
};

//eliminar pago 
const deletePayment = (id, callback) => {
    const sql = 'DELETE FROM payments WHERE id = ?';
    sql.query(sql,[id], callback);
};

module.exports = {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePayment,
    deletePayment
};