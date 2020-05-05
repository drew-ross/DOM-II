// Your code goes here



const qs = (selector) => {
    return document.querySelector(selector);
}
const qsa = (selector) => {
    return document.querySelectorAll(selector);
}

let scrolled = false;

//Page elements
const images = Array.from(qsa('img'));
const header = qs('header');
const navLinks = Array.from(qsa('.nav-link'));
const paragraphs = Array.from(qsa('p'));
const body = qs('body');
const textInput = qs('#text-input');

//Event callbacks
const borderToggle = (event) => {
    event.stopPropagation();
    event.target.classList.toggle('border-toggle');
    gsap.from(event.target, {rotation: 360, duration: .5});
}

const headerBackground = (event) => {
    header.style.backgroundImage = 'url(/img/fun-bus-particle.png)';
    navLinks.forEach(item => {
        item.style.background = 'yellow';
        item.style.border = '1px solid black';
    })
}

const headerBackgroundOff = (event) => {
    header.style.backgroundImage = 'none';
    navLinks.forEach(item => {
        item.style.background = 'none';
        item.style.border = 'none';
    })
}

const dragShadow = (event) => {
    event.target.style.boxShadow = `0 0 100px purple`;
}

const dragShadowOff = (event) => {
    event.target.style.boxShadow = `none`;
}

const scrollColor = (event) => {
    if (scrolled === false) {
        paragraphs.forEach(item => item.style.color = `red`);
        scrolled = true;
        return scrolled;
    }
    if (scrolled === true) {
        paragraphs.forEach(item => item.style.color = 'black');
        scrolled = false;
        return scrolled;
    }
}

const keyPress = (event) => {
    paragraphs.forEach(item => {
        let content = '';
        for(i = 0; i < item.textContent.length; i++) {
            content += `${event.key[0]}`;
        }
        item.textContent = content;
    })
}

const inputFocus = (event) => {
    event.target.style.border = '5px solid purple';
}

const inputBlur = (event) => {
    event.target.style.border = '5px solid green';
}

//Event listeners
images.forEach((item) => { item.addEventListener('click', borderToggle) });
images.forEach((item) => { item.addEventListener('dragstart', dragShadow) });
images.forEach((item) => { item.addEventListener('dragend', dragShadowOff) });
header.addEventListener('pointerenter', headerBackground);
header.addEventListener('pointerleave', headerBackgroundOff);
document.addEventListener('scroll', scrollColor);
document.addEventListener('keydown', keyPress);
document.addEventListener('dblclick', () => body.style.background = 'lightgreen');
body.addEventListener('click', () => body.style.background = 'orange');
navLinks.forEach(item => item.addEventListener('click', (event) => event.preventDefault()));
textInput.addEventListener('focus', inputFocus);
textInput.addEventListener('blur', inputBlur);

//gsap animations

