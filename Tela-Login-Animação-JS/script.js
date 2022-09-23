const labels = document.querySelectorAll(".email-senha label");

// função para adicionar cada letra das palavras 'Email' e 'Senha' em uma span distinta, e adicionar o efeito de delay (atraso) para que cada letra suba de forma individual
labels.forEach(function (label) {
	label.innerHTML = label.innerText
		.split("")
		.map(
			(letra, i) => `<span style="transition-delay:${i * 40}ms">${letra}</span>`
		)
		.join("");
});
