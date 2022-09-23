const conteudo = document.querySelectorAll(".conteudo");

// ao carregar a página, TODOS os elementos são escondidos e logo após os elementos que cabem na tela são exibidos
window.addEventListener("DOMContentLoaded", function () {
	esconderElemento();
	exibirElementoEscondido();
});

// função que exibe os elementos conforme o usuário for rolando a página para baixo
window.addEventListener("scroll", function () {
	exibirElementoEscondido();
});

function exibirElementoEscondido() {
	const windowHeight = window.innerHeight; // armazena na variável windowHeight a altura da janela do usuário, em pixels
	for (let i = 0; i < conteudo.length; i++) {
		if (conteudo[i].getBoundingClientRect().bottom <= windowHeight) {
			conteudo[i].classList.remove("escondido-dir");
			conteudo[i].classList.remove("escondido-esq");
		}
	}
}

function esconderElemento() {
	let lado = 0;
	for (let i = 0; i < conteudo.length; i++) {
		if (lado % 2 == 0) {
			conteudo[i].classList.add("escondido-dir");
		} else {
			conteudo[i].classList.add("escondido-esq");
		}
		lado++;
	}
}
