const express = require('express');
const { sql, connectDB } = require('./dbconfig');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Conectar a la base de datos al iniciar el servidor
connectDB();

// Ruta para obtener los dispositivos disponibles
app.get('/dispositivos', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM Dispositivos WHERE Estado = \'disponible\'');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error al obtener los dispositivos', err);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para obtener todos los dispositivos (historial)
app.get('/historial', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM Dispositivos');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error al obtener el historial', err);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para actualizar el estado de un dispositivo a "vendido"
app.post('/vender', async (req, res) => {
    const { id } = req.body;
    try {
        await sql.query`UPDATE Dispositivos SET Estado = 'vendido' WHERE Id = ${id}`;
        res.sendStatus(200);
    } catch (err) {
        console.error('Error al actualizar el dispositivo', err);
        res.status(500).send('Error en el servidor');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
