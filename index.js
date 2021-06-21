console.log("hello");

document.querySelector(".access__btn").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector(".access__email-input");
  const emailError = document.querySelector(".access__error");
  if (!email.value || !email.value.includes("@")) {
    emailError.style.visibility = "visible";
  } else {
    emailError.style.visibility = "hidden";
  }
});
