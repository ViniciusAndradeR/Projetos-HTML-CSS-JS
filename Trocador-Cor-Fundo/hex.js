const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById('btn-alterar');
const cor = document.querySelector('.cor')

btn.addEventListener('click', function() {
    // randomizar uma cor totalmente aleatória
    let hexAleatorio = randomizarHEX(hex);
    document.body.style.backgroundColor = hexAleatorio;
    cor.textContent = hexAleatorio;
})

function randomizarHEX(hex) {
    let r = String(hex[Math.floor(Math.random() * 16)]) + String(hex[Math.floor(Math.random() * 16)]); // randomiza a cor hexadecimal vermelha
    let g = String(hex[Math.floor(Math.random() * 16)]) + String(hex[Math.floor(Math.random() * 16)]); // randomiza a cor hexadecimal verde
    let b = String(hex[Math.floor(Math.random() * 16)]) + String(hex[Math.floor(Math.random() * 16)]); // randomiza a cor hexadecimal azul
    return "#" + r + g + b; // junta os números randomizados acima
}