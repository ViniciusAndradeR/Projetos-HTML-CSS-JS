let vlInicial = 0;
let valorTotal = 0;
let valorParcela = 0;

let qtdParc = 0;

/* Taxas da maquininha pelo plano Ultraton em 18/08/2022 armazenadas em um vetor */
const parcelas = [3.20, 4.62, 5.48, 6.34, 7.20, 8.06, 8.92, 9.78, 10.63, 11.49, 12.35, 12.99];

function calcular() { 

    /* Cria uma variável vlInicial e define valor conforme valor inserido na caixa de entrada do programa */
    vlInicial = parseFloat(document.getElementById('vl-inicial').value);

    /* Limpa os dados caso o usuário já tenha realizado um cálculo anteriormente */
    document.getElementById('parcelas').innerHTML = '';

    /* Se o valor inserido for menor que 10, programa informa ao usuário que valor obrigatoriamente precisa ser maior ou igual a 10 */
    if(vlInicial < 10) {
        document.getElementById("qtd-parcelas").innerHTML = "O valor precisa ser acima de R$10,00";
    }

    else {
        let count = 1;
        qtdParc = 12;
        document.getElementById("qtd-parcelas").innerHTML = "Parcelamento em até 12x no Cartão de Crédito:";


        while(count <= qtdParc){
            /* Calcular taxas */
            valorTotal = vlInicial + (vlInicial * (parcelas[count-1] / 100));
            valorParcela = valorTotal / count;

            /* Formatar para exibir como moeda Real */
            valorTotal = valorTotal.toFixed(2).replace(".", ",");
            valorParcela = valorParcela.toFixed(2).replace(".", ",");

            /* Cria um elemento PARAGRAFO */
            var p = document.createElement('p');

            /* Altera o conteúdo do elemento PARAGRAFO criado na linha acima para exibir o valor formatado da parcela e o valor total com as taxas */
            p.innerHTML = count + 'x de R$' + valorParcela + '. Total: R$' + valorTotal;

            /* Adiciona o elemento criado e formatado acima para a DIV com id 'parcelas' */
            document.getElementById('parcelas').appendChild(p);
            count++;
        }
        
    }
}
