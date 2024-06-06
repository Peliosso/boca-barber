const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let appointments = [];

// Endpoint para obter todos os agendamentos
app.get('/appointments', (req, res) => {
    res.json(appointments);
});

// Endpoint para adicionar um novo agendamento
app.post('/appointments', (req, res) => {
    const appointment = req.body;
    appointments.push(appointment);
    res.status(201).json(appointment);
});

// Endpoint para limpar todos os agendamentos
app.delete('/appointments', (req, res) => {
    appointments = [];
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
