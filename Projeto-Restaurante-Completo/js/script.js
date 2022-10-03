// constantes ref. aos elementos Botão de Hambúrguer e Menu Escondido
const btnHamburger = document.querySelector(".hamburger-lista");
const menuToggle = document.querySelector(".menu-toggle");

// função TOGGLE quando usuário clicar no ícone de hambúrguer
// no canto superior direita da tela (quando a tela tiver 800px
// ou menos de largura). Função que esconde e exibe o menu escondido
btnHamburger.addEventListener("click", function () {
	menuToggle.classList.toggle("esconder-menu-toggle");
});
