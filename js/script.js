/*//////////////////////////////////////////////////////////////////
[ opening page ]*/
const theList = document.querySelector('section.home ul'),
    myImg = document.querySelector('section.home header img'),
    welcomeTxt = document.querySelector('section.home pre'),
    openingPage = document.querySelector('div.openingpage');

document.getElementsByTagName('body')[0].onload = function () {
    setTimeout(() => {
        myImg.classList.add('showImg');
    }, 1000);

    setTimeout(() => {
        welcomeTxt.classList.add('fadeInUp');
    }, 1600);

    welcomeTxt.addEventListener('animationend', function () {
        this.style.zIndex = '5';
        this.style.color = '#2d4059';
        openingPage.classList.add('fadeOutRight');
        setTimeout(() => {
            welcomeTxt.style.color = '#e5e5e5';
            welcomeTxt.style.left = '25%'
        }, 100);
        setTimeout(() => {
            theList.classList.add('opacityEffect');
        }, 1000);
    });

    openingPage.addEventListener('animationend', function () {
        this.style.display = 'none';
    });
};

/*//////////////////////////////////////////////////////////////////
[ active a ]*/
const anchors = document.querySelectorAll('section.home ul li a');

anchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        anchors.forEach((anchor) => {
            anchor.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});

/*//////////////////////////////////////////////////////////////////
[ parallax effect mousemove ]*/
const spans = document.querySelectorAll('div.main span');

document.addEventListener('mousemove', function (e) {
    spans.forEach(span => {
        const speed = span.getAttribute('data-speed')

        const xAxis = (window.innerWidth - e.pageX * speed) / 100
        const yAxis = (window.innerHeight - e.pageY * speed) / 100

        span.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`
    });
});

/*//////////////////////////////////////////////////////////////////
[Show Unicorn ]*/
let compareUnicorn = [],
    unicornWord = ["U", "N", "I", "C", "O", "R", "N"];

document.addEventListener("keypress", (e) => {
    compareUnicorn.push(e.key);
    compareUnicorn.splice(
        -unicornWord.length - 1,
        compareUnicorn.length - unicornWord.length
    );
    if (compareUnicorn.join("").toUpperCase().includes("UNICORN")) {
        cornify_add();
    }
});

const unicornImg = document.querySelector('div.unicorn img'),
    hintUnicornText = document.querySelector('div.unicorn p');

unicornImg.addEventListener('click', () => {
    hintUnicornText.classList.add('showUnicornHint');
    unicornImg.classList.remove('shakeEffect');
});

/*//////////////////////////////////////////////////////////////////
[shakeEffect on Uincorn Img]*/

window.onscroll = function () {
    let totalPageHeight = document.body.scrollHeight,
        scrollPoint = window.scrollY + window.innerHeight;
    if (hintUnicornText.classList.contains('showUnicornHint')) {
        return;
    } else {
        if (scrollPoint >= totalPageHeight - 100) {
            unicornImg.classList.add('shakeEffect');
        }
    }
}



/*//////////////////////////////////////////////////////////////////
[scrollreveal js ]*/

ScrollReveal().reveal('.mySkillsDiv', {
    delay: 600,
    distance: '20px',
    duration: 300,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true,
});

ScrollReveal().reveal('.myInfo', {
    delay: 1000,
    distance: '20px',
    duration: 300,
    easing: 'ease-in-out',
    origin: 'left',
    reset: true,
});

ScrollReveal().reveal('.ausbildungContent', {
    delay: 1000,
    distance: '20px',
    duration: 300,
    easing: 'ease-in-out',
    origin: 'right',
    reset: true,
});

ScrollReveal().reveal('.revealEffect', {
    delay: 1500,
    interval: 200,
    duration: 250,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false,
});

ScrollReveal().reveal('.thanksText', {
    delay: 1000,
    distance: '20px',
    duration: 300,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false,
});