const mysql = require('mysql2');
require('dotenv').config();

const connectWithRetry = () => {
    const connection = mysql.createConnection({
        host: process.env.DBHOST || 'mariadb-payment',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
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