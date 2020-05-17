import anime from '/node_modules/animejs/lib/anime.es.js';

// carousel.js
function switchToImg(next) {
    var bg = document.getElementById('hero');
    var herohd = document.getElementById('herotext');
    bg.style.background = `url(Assets/img/${next}.jpg)`;
    bg.style.backgroundSize = '100%';
    bg.style.backgroundPosition = 'bottom';
    console.log(`switched to ${next}.jpg`);
}

