// itens do menu
const menu = [
    {
        id: 1,
        titulo: "Duplo Burguer Salada",
        categoria: "lanche",
        preco: "29,90",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
        descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, recusandae perferendis ab amet corrupti culpa nobis animi modi facilis nesciunt?"
    },
    {
        id: 2,
        titulo: "Duplo Burguer Bacon",
        categoria: "lanche",
        preco: "34,90",
        img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente, id ratione architecto libero aliquid voluptates, magnam non tempore, delectus blanditiis! Non quis quia libero!"
    },
    {
        id: 3,
        titulo: "Onions Burguer Salada",
        categoria: "lanche",
        preco: "24,90",
        img: "https://images.unsplash.com/photo-1585238341710-4d3ff484184d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1104&q=80",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam doloremque voluptatum fuga fugiat! Dolor delectus accusantium minus illum maxime repellendus odit quis, impedit reiciendis molestias!"
    },
    {
        id: 4,
        titulo: "Cheese Burguer",
        categoria: "lanche",
        preco: "22,90",
        img: "https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 5,
        titulo: "Torta Cremosa de Mirtilo",
        categoria: "sobremesa",
        preco: "19,90",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 6,
        titulo: "Morango Coberto de Chocolate",
        categoria: "sobremesa",
        preco: "32,90",
        img: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 7,
        titulo: "Torta da Vovó",
        categoria: "sobremesa",
        preco: "19,90",
        img: "https://images.unsplash.com/photo-1541781550486-81b7a2328578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 8,
        titulo: "Cupcakes para Crianças",
        categoria: "sobremesa",
        preco: "12,90",
        img: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 9,
        titulo: "Donuts de Chocolate",
        categoria: "sobremesa",
        preco: "17,90",
        img: "https://images.unsplash.com/photo-1606312618475-79449b044093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 10,
        titulo: "Torta de Amendoim",
        categoria: "sobremesa",
        preco: "15,90",
        img: "https://images.unsplash.com/photo-1554298128-c916518a4b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 11,
        titulo: "Coquetel de Cogumelo",
        categoria: "bebida",
        preco: "19,90",
        img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 12,
        titulo: "Batida Alcoólica de Morango",
        categoria: "bebida",
        preco: "16,90",
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 13,
        titulo: "Coquetel Smoothie de Coco",
        categoria: "bebida",
        preco: "19,90",
        img: "https://images.unsplash.com/photo-1473115209096-e0375dd6b3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 14,
        titulo: "Nossa Conceituada Bebida Holística",
        categoria: "bebida",
        preco: "24,90",
        img: "https://images.unsplash.com/photo-1472245088132-ccd50746725c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 15,
        titulo: "Caipirinha no Copo Sujo",
        categoria: "bebida",
        preco: "18,90",
        img: "https://images.unsplash.com/photo-1622322331040-088df8424c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 16,
        titulo: "Camarão com Ravioli",
        categoria: "prato",
        preco: "19,90",
        img: "https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 17,
        titulo: "Camarão Frito",
        categoria: "prato",
        preco: "22,90",
        img: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 18,
        titulo: "Salada de Vegetais e Folhas",
        categoria: "prato",
        preco: "14,90",
        img: "https://images.unsplash.com/photo-1549745708-fa4a8423a0b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 19,
        titulo: "Picanha de Panela com Vegetais",
        categoria: "prato",
        preco: "36,90",
        img: "https://images.unsplash.com/photo-1428259067396-2d6bd3827878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
    {
        id: 20,
        titulo: "Filé Mignon com Salada de Folhas e Legumes",
        categoria: "prato",
        preco: "19,90",
        img: "https://images.unsplash.com/photo-1585112799768-bb129fd10250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores quisquam impedit odit libero similique minus id. Odit pariatur ea debitis quae similique dicta enim?"
    },
];

const sectionCenter = document.querySelector('.section-center');
const btnCategoria = document.querySelectorAll('.btn');

window.addEventListener('DOMContentLoaded', function() {
    adicionarTodosItens();
})

function adicionarTodosItens() {
    let exibirMenu = menu.map(function(item) {
        return `<article class="menu-item">
        <img
          src=${item.img}
          class="foto"
          alt=${item.titulo}
        />
        <div class="item-info">
          <header>
            <h4>${item.titulo}</h4>
            <h4 class="preco">${item.preco}</h4>
          </header>
          <p class="item-texto">
          ${item.descricao}
          </p>
        </div>
      </article>`;
    })
    exibirMenu = exibirMenu.join('');
    sectionCenter.innerHTML = exibirMenu;
}

function adicionarItemCategoria(categ) {
    let itens = [];
    for(let i = 0; i < menu.length; i++) {
        if(menu[i].categoria == categ) {
            itens.push(menu[i])
        }
    }
    let exibirMenu = itens.map(function(item) {
        return `<article class="menu-item">
        <img
          src=${item.img}
          class="foto"
          alt=${item.titulo}
        />
        <div class="item-info">
          <header>
            <h4>${item.titulo}</h4>
            <h4 class="preco">${item.preco}</h4>
          </header>
          <p class="item-texto">
          ${item.descricao}
          </p>
        </div>
      </article>`;
    })
    exibirMenu = exibirMenu.join('');
    sectionCenter.innerHTML = exibirMenu;
}

btnCategoria.forEach(function(botao) {
    botao.addEventListener('click', function() {
        sectionCenter.innerHTML = '';
        if(botao.classList.contains('pratos')) {
            adicionarItemCategoria('prato');
        }
        else if (botao.classList.contains('lanches')) {
            adicionarItemCategoria('lanche');
        }
        else if (botao.classList.contains('bebidas')) {
            adicionarItemCategoria('bebida');
        }
        else if (botao.classList.contains('sobremesas')) {
            adicionarItemCategoria('sobremesa');
        }
        else if (botao.classList.contains('todos')) {
            adicionarTodosItens();
        }
    })
})