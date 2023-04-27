const form = document.querySelector(".subscribeForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");




function validateForm(event) {
  event.preventDefault();

if (validateEmail(email.value) === true) {
  emailError.style.display = "none";
  window.alert("success! Thank you for subscribing to our newsletter. We will contact you as soon as possible for your free consultation!");
  email.value = "";

} else {
  emailError.style.display = "block";
}};

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

