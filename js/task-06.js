const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", () => {
    if (textInput.value.length * 1 === textInput.dataset.length * 1) {
      textInput.classList.contains("invalid") ? textInput.classList.remove("invalid") : {};
    textInput.classList.add("valid");
  } else {
    textInput.classList.contains("valid")
      ? textInput.classList.remove("valid")
      : {};
    textInput.classList.add("invalid");
  }
});