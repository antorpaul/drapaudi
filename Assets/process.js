import anime from 'node_modules/animejs/lib/anime.es.js';

console.log("working");

// observe image 5
var observer = new IntersectionObserver(function(entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if(entries[0].isIntersecting == true)
    {
        console.log('Element has just become 25% visible in screen');
        anime({
            targets: '.img5',
            translateX: '12%',
            easing: 'easeInOutSine',
            scale: 1.4,
            padding: '1.5rem',
            autoplay: true,
        });
    } else {
        anime({
            targets: '.img5',
            translateX: '0%',
            easing: 'easeInOutSine',
            scale: 1,
            padding: '0rem',
            autoplay: true,
        });
    }
}, { threshold: [0.25] } );

var img5 = document.querySelector(".img5");
img5.style.backgroundColor = '#FFF';
observer.observe(img5);

// observe image 7
var observer = new IntersectionObserver(function(entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if(entries[0].isIntersecting == true)
    {
        console.log('img7 has just become 25% visible in screen');
        anime({
            targets: '.img7',
            translateX: '-25%',
            easing: 'easeInOutSine',
            scale: 1.2
        })
    } else {
        console.log('img7 has just disappeared');
        anime({
            targets: '.img7',
            translateX: '0%',
            easing: 'easeInOutSine',
            scale: 1
        })
    }
}, { threshold: [0.1] } );

var img7 = document.querySelector(".img7");
img7.style.transformOrigin = 'top left';
img7.style.backgroundColor = '#FFF';
observer.observe(img7);


// observe image 8
var observer = new IntersectionObserver(function(entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if(entries[0].isIntersecting == true)
    {
        console.log('img8 has just become 25% visible in screen');
        anime({
            targets: '.img8',
            padding: '1.5rem',
            easing: 'easeInOutSine',
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
            duration: 600,
        })
    } else {
        console.log('img8 has just disappeared');
        anime({
            targets: '.img8',
            translateX: '0%',
            easing: 'easeInOutSine',
            padding: '0rem',
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
            duration: 400,
        })
    }
}, { threshold: [0.3] } );

var img8 = document.querySelector(".img8");
img8.style.transformOrigin = 'center';
img8.style.backgroundColor = '#FFF';
observer.observe(img8);