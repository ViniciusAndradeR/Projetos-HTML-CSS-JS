const modal = document.querySelector('.modal-overlay');
const modalBtn = document.querySelector('.modal-btn');
const fecharBtn = document.querySelector('.fechar-btn');

modalBtn.addEventListener('click', function() {
    modal.classList.add('open-modal');
})

fecharBtn.addEventListener('click', function() {
    modal.classList.remove('open-modal')
})