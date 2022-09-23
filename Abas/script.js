const conteudo = [
    {
        titulo: "História",
        descricao: "Esta empresa surgiu em 2013 ao nos depararmos com a in delectus distinctio nisi tempore dicta praesentium temporibus animi? Odit, sunt sed. Iste et recusandae ratione consectetur!"
    },
    {
        titulo: "Visão",
        descricao: "Sempre tivemos uma visão ampla do mercado, julgamos cada tendência de acordo illo dolorum voluptate ab. Debitis nihil culpa ipsam harum dolore numquam saepe, expedita provident dolores rerum officia commodi, nam quod, dolorum cupiditate."
    },
    {
        titulo: "Objetivos",
        descricao: "Nossas objetivos sempre estiveram ao nosso alcance e com nossos queridos at dolore iste repudiandae fuga explicabo mollitia architecto quaerat voluptas optio. Eius praesentium fugiat earum obcaecati! Itaque, fugit ducimus?"
    }
];

const botoes = document.querySelectorAll('.aba');
const tituloAba = document.getElementById('titulo-aba');
const descricaoAba = document.getElementById('descricao-aba');

window.addEventListener('DOMContentLoaded', function() {
    alterarConteudo('História');
})

botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        if(botao.classList.contains('historia')) {
            alterarConteudo('História');
            alterarAbaAtiva(botoes, botao);
        }
        else if(botao.classList.contains('visao')) {
            alterarConteudo('Visão');
            alterarAbaAtiva(botoes, botao);
        }
        else if(botao.classList.contains('objetivos')) {
            alterarConteudo('Objetivos');
            alterarAbaAtiva(botoes, botao);
        }
    })
})

function alterarConteudo(cont) {
    for(let i = 0; i < conteudo.length; i++) {
        if(conteudo[i].titulo === cont) {
            tituloAba.innerHTML = conteudo[i].titulo;
            descricaoAba.innerHTML = conteudo[i].descricao;
        }
    }
}

function alterarAbaAtiva(botoes, botao) {
    botoes.forEach(function(bot) {
        bot.classList.remove('aba-ativa');
    })
    botao.classList.add('aba-ativa');
}