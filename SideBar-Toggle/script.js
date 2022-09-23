const toggleBtn = document.querySelector(".sidebar-toggle");
const fecharBtn = document.querySelector(".fechar-btn");
const sidebar = document.querySelector(".sidebar");
const footer = document.querySelector(".footer");

toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
    footer.classList.toggle('footer-diminuir');
})

fecharBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
    footer.classList.remove('footer-diminuir');
})