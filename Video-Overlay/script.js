const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
const swit = document.querySelector('.switch')
const preloader = document.querySelector('.preloader')

btn.addEventListener('click', function() {
    if(swit.classList.contains('slide')) {
        swit.classList.remove('slide');
        video.play();
    }
    else {
        swit.classList.add('slide');
        video.pause();
    }
})

window.addEventListener('load', function() {
    preloader.classList.add('esconder-preloader');
  });