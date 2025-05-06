const mysql = require('mysql2');
require('dotenv').config();

const connectWithRetry = () => {
    const connection = mysql.createConnection({
        host: process.env.PAYMENT_DB_HOST || 'mariadb-payment',
        user: process.env.PAYMENT_DB_USER,
        password: process.env.PAYMENT_DB_PASSWORD,
        database: process.env.PAYMENT_DB_NAME || 'paymentdb',
        port:3306,
    });

    connection.connect((err) => {
        if(err){    
            console.error('❌ Error de conexión a la DB:',err.message);
        }else{
            console.log('✅ Conectado a MariaDB - Base de datos payment_db');
        }
    });

    return connection;
};

const connection=connectWithRetry();
module.exports=connection;