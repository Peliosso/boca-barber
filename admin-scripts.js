<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administração - Boca Barber</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <div class="logo">Boca Barber</div>
</header>

<section class="admin">
    <h2 class="title">Agendamentos</h2>
    <div id="appointments-list" class="appointments-list">
        <!-- Lista de agendamentos gerada dinamicamente -->
    </div>
    <button id="clear-appointments" class="button">Limpar Agendamentos</button>
    <button onclick="window.history.back()" class="button">Voltar</button>
</section>

<footer>
    <p>&copy; 2024 Boca Barber. Todos os direitos reservados.</p>
</footer>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const clearButton = document.getElementById("clear-appointments");
    const appointmentsList = document.getElementById("appointments-list");

    clearButton.addEventListener("click", function() {
        // Limpa o conteúdo da lista de agendamentos
        appointmentsList.innerHTML = "";

        // Adicionalmente, se estiver armazenando os agendamentos em localStorage, limpe-os também
        localStorage.removeItem("appointments");

        // Feedback ao usuário que os agendamentos foram limpos
        alert("Todos os agendamentos foram limpos.");
    });

    // Função para carregar os agendamentos do localStorage e exibir na lista
    function loadAppointments() {
        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointmentsList.innerHTML = "";

        appointments.forEach((appointment, index) => {
            const appointmentItem = document.createElement("div");
            appointmentItem.className = "appointment-item";
            appointmentItem.innerHTML = `
                <p>Nome: ${appointment.name}</p>
                <p>Telefone: ${appointment.phone}</p>
                <p>Serviço: ${appointment.service}</p>
                <p>Data: ${appointment.date}</p>
                <p>Hora: ${appointment.time}</p>
            `;
            appointmentsList.appendChild(appointmentItem);
        });
    }

    // Carrega os agendamentos quando a página é carregada
    loadAppointments();
});

</script>

</body>
</html>
