const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    const linksMenuTopo = document.querySelectorAll('.link-menu-topo');
    if(scrollHeight > navHeight + 30) {
        navbar.classList.add('fixed-nav');
        linksMenuTopo.forEach(function (link) {
            link.classList.add('link-menu-topo-preto')
            topLink.classList.add('exibir-link')
        })
    }
    else {
        navbar.classList.remove('fixed-nav');
        linksMenuTopo.forEach(function (link) {
            link.classList.remove('link-menu-topo-preto')
            topLink.classList.remove('exibir-link')
        })
    }
})