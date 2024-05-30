document.addEventListener('DOMContentLoaded', function () {
    const volunteerButton = document.getElementById('volunteer-button');
    const volunteerForm = document.getElementById('volunteer-form');
    const form = document.getElementById('volunteer-signup');

    volunteerButton.addEventListener('click', function () {
        if (volunteerForm.classList.contains('hidden')) {
            volunteerForm.classList.remove('hidden');
            volunteerButton.textContent = 'Fechar Formulário';
        } else {
            volunteerForm.classList.add('hidden');
            volunteerButton.textContent = 'Quero Ser Voluntário';
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Obrigado por se inscrever como voluntário! Entraremos em contato em breve.');
        form.reset();
        volunteerForm.classList.add('hidden');
        volunteerButton.textContent = 'Quero Ser Voluntário';
    });
});