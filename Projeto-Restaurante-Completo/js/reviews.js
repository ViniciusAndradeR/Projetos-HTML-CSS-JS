// reviews armazenados em objetos em array
const reviews = [
	{
		id: 1,
		name: "José Alves",
		img: "https://unsplash.com/photos/WNoLnJo7tS8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY0MzEwMjQ1&force=true&w=320",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni illum modi doloremque officiis, unde hic praesentium repellendus eligendi ad. Quo iste suscipit maxime in voluptates minima, et magnam accusantium quas voluptas saepe! Voluptatibus qui minus dolor officia maiores alias.",
		credito: "https://unsplash.com/photos/WNoLnJo7tS8",
	},
	{
		id: 2,
		name: "Maria Souza",
		img: "https://unsplash.com/photos/bqe0J0b26RQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzF8fHBlcnNvbnxlbnwwfHx8fDE2NjQzMDE3Nzg&force=true&w=320",
		review:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui error harum a dolores tempore totam veniam esse possimus autem commodi. Dolorem reiciendis earum qui, quasi voluptas blanditiis natus obcaecati, error, corrupti enim eveniet aut incidunt porro dicta nesciunt hic dolores!",
		credito: "https://unsplash.com/photos/bqe0J0b26RQ",
	},
	{
		id: 3,
		name: "Laura Neves",
		img: "https://unsplash.com/photos/s4nS3munSg8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY0MzIyMTQ4&force=true&w=320",
		review:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit minima unde numquam minus cumque est provident atque sed error necessitatibus architecto eius accusantium deleniti amet ea repellat velit, magnam corrupti voluptas porro doloribus ratione. ",
		credito: "https://unsplash.com/photos/s4nS3munSg8",
	},
	{
		id: 4,
		name: "Joanna Santos",
		img: "https://unsplash.com/photos/9kQBQqY_xrk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY0MzIyMjAz&force=true&w=320",
		review:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nisi dolor molestiae, temporibus voluptas aut rem sed deserunt praesentium ad, adipisci quam delectus, atque nam eveniet perspiciatis harum et? Ea debitis eaque, pariatur consectetur quas nihil quasi officiis error ipsam.",
		credito: "https://unsplash.com/photos/9kQBQqY_xrk",
	},
	{
		id: 5,
		name: "Aline Ramos",
		img: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY0MzYyNTc2&force=true&w=320",
		review:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, rem libero. Rerum officiis aut ullam deleniti? Dolorem reiciendis earum qui, quo iste suscipit maxime in voluptates minima quae iste sapiente nemo dolorem dolore, libero eligendi ut exercitationem minus illum accusantium ad.",
		credito: "https://unsplash.com/photos/mEZ3PoFGs_k",
	},
	{
		id: 6,
		name: "Regina Moura",
		img: "https://unsplash.com/photos/LaK153ghdig/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY0MzYzNDY4&force=true&w=320",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni illum modi doloremque officiis, unde hic praesentium repellendus eligendi ad. Quo iste suscipit maxime in voluptates minima, et magnam accusantium quas voluptas saepe! Voluptatibus qui minus dolor officia maiores alias.",
		credito: "https://unsplash.com/photos/LaK153ghdig",
	},
	{
		id: 7,
		name: "Fernanda Cunha",
		img: "https://unsplash.com/photos/6W4F62sN_yI/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY0MzY1NzUz&force=true&w=320",
		review:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui error harum a dolores tempore totam veniam esse possimus autem commodi. Dolorem reiciendis earum qui, quasi voluptas blanditiis natus obcaecati, error, corrupti enim eveniet aut incidunt porro dicta nesciunt hic dolores!",
		credito: "https://unsplash.com/photos/6W4F62sN_yI",
	},
	{
		id: 8,
		name: "Renato Peres",
		img: "https://unsplash.com/photos/d1UPkiFd04A/download?force=true&w=320",
		review:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit minima unde numquam minus cumque est provident atque sed error necessitatibus architecto eius accusantium deleniti amet ea repellat velit, magnam corrupti voluptas porro doloribus ratione. ",
		credito: "https://unsplash.com/photos/d1UPkiFd04A",
	},
	{
		id: 9,
		name: "Carlos Almeida",
		img: "https://unsplash.com/photos/eSjmZW97cH8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OTd8fHBlcnNvbnxlbnwwfHx8fDE2NjQyODA2OTg&force=true&w=320",
		review:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nisi dolor molestiae, temporibus voluptas aut rem sed deserunt praesentium ad, adipisci quam delectus, atque nam eveniet perspiciatis harum et? Ea debitis eaque, pariatur consectetur quas nihil quasi officiis error ipsam.",
		credito: "https://unsplash.com/photos/eSjmZW97cH8",
	},
	{
		id: 10,
		name: "Jéssica Leite",
		img: "https://unsplash.com/photos/An7LvVMb6rY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY0MzY0MTA3&force=true&w=320",
		review:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, rem libero. Rerum officiis aut ullam deleniti? Dolorem reiciendis earum qui, quo iste suscipit maxime in voluptates minima quae iste sapiente nemo dolorem dolore, libero eligendi ut exercitationem minus illum accusantium ad.",
		credito: "https://unsplash.com/photos/An7LvVMb6rY",
	},
	{
		id: 11,
		name: "Ana Cristina",
		img: "https://unsplash.com/photos/u3WmDyKGsrY/download?force=true&w=320",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni illum modi doloremque officiis, unde hic praesentium repellendus eligendi ad. Quo iste suscipit maxime in voluptates minima, et magnam accusantium quas voluptas saepe! Voluptatibus qui minus dolor officia maiores alias.",
		credito: "https://unsplash.com/photos/u3WmDyKGsrY",
	},
	{
		id: 12,
		name: "Julia Amorim",
		img: "https://unsplash.com/photos/_H5Tnj7e1hc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY0MzY2Nzg2&force=true&w=320",
		review:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nisi dolor molestiae, temporibus voluptas aut rem sed deserunt praesentium ad, adipisci quam delectus, atque nam eveniet perspiciatis harum et? Ea debitis eaque, pariatur consectetur quas nihil quasi officiis error ipsam.",
		credito: "https://unsplash.com/photos/_H5Tnj7e1hc",
	},
	{
		id: 13,
		name: "Yasmin Guedes",
		img: "https://unsplash.com/photos/J1OScm_uHUQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTM4fHxwZXJzb258ZW58MHx8fHwxNjY0MzQ3MjAz&force=true&w=320",
		review:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui error harum a dolores tempore totam veniam esse possimus autem commodi. Dolorem reiciendis earum qui, quasi voluptas blanditiis natus obcaecati, error, corrupti enim eveniet aut incidunt porro dicta nesciunt hic dolores!",
		credito: "https://unsplash.com/photos/J1OScm_uHUQ",
	},
	{
		id: 14,
		name: "Thales Souza",
		img: "https://unsplash.com/photos/_RcTaCHHMI0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjY1fHxwZXJzb258ZW58MHx8fHwxNjY0MzUwMDk4&force=true&w=320",
		review:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit minima unde numquam minus cumque est provident atque sed error necessitatibus architecto eius accusantium deleniti amet ea repellat velit, magnam corrupti voluptas porro doloribus ratione. ",
		credito: "https://unsplash.com/photos/_RcTaCHHMI0",
	},
	{
		id: 15,
		name: "Isaías Rodrigues",
		img: "https://unsplash.com/photos/7UnpbvqKRK0/download?force=true&w=320",
		review:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, rem libero. Rerum officiis aut ullam deleniti? Dolorem reiciendis earum qui, quo iste suscipit maxime in voluptates minima quae iste sapiente nemo dolorem dolore, libero eligendi ut exercitationem minus illum accusantium ad.",
		credito: "https://unsplash.com/photos/7UnpbvqKRK0",
	},
	{
		id: 16,
		name: "Rita Takeuchi",
		img: "https://unsplash.com/photos/rzJ4TEQZe4M/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzk1fHxwZXJzb258ZW58MHx8fHwxNjY0MzY0ODM2&force=true&w=320",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni illum modi doloremque officiis, unde hic praesentium repellendus eligendi ad. Quo iste suscipit maxime in voluptates minima, et magnam accusantium quas voluptas saepe! Voluptatibus qui minus dolor officia maiores alias.",
		credito: "https://unsplash.com/photos/rzJ4TEQZe4M",
	},
];

