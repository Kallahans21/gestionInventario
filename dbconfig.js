const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'contrasena',
    server: '127.0.0.1\\SQLEXPRESS',   // O localhost si prefieres
    database: 'inventario_Ventas',
    options: {
        encrypt: true,
        trustServerCertificate: true,
        connectTimeout: 30000          // Aumenta el tiempo de espera a 30 segundos
    }
};

async function connectDB() {
    try {
        await sql.connect(config);
        console.log('Conexión a SQL Server exitosa');
    } catch (err) {
        console.error('Error conectando a SQL Server', err);
    }
}

module.exports = {
    sql,
    connectDB
};
