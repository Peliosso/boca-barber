function submitForm(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const formData = { name, phone, service, date, time };

    fetch('http://localhost:3000/agendamentos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Agendamento realizado com sucesso!');
        document.getElementById('appointment-form').reset();
    })
    .catch(error => {
        console.error('Erro ao agendar horário:', error);
        alert('Erro ao agendar horário. Por favor, tente novamente mais tarde.');
    });
}
