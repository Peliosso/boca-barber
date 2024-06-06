document.addEventListener("DOMContentLoaded", function() {
    const clearButton = document.getElementById("clear-appointments");
    const appointmentsList = document.getElementById("appointments-list");

    clearButton.addEventListener("click", function() {
        // Limpa o conteúdo da lista de agendamentos
        appointmentsList.innerHTML = "";

        // Remove os agendamentos do servidor
        fetch('http://localhost:3000/appointments', {
            method: 'DELETE'
        })
        .then(() => {
            alert("Todos os agendamentos foram limpos.");
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Erro ao limpar os agendamentos. Tente novamente.");
        });
    });

    // Função para carregar os agendamentos do servidor e exibir na lista
    function loadAppointments() {
        fetch('http://localhost:3000/appointments')
        .then(response => response.json())
        .then(appointments => {
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
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Erro ao carregar os agendamentos. Tente novamente.");
        });
    }

    // Carrega os agendamentos quando a página é carregada
    loadAppointments();
});
