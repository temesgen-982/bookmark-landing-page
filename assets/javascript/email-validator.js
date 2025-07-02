const form = document.querySelector("form");
const input = form.querySelector("input");
const errorMessages = form.querySelectorAll(".email-error-message");
const inputWrapper = form.querySelector(".input-wrapper");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = input.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    inputWrapper.classList.add("bg-primary-400");
    input.classList.add("bg-red-100");
    errorMessages.forEach((msg) => msg.classList.remove("hidden"));
  } else {
    inputWrapper.classList.remove("bg-primary-400");
    input.classList.remove("bg-red-100");
    errorMessages.forEach((msg) => msg.classList.add("hidden"));
  }
});
