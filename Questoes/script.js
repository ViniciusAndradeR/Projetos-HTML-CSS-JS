const btns = document.querySelectorAll('.questao-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let questao = e.currentTarget.parentElement.parentElement; // buscar o elemento pai do pai
        questao.classList.toggle('exibir-texto');

    })
})