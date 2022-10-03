const contProdutos = document.querySelector(".conteudo-cardapio");
const botoes = document.querySelectorAll(".btn-filtro");

function preencherProdutos(categoria) {
	contProdutos.innerHTML = "";
	if (categoria == "Todos") {
		const botao = document.getElementById(categoria);
		botoes.forEach(function (b) {
			b.classList.remove("btn-filtro-ativo");
		});
		botao.classList.add("btn-filtro-ativo");
		for (let i = 0; i < produtos.length; i++) {
			let produto = produtos[i];
			contProdutos.innerHTML += `
            <!-- Inicio de um item individual do Cardápio -->
                        <div class="item-cardapio">
                            <div class="item-img">
                                <img
                                    src=${produto.img + "320"}
                                    alt="${produto.categoria}"
                                />
                                <a href=${produto.credito} target="_blank">
                                <div class="link-creditos-produto">
                                    <i class="fa-solid fa-up-right-from-square"></i>
                                </div>
                                </a>
                            </div>
                            <div class="item-info">
                                <div class="item-titulo">${produto.titulo}</div>
                                <div class="item-avaliacao">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div class="item-descricao">
                                    ${produto.descricao}
                                </div>
                                <div class="item-preco">R$ ${String(
																	produto.preco
																).replace(/\./g, ",")}</div>
                            </div>
                        </div>
                        <!-- Fim de um item individual do Cardápio -->
            `;
		}
	} else {
		const botao = document.getElementById(categoria);
		botoes.forEach(function (b) {
			b.classList.remove("btn-filtro-ativo");
		});
		botao.classList.add("btn-filtro-ativo");
		for (let i = 0; i < produtos.length; i++) {
			if (produtos[i].categoria == categoria) {
				contProdutos.innerHTML += `
                        <!-- Inicio de um item individual do Cardápio -->
                        <div class="item-cardapio">
                            <div class="item-img">
                                <img
                                    src=${produtos[i].img + "320"}
                                    alt="${produtos[i].categoria}"
                                />
                                <a href=${produtos[i].credito} target="_blank">
                                <div class="link-creditos-produto">
                                    <i class="fa-solid fa-up-right-from-square"></i>
                                </div>
                                </a>
                            </div>
                            <div class="item-info">
                                <div class="item-titulo">${
																	produtos[i].titulo
																}</div>
                                <div class="item-avaliacao">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div class="item-descricao">
                                    ${produtos[i].descricao}
                                </div>
                                <div class="item-preco">R$ ${String(
																	produtos[i].preco
																).replace(/\./g, ",")}</div>
                            </div>
                        </div>
                        <!-- Fim de um item individual do Cardápio -->
                    `;
			}
		}
	}
}

preencherProdutos("Todos");

// function preencherProdutosCat(categoria) {
// 	let produtosCategoria = [];
// 	for (let i = 0; i < produtos.length; i++) {
// 		if (produtos[i] === categoria) {
// 			produtosCategoria.push(produtos[i]);
// 		}
// 	}
// }