const modalConteudo = document.querySelector(".modal-conteudo");
const btnAnterior = document.querySelector(".anterior-btn");
const btnProximo = document.querySelector(".proximo-btn");

//define o item inicial
let itemAtual = 0;

//carrega o primeiro objeto do array 'reviews' declarado na primeira linha
window.addEventListener("DOMContentLoaded", function () {
	trocar(itemAtual);
});

function trocar(itemAtual) {
	let review = reviews[itemAtual];
	modalConteudo.innerHTML = `
    <h3>Avaliações</h3>

					<div class="foto-avaliador">
						<img
							src=${review.img}
							class="foto-avaliador"
						/>
						<div class="quote"><i class="fa-solid fa-quote-left"></i></div>
						<a href=${review.credito} target="_blank">
							<div class="link-creditos-avaliacao">
								<i class="fa-solid fa-up-right-from-square"></i>
							</div>
						</a>
					</div>

					<div class="nome-avaliador">${review.name}</div>

					<div class="nota-avaliador cinco-estrelas">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
					</div>

					<div class="texto-avaliacao">
						<p>
                        ${review.review}
						</p>
					</div>

					<div class="btn-container">
						<button onclick="anterior()" class="anterior-btn">
							<i class="fas fa-chevron-left"></i>
						</button>
						<button onclick="proximo()" class="proximo-btn">
							<i class="fas fa-chevron-right"></i>
						</button>
					</div>

					<a href="#" class="fechar-modal">&times;</a>
    `;
}

function proximo() {
	if (itemAtual < reviews.length - 1) {
		itemAtual++;
		trocar(itemAtual);
	}
}

function anterior() {
	if (itemAtual > 0) {
		itemAtual--;
		trocar(itemAtual);
	}
}
