

const paragraphe = document.querySelector('.slide');
const paragraphe2 = document.querySelector('.slide2');

function myFunction() {
    paragraphe.classList.add("translate");
    paragraphe2.classList.add("translate");
}

window.addEventListener('load', myFunction);