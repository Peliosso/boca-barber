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

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === 'Bocão' && password === 'eoboca') {
        window.location.href = 'admin.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
