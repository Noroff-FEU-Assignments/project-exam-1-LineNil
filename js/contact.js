newPageTitle = 'Contact';
document.title = newPageTitle;

const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email-contact");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

//name

function validateForm(event){
  event.preventDefault();

  if (fullName.value.trim().length > 5) {
    fullNameError.style.display = "none";
  }
  else{
    fullNameError.style.display = "block";
  }

  //email

  //if(validateEmail(email.value)=== true){
    emailError.style.display = "none";
  } else{
    emailError.style.display = "block";
  }

  //subject

  if (subject.value.trim().length > 15) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  //message

  if (message.value.trim().length > 25) {
    messageError.style.display = "none";
  }
  else {
    messageError.style.display = "block";
  }

  //succsess message (alert)

  if(fullName.value.trim().length > 0 && email.value.trim().length > 0 && subject.value.trim().length > 0 && message.value.trim().length > 0 === true){
    window.alert("success! Your message has been sendt. we will get back to you as soon as possible!");}
    
    fullName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

//email

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

