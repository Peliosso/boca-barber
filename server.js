const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Rota para lidar com os agendamentos
app.post('/agendamentos', (req, res) => {
    const { name, phone, service, date, time } = req.body;
    console.log('Novo agendamento:');
    console.log('Nome:', name);
    console.log('Telefone:', phone);
    console.log('Serviço:', service);
    console.log('Data:', date);
    console.log('Hora:', time);

    res.json({ message: 'Agendamento recebido com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
