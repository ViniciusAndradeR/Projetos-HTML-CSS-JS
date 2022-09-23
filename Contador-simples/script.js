// define o contador inicial
let count = 0;

// selecionar valor e botões
const valor = document.querySelector('#valor');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList; // atribui as classes do elemento (evento) à constante styles

        // se o elemento contém a classe diminuir: diminua o contador
        if(styles.contains('diminuir')) {
            count--;
        }

        // se o elemento contém a classe zerar: zere o contador
        else if(styles.contains('zerar')) {
            count = 0;
        }

        // se o elemento contém a classe aumentar: aumente o contador
        else {
            count++;
        }

        // atualizar o elemento (span) com a contagem atual
        valor.textContent = count;

        // se o contador menor que 0, atualize o estilo para Cor Vermelha
        if(count < 0) {
            valor.style.color = 'rgb(200, 0, 0)';
        }

        // se o contador igual a 0, atualize o estilo para Cor Preta
        else if(count == 0) {
            valor.style.color = 'black';
        }

        // se o contador maior que 0, atualize o estilo para Cor Verde
        else {
            valor.style.color = 'rgb(0, 200, 0)';
        }
    })
})