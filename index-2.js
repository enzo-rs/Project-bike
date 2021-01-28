// SLIDE-IN paragraphes

const paragraphe = document.querySelector('.slide');
const paragraphe2 = document.querySelector('.slide2');
const paragraphe3 = document.querySelector('.slide3');

function slideIn() {
    paragraphe.classList.add("translate");
    paragraphe2.classList.add("translate");
    paragraphe3.classList.add("translate3");
}

window.addEventListener('load', slideIn);


// NAV

let nav  = document.querySelector('#main');
let bike = document.querySelector('#show');

function modify() {
    bike.style.maxWidth = "191px";
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    nav.classList.add("fixed-nav");
  }

  window.addEventListener('load', modify);

