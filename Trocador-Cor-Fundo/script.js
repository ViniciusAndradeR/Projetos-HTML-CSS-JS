const btn = document.getElementById('btn-alterar');
const cor = document.querySelector('.cor')

btn.addEventListener('click', function() {
    // randomizar uma cor totalmente aleatória
    let rgbAleatorio = randomizarRGB();
    document.body.style.backgroundColor = rgbAleatorio;
    cor.textContent = rgbAleatorio;
})

function randomizarRGB() {
    let r = Math.floor(Math.random() * 256); // randomiza um número entre 0 a 255
    let g = Math.floor(Math.random() * 256); // randomiza um número entre 0 a 255
    let b = Math.floor(Math.random() * 256); // randomiza um número entre 0 a 255
    return "rgb(" + r + ", " + g + ", " + b + ")"; // junta os números randomizados acima
}