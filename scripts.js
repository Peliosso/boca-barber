document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'Bocão' && password === 'eoboca') {
                window.location.href = 'admin.html'; // Redireciona para a página de administração após o login bem-sucedido
            } else {
                alert('Usuário ou senha incorretos!');
            }
        });
    }

    const form = document.getElementById('appointment-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            const appointment = {
                name,
                phone,
                service,
                date,
                time
            };

            let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            appointments.push(appointment);
            localStorage.setItem('appointments', JSON.stringify(appointments));

            alert('Agendamento realizado com sucesso!');
            form.reset();
        });
    }
});

function highlightItem(item) {
    // Remove a classe "highlight" de todos os itens do catálogo
    var items = document.querySelectorAll('.catalog-item');
    items.forEach(function(element) {
        element.classList.remove('highlight');
    });

    // Adiciona a classe "highlight" apenas ao item clicado
    item.classList.add('highlight');
}

function highlightItem(item) {
    // Remove a classe "highlight" de todos os itens do catálogo
    var items = document.querySelectorAll('.catalog-item');
    items.forEach(function(element) {
        element.classList.remove('highlight');
    });

    // Adiciona a classe "highlight" apenas ao item clicado
    item.classList.add('highlight');
}

function highlightItem(item) {
    // Remove a classe "highlight" de todos os itens do catálogo
    var items = document.querySelectorAll('.catalog-item');
    items.forEach(function(element) {
        element.classList.remove('highlight');
    });

    // Adiciona a classe "highlight" apenas ao item clicado
    item.classList.add('highlight');

    // Exibir informações do produto destacado
    var title = item.querySelector('h3').innerText;
    var description = item.querySelector('p:nth-of-type(1)').innerText;
    var price = item.querySelector('p:nth-of-type(2)').innerText;

    console.log("Título: " + title);
    console.log("Descrição: " + description);
    console.log("Preço: " + price);
}

function expandItem(element) {
    element.classList.toggle("expand");
}
