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
const header = (qs('header'));
const navLinks = Array.from(qsa('.nav-link'));
const paragraphs = Array.from(qsa('p'));

//Event callbacks
const borderToggle = (event) => {
    event.target.classList.toggle('border-toggle');
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
        paragraphs.forEach(item => item.style.marginLeft = `5rem`);
        scrolled = true;
        return scrolled;
    }
    if (scrolled === true) {
        paragraphs.forEach(item => item.style.marginLeft = '0');
        scrolled = false;
        return scrolled;
    }
}


//Event listeners
images.forEach((item) => { item.addEventListener('click', borderToggle) });
images.forEach((item) => { item.addEventListener('dragstart', dragShadow) });
images.forEach((item) => { item.addEventListener('dragend', dragShadowOff) });
header.addEventListener('pointerenter', headerBackground);
header.addEventListener('pointerleave', headerBackgroundOff);
document.addEventListener('scroll', scrollColor);