import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config()
const { Pool } = pkg;

const config_db = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
};

const pool = new Pool(config_db);

function testConnection() {
    pool.connect((err, client, release) => {
        if (err) {
            return console.error('Error conectando a PostgreSQL:', err.stack);
        }
        console.log('Conectado a PostgreSQL en puerto 5432');
        release();
    });
}

export { pool, testConnection };