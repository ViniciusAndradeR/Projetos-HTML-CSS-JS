// reviews armazenados em objetos em array
const reviews = [
    {
        id: 1, name: "Antônio Moura",
        job: "UI Designer",
        img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni illum modi doloremque officiis, unde hic praesentium repellendus eligendi ad. Quo iste suscipit maxime in voluptates minima, et magnam accusantium quas voluptas saepe! Voluptatibus qui minus dolor officia maiores alias."
    },
    {
        id: 2, name: "Maria Souza",
        job: "Analista de Sistemas",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui error harum a dolores tempore totam veniam esse possimus autem commodi. Dolorem reiciendis earum qui, quasi voluptas blanditiis natus obcaecati, error, corrupti enim eveniet aut incidunt porro dicta nesciunt hic dolores!"
    },
    {
        id: 3, name: "Laura Neves",
        job: "Analista de Seg. Informação",
        img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit minima unde numquam minus cumque est provident atque sed error necessitatibus architecto eius accusantium deleniti amet ea repellat velit, magnam corrupti voluptas porro doloribus ratione. Animi quae quod eos consequuntur enim?"
    },
    {
        id: 4, name: "João Pessoa",
        job: "Analista de Testes",
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nisi dolor molestiae, temporibus voluptas aut rem sed deserunt praesentium ad, adipisci quam delectus, atque nam eveniet perspiciatis harum et? Ea debitis eaque, pariatur consectetur quas nihil quasi officiis error ipsam."
    },
    {
        id: 5, name: "Aline Ramos",
        job: "Gerente de R.H.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, rem libero. Rerum officiis aut ullam deleniti? Quae iste sapiente nemo dolorem dolore, libero eligendi ut exercitationem minus illum accusantium ad."
    }
];

// selecionar elementos e armazená-los em variáveis
const img = document.getElementById('cliente-img');
const autor = document.getElementById('autor');
const job = document.getElementById('job');
const info = document.getElementById('info');

const anteriorBtn = document.querySelector('.anterior-btn')
const proximoBtn = document.querySelector('.proximo-btn')
const randomBtn = document.querySelector('.random-btn')

//define o item inicial
let itemAtual = 0;

//carregar o item inicial
window.addEventListener('DOMContentLoaded', function() {
    trocar(0); // exibe o primeiro review por padrão
});

//trocar o review
function trocar(itemAtual) {
    let item = reviews[itemAtual];
    img.src = item.img;
    autor.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

//trocar para o review anterior
function anterior() {
    if(itemAtual > 0) {
        itemAtual--;
        trocar(itemAtual);
    }
    else {
        itemAtual = reviews.length - 1;
        trocar(itemAtual);
    }
}

//trocar para o próximo review
function proximo() {
    if(itemAtual < (reviews.length - 1)) {
        itemAtual++;
        trocar(itemAtual);
    }
    else {
        itemAtual = 0;
        trocar(itemAtual);
    }
}

//trocar para um review aleatório
function random() {
    let itemAnterior = itemAtual;
    do {
        itemAtual = Math.floor(Math.random() * (reviews.length));
        console.log(itemAtual)
        trocar(itemAtual);
    } while (itemAtual == itemAnterior)
}