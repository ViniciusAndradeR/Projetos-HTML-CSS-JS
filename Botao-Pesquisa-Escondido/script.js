const barraPesquisa = document.querySelector('.barra-pesquisa');
const botao = document.querySelector('.btn');
const input = document.querySelector('.input');

botao.addEventListener('click', function() {
    barraPesquisa.classList.toggle('ativo');
    input.focus();
})