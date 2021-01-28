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



/* Gestion Erreurs Form Start*/

  
let form = document.querySelector('form');
let btn = document.querySelector('button');



function ValidateEmail() {
  let email = form.querySelector(`input[name= "email"]`);

  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (email.value.match(mailformat)) {
    email.style.borderColor = 'silver';
    email.value = "";
    alert("You have entered a valid email address!");
  } else {
    email.style.borderColor = 'red';
    alert("You have entered an invalid email address!");
  }

}

function ValidateNames(name) {

  if (name.value === "" || !isNaN(name.value)) {
    name.style.borderColor = 'red';
  } else {
    name.style.borderColor = 'silver';
    name.value = "";
  }
}


let firstName = form1.firstName;
let lastName = form1.lastName;
let email = form1.email;

function ValidateForm() {

  if (firstName.value == null || firstName.value == "") {
    return false;
  } else if (lastName.value == null || lastName.value == "") {
    return false;
  } else {
    return true
  }
}

function validateemail() {
  var x = document.form1.email.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (x.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateemail()) {
    alert("Please enter a valid e-mail address");
  } else if (ValidateForm() && validateemail()) {
    email.value = "";
    firstName.value = "";
    lastName.value = "";
    alert('Votre message a bien été envoyé')
  }
})

/* Gestion Erreurs Form End*/

