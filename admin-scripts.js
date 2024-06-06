document.addEventListener("DOMContentLoaded", function() {
    const clearButton = document.getElementById("clear-appointments");
    const appointmentsList = document.getElementById("appointments-list");

    clearButton.addEventListener("click", function() {
        appointmentsList.innerHTML = "";
        localStorage.removeItem("appointments");
        alert("Todos os agendamentos foram limpos.");
    });

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

    loadAppointments();
});
