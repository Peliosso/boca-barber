document.addEventListener("DOMContentLoaded", function() {
    const appointmentForm = document.getElementById("appointment-form");

    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        const appointment = {
            name,
            phone,
            service,
            date,
            time
        };

        // Envia os dados para o servidor
        fetch('http://localhost:3000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(response => response.json())
        .then(data => {
            alert("Agendamento realizado com sucesso!");
            appointmentForm.reset();
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Erro ao realizar o agendamento. Tente novamente.");
        });
    });
});
