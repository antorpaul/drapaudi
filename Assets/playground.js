import anime from 'http://localhost:8000/Assets/node_modules/animejs/lib/anime.es.js';
// var anime = require('animejs');

// animation for the block
console.log("Working on block...");
var block_animation = anime({
    targets:'.animejs_test',
    translateX: 500,
    rotate: '1turn',
    backgroundColor: '#000',
    duration: 2400,
    easing: 'linear',
    autoplay: false
});

// controlling it with the slider
console.log("Working on slider...");
// var seek_progress = document.querySelector(".seek_test .progress")
// seek_progress.oninput = function() {
//     block_animation.seek(block_animation.duration * (seek_progress.value/100))
// };

var stagger = anime({
    targets: '.basic-staggering-demo .green_block',
    translateX: 270,
    delay: anime.stagger(300), // increase delay by 100ms for each elements.
    autoplay: false,
    loop: true,
    direction: 'alternate'
});

var seek_progress = document.querySelector(".seek_test .progress")
seek_progress.oninput = function() {
    stagger.seek(stagger.duration * (seek_progress.value/100))
};

var play_button = document.querySelector(".play");
play_button.onclick = stagger.play;

var pause_button = document.querySelector(".pause");
pause_button.onclick = stagger.pause;