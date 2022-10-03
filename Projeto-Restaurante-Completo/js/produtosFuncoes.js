const modalContDestaque = document.querySelector(".modal-conteudo-destaque");
const containerDestaques = document.querySelector(".container-destaques");

function preencherDestaques() {
	// variável array que armazenará os objetos que estão em destaque
	let destaques = [];

	// função que verificará todos os objetos e armazenará apenas os
	// que estão em destaque na variável array 'destaques'
	produtos.forEach(function (p) {
		if (p.destaque == true) {
			destaques.push(p);
		}
	});

	// preencher os produtos em destaque na página inicial
	destaques.forEach(function (prod) {
		containerDestaques.innerHTML += `
			<!-- Inicio de um destaque individual -->
				<div class="destaque">
					<div class="destaque-imagem">
						<img
							src=${prod.img + "320"}
							alt=${prod.categoria}
						/>
						<a href=${prod.credito} target="_blank">
							<div class="link-creditos-produto">
								<i class="fa-solid fa-up-right-from-square"></i>
							</div>
						</a>
					</div>
					<div class="destaque-info">
						<div class="destaque-titulo">
							<p>${prod.titulo}</p>
						</div>
						<div class="destaque-preco">
							<p>R$ ${String(prod.preco).replace(/\./g, ",")}</p>
						</div>
						<div class="destaque-descricao">
							<p>
								${prod.descricao}
							</p>
						</div>
						<div class="saber-mais-div">
							<a href="#saber-mais-modal">Saber Mais</a>
							<div class="id-registro">
								${prod.id}
							</div>
						</div>
						
					</div>
				</div>
			<!-- Fim de um destaque individual -->`;
	});
}

// chamada da função para Preencher os Destaques ao executar o script (carregar a página)
preencherDestaques();

const botoesSaberMais = document.querySelectorAll(".saber-mais-div");

botoesSaberMais.forEach(function (btns) {
	btns.addEventListener("click", function (btn) {
		let conteudoRegistro = btn.currentTarget.lastElementChild.innerHTML;
		let botaoFechar =
			'<a href="#id-destaque" class="fechar-modal-destaque">&times;</a>';
		produtos.forEach(function (r) {
			if (r.id == conteudoRegistro) {
				let conteudo = `<div class="destaque-modal">
				<div class="destaque-imagem">
					<img
						src=${r.img + "160"}
						alt=${r.categoria}
					/>
					<a href=${r.credito} target="_blank">
						<div class="link-creditos-produto">
							<i class="fa-solid fa-up-right-from-square"></i>
						</div>
					</a>
				</div>
				<div class="destaque-info">
					<div class="destaque-titulo">
						<p>${r.titulo}</p>
					</div>
					<div class="destaque-preco">
						<p>R$ ${String(r.preco).replace(/\./g, ",")}</p>
					</div>
					<div class="destaque-descricao-modal">
						<p>
							${r.descricao}
						</p>
					</div>
				</div>
			</div>`;
				modalContDestaque.innerHTML = conteudo + botaoFechar;
			}
		});
	});
});
