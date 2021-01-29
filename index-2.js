// SLIDE-IN paragraphes

const paragraphe  = document.querySelector('.slide');
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



/* Gestion Erreurs Form Start*/

  
let form = document.querySelector('form');





    // On selectionne les différents input du form
let firstName = form1.firstName;
let lastName  = form1.lastName;
let email     = form1.email;
let textArea  = form1.comments;

function validateForm() {

  if (firstName.value == null || firstName.value == "") {
    return false;
  } else if (lastName.value == null || lastName.value == "") {
    return false;
  } else {
    return true
  }
}

function validateEmail() {
  var x = document.form1.email.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Chaine de caractère de la forme suivante : "example@.fr"
  if (x.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateEmail()) {
    alert("Veuillez entrer une adresse email valide");
  } else if (validateForm() && validateEmail()) {
    email.value     = "";
    firstName.value = "";
    lastName.value  = "";
    textArea.value  = "";
    alert('Votre message a bien été envoyé');
  }
})

/* Gestion Erreurs Form End*/

