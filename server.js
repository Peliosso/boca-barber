const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para lidar com os agendamentos
app.post('/agendamentos', (req, res) => {
    const { name, phone, service, date, time } = req.body;
    // Aqui você pode processar os dados do agendamento como quiser
    console.log('Novo agendamento:');
    console.log('Nome:', name);
    console.log('Telefone:', phone);
    console.log('Serviço:', service);
    console.log('Data:', date);
    console.log('Hora:', time);

    // Aqui você pode salvar os dados em um banco de dados, enviar e-mails, etc.

    res.json({ message: 'Agendamento recebido com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
