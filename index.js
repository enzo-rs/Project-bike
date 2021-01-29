/* Sticky Nav */
let nav = document.querySelector('#main');
let lost = document.querySelector('#show');
topNav = nav.offsetTop;

function modify() {
  lost.style.maxWidth = "191px";
  document.body.style.paddingTop = nav.offsetHeight + 'px'; // modification qui permet d'éviter l'effet saccadé
  nav.classList.add("fixed-nav");

}

function reset() {
  lost.style.maxWidth = "0px";
  document.body.style.paddingTop = 0;
  nav.classList.remove("fixed-nav");
}

window.addEventListener('scroll', () => {
  let lastPos = window.scrollY;
  if (lastPos >= topNav) {
    modify();
  } else {
    reset();
  }
})


/* Automatic slider */
var counter = 1;
setInterval(function () {
  document.querySelector('#radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);





