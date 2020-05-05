// Your code goes here
const qs = (selector) => {
    return document.querySelector(selector);
}
const qsa = (selector) => {
    return document.querySelectorAll(selector);
}

//Page elements
const images = Array.from(qsa('img'));
const header = (qs('header'));
const navLinks = Array.from(qsa('.nav-link'))

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

//Event listeners
images.forEach((item) => { item.addEventListener('click', borderToggle) });
header.addEventListener('pointerenter', headerBackground);
header.addEventListener('pointerleave', headerBackgroundOff);